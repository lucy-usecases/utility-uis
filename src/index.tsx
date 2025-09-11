import * as React from "react";
import { registerUI, IContextProvider } from './uxp';
import { FormField, Select, Label, Input, MapComponent, IMarker, IconButton, Button, AsyncButton, Loading, useToast, SearchBox, Modal, Checkbox } from "uxp/components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.scss';

export function trimSlash(s: string): string {
    return s?.replace(/\/$/, "");
}

export function hasValue<T>(value: T | null | undefined, allowZero?: boolean, allowNegative?: boolean): value is NonNullable<T> {
    if (allowZero && typeof value == "number" && value == 0) return true
    if (allowNegative && typeof value == "number" && value < 0) return true
    if (!value) return false
    switch (typeof value) {
        case 'string':
            return value?.trim().length > 0
        case 'number':
            return value > 0
        default:
            return true
    }
}

interface IWidgetProps {
    uxpContext?: IContextProvider;
    instanceId?: string;
}

interface ISpace {
    id: string;
    name: string;
    coordinates?: IRegion[];
    color?: string,
    icon?: string,
    type?: string
}

interface IRegion {
    x: number;
    y: number;
}

interface IFloor {
    id: string;
    name: string;
    layout: {
        floorPlan: string;
        height: number;
        width: number;
    };
}

interface IModel {
    model: string;
    action: string;
}

interface IConfig {
    floors: IModel;
    spaces: IModel;
    setRegion: IModel;
    enableFilterByType: boolean;
    getTypes?: IModel;
}

// Backend Configuration Constants
const CONFIG_MODEL = "SpaceCoordinateEditorConfigurationModel";
const CONFIG_KEY = "space_coordinate_editor_config";

interface ISpaceType {
    id: string;
    name: string;
}

interface IConfigurationState {
    isLoaded: boolean;
    hasValidConfig: boolean;
}

interface SpaceRegion {
    spaceId: string,
    coordinates: IRegion[],
    color?: string,
    icon?: string,
    type: 'region' | 'marker',
    space: ISpace
}


const SensorSpaceCoordinateEditor: React.FunctionComponent<IWidgetProps> = (props) => {

    const [floors, setFloors] = React.useState<IFloor[]>([]);
    const [selectedFloor, setSelectedFloor] = React.useState<string>('');
    const [allSpaceRegions, setAllSpaceRegions] = React.useState<SpaceRegion[]>([]);
    const [filteredSpaceRegions, setFilteredSpaceRegions] = React.useState<SpaceRegion[]>([]);
    const [selectedSpace, setSelectedSpace] = React.useState<ISpace | null>(null);
    const [spaceTypes, setSpaceTypes] = React.useState<ISpaceType[]>([]);
    const [selectedType, setSelectedType] = React.useState<string>('');
    const [query, setQuery] = React.useState('');

    const [config, setConfig] = React.useState<IConfig>({
        floors: { model: "", action: "" },
        spaces: { model: "", action: "" },
        setRegion: { model: "", action: "" },
        enableFilterByType: false,
        getTypes: { model: "", action: "" }
    });

    const [region, setRegion] = React.useState<IRegion[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isEditingRegion, setIsEditingRegion] = React.useState(false);
    const [isSaving, setIsSaving] = React.useState(false);

    const [isConfirming, setIsConfirming] = React.useState(false);
    const [showConfigModal, setShowConfigModal] = React.useState(false);
    const [configState, setConfigState] = React.useState<IConfigurationState>({
        isLoaded: false,
        hasValidConfig: false
    });
    const [isConfigSaving, setIsConfigSaving] = React.useState(false);

    const toast = useToast();

    // Backend Configuration Functions
    const loadConfigFromBackend = React.useCallback(async () => {
        try {
            const res = await props.uxpContext?.executeAction(
                CONFIG_MODEL,
                "GetConfig",
                { id: CONFIG_KEY },
                { json: true }
            );

            if (res && res.value) {
                const savedConfig = JSON.parse(res.value) as IConfig;
                setConfig(savedConfig);
                setConfigState({ isLoaded: true, hasValidConfig: true });
                return savedConfig;
            } else {
                // No saved config found, check URL params as fallback
                const urlConfig = loadConfigFromURL();
                if (urlConfig) {
                    setConfig(urlConfig);
                    setConfigState({ isLoaded: true, hasValidConfig: true });
                    return urlConfig;
                } else {
                    setConfigState({ isLoaded: true, hasValidConfig: false });
                    return null;
                }
            }
        } catch (error) {
            console.error("Failed to load config from backend:", error);
            // Fallback to URL params
            const urlConfig = loadConfigFromURL();
            if (urlConfig) {
                setConfig(urlConfig);
                setConfigState({ isLoaded: true, hasValidConfig: true });
                return urlConfig;
            } else {
                setConfigState({ isLoaded: true, hasValidConfig: false });
                return null;
            }
        }
    }, [props.uxpContext]);

    const saveConfigToBackend = React.useCallback(async (configToSave: IConfig) => {
        try {
            setIsConfigSaving(true);
            await props.uxpContext?.executeAction(
                CONFIG_MODEL,
                "SaveConfig",
                {
                    id: CONFIG_KEY,
                    value: JSON.stringify(configToSave)
                },
                { json: true }
            );

            setConfig(configToSave);
            setConfigState({ isLoaded: true, hasValidConfig: true });
            toast.success("Configuration saved successfully");
        } catch (error) {
            console.error("Failed to save config:", error);
            toast.error("Failed to save configuration");
            throw error;
        } finally {
            setIsConfigSaving(false);
        }
    }, [props.uxpContext, toast]);

    const loadConfigFromURL = React.useCallback(() => {
        const params = new URLSearchParams(window.location.search);
        const floorModel = params.get("flm");
        const floorAction = params.get("fla");
        const spaceModel = params.get("asm");
        const spaceAction = params.get("asa");
        const regionModel = params.get("ucm");
        const regionAction = params.get("uca");
        const spaceTypeModel = params.get("stm");
        const spaceTypeAction = params.get("sta");
        const enableFilterByType = params.get("ebt") == '1';

        if (floorModel && floorAction && spaceModel && spaceAction && regionModel && regionAction) {
            return {
                floors: { model: floorModel, action: floorAction },
                spaces: { model: spaceModel, action: spaceAction },
                setRegion: { model: regionModel, action: regionAction },
                getTypes: { model: spaceTypeModel, action: spaceTypeAction },
                enableFilterByType: enableFilterByType || false
            };
        }
        return null;
    }, []);

    const loadTypes = React.useCallback(async () => {
        if (!config.enableFilterByType || !config.getTypes?.model || !config.getTypes?.action) {
            setSpaceTypes([]);
            return;
        }

        try {
            const res = await props.uxpContext?.executeAction(
                config.getTypes.model,
                config.getTypes.action,
                {},
                { json: true }
            );

            const types = res?.types || [];
            setSpaceTypes(types);
        } catch (error) {
            console.error("Failed to load space types:", error);
            setSpaceTypes([]);
        }
    }, [config.enableFilterByType, config.getTypes, props.uxpContext]);

    // Initialize config from backend on component mount
    React.useEffect(() => {
        loadConfigFromBackend();
    }, [loadConfigFromBackend]);

    // Load floors when config changes
    React.useEffect(() => {
        if (config.floors.model && config.floors.action) {
            loadFloors();
        }
    }, [config.floors]);

    // Auto-select first floor
    React.useEffect(() => {
        if (floors.length > 0 && !selectedFloor) {
            setSelectedFloor(floors[0].id);
        }
    }, [floors, selectedFloor]);

    // Load spaces when floor or config changes
    React.useEffect(() => {
        if (selectedFloor && config.spaces.model && config.spaces.action) {
            loadSpaces();
        }
    }, [config.spaces, selectedFloor]);

    // Load types when type filtering config changes
    React.useEffect(() => {
        loadTypes();
    }, [loadTypes]);

    // Filter spaces based on search query and type filter
    React.useEffect(() => {
        let filtered = allSpaceRegions || [];

        // Filter by search query
        if (query.trim()) {
            filtered = filtered.filter(s => s.space.name.toLowerCase().includes(query.toLowerCase()));
        }

        // Filter by type if enabled and selected
        if (config?.enableFilterByType && selectedType) {
            filtered = filtered.filter(s => s.space.type === selectedType);
        }

        setFilteredSpaceRegions(filtered || []);
    }, [allSpaceRegions, query, selectedType, config?.enableFilterByType]);

    // Load coordinates when space changes
    React.useEffect(() => {
        if (selectedSpace) {
            loadCoordinates();
        }
    }, [selectedSpace]);

    React.useEffect(() => {
        console.log('SPACES___', allSpaceRegions, filteredSpaceRegions, query, selectedType, config?.enableFilterByType,)
    }, [allSpaceRegions, filteredSpaceRegions, query, selectedType, config?.enableFilterByType, ,])

    // Helper functions
    const getCenterCoords = React.useCallback((): IRegion => {
        const floorData = floors.find(f => f.id === selectedFloor);
        if (!floorData) return { x: 0, y: 0 };
        return {
            x: floorData.layout.width * 0.5,
            y: floorData.layout.height * 0.5
        };
    }, [floors, selectedFloor]);

    const loadCoordinates = React.useCallback(() => {
        if (!selectedSpace) return;
        const coords = selectedSpace.coordinates?.length
            ? selectedSpace.coordinates
            : [getCenterCoords()];
        setRegion(coords);
    }, [selectedSpace, getCenterCoords]);

    // API calls
    const loadFloors = React.useCallback(async () => {
        try {
            setIsLoading(true);
            const { model, action } = config.floors;
            const res = await props.uxpContext?.executeAction(model, action, {}, { json: true });
            setFloors(res?.floors || []);
        } catch (error) {
            console.error("Failed to load floors:", error);
            setFloors([]);
        } finally {
            setIsLoading(false);
        }
    }, [config.floors, props.uxpContext]);

    const loadSpaces = React.useCallback(async () => {
        try {
            setIsLoading(true);
            const { model, action } = config.spaces;
            const res = await props.uxpContext?.executeAction(
                model,
                action,
                { floorId: selectedFloor },
                { json: true }
            );
            const spacesData: ISpace[] = res?.spaces || [];

            // Extract all space regions and markers for map display
            const regions = spacesData
                .filter(space => space.coordinates && space.coordinates.length > 1)
                .map(space => ({
                    spaceId: space.id,
                    coordinates: space.coordinates,
                    color: space?.color || null,
                    type: 'region' as const,
                    space: space,
                }));

            const markers = spacesData
                .filter(space => space.coordinates && space.coordinates.length === 1)
                .map(space => ({
                    spaceId: space.id,
                    coordinates: space.coordinates,
                    color: space?.color || null,
                    icon: space?.icon || null,
                    type: 'marker' as const,
                    space: space,
                }));

            setAllSpaceRegions([...regions, ...markers]);
        } catch (error) {
            console.error("Failed to load spaces:", error);
            setAllSpaceRegions([]);
        } finally {
            setIsLoading(false);
        }
    }, [config.spaces, selectedFloor, props.uxpContext]);

    const saveRegionChanges = React.useCallback(async () => {
        if (!selectedSpace || isSaving) return;
        try {
            setIsSaving(true);
            const { model, action } = config.setRegion;
            const params = {
                id: selectedSpace.id,
                coordinates: JSON.stringify(region),
                floor: selectedFloor
            };
            await props.uxpContext?.executeAction(model, action, params, { json: true });
            await loadSpaces();
            setIsEditingRegion(false);
            setIsConfirming(false);
            toast.success("Coordinates saved successfully");
        } catch (error) {
            console.error("Failed to save coordinates:", error);
            toast.error("Unable to save changes. Something went wrong");
        } finally {
            setIsSaving(false);
        }
    }, [selectedSpace, isSaving, config.setRegion, region, selectedFloor, props.uxpContext, loadSpaces, toast]);

    // Event handlers
    const handleSpaceSelect = React.useCallback((space: ISpace) => {
        setSelectedSpace(space);
        setIsEditingRegion(false);
        setIsConfirming(false);
    }, []);

    const handleFloorChange = React.useCallback((floorId: string) => {
        setSelectedFloor(floorId);
        setSelectedSpace(null);
        setIsEditingRegion(false);
        setIsConfirming(false);
    }, []);

    const handleRegionUpdate = React.useCallback((index: number, newPosition: IRegion) => {
        setRegion(prev => prev.map((pos, i) => i === index ? newPosition : pos));
    }, []);

    const handleMarkerDelete = React.useCallback((index: number) => {
        setRegion(prev => prev.filter((_, i) => i !== index));
    }, []);

    const handleMarkerDuplicate = React.useCallback((index: number) => {
        setRegion(prev => {
            const newRegion = [...prev];
            const pos = prev[index];
            newRegion.splice(index + 1, 0, { x: pos.x + 10, y: pos.y + 10 });
            return newRegion;
        });
    }, []);

    const handleAddCoordinate = React.useCallback(() => {
        setRegion(prev => {
            const last = prev[prev.length - 1] || getCenterCoords();
            return [...prev, { x: last.x + 10, y: last.y + 10 }];
        });
    }, [getCenterCoords]);

    const handleCancelEdit = React.useCallback(() => {
        setIsEditingRegion(false);
        setIsConfirming(false);
        loadCoordinates();
    }, [loadCoordinates]);

    const handleCoordinateChange = React.useCallback((index: number, field: 'x' | 'y', value: string) => {
        const numValue = parseFloat(value);
        if (!isNaN(numValue)) {
            setRegion(prev => prev.map((pos, i) =>
                i === index ? { ...pos, [field]: numValue } : pos
            ));
        }
    }, []);

    const getImageUrl = React.useCallback((imagePath: string): string => {
        if (!imagePath) return '';
        if (imagePath.startsWith('/')) {
            const lucyUrl = trimSlash(props.uxpContext?.lucyUrl || '/');
            return `${lucyUrl}${imagePath}`;
        }
        return imagePath;
    }, [props.uxpContext?.lucyUrl]);


    // Computed values
    const selectedFloorData = React.useMemo(() =>
        floors.find(f => f.id === selectedFloor),
        [floors, selectedFloor]
    );

    const mapCenter = React.useMemo(() => {
        if (!selectedFloorData) return null;
        return {
            position: {
                latitude: selectedFloorData.layout.width * 0.5,
                longitude: selectedFloorData.layout.height * 0.5
            },
            renderMarker: false
        };
    }, [selectedFloorData]);

    const markers = React.useMemo((): IMarker[] => {
        if (!selectedFloorData) return [];
        const allMarkers: IMarker[] = [];

        // Helper function to generate markers
        const createMarkers = (markerType: 'selected-marker' | 'edit-marker'): IMarker[] => {
            const color = '#f09936';

            return region.map((pos, index) => {

                const popup = isEditingRegion
                    ? {
                        content: () => (
                            <>
                                <button
                                    className="space-editor__marker-actionbutton space-editor__marker-actionbutton-copy"
                                    onClick={() => handleMarkerDuplicate(index)}
                                >
                                    <i className="fas fa-copy"></i>
                                </button>
                                <button
                                    className="space-editor__marker-actionbutton space-editor__marker-actionbutton-delete"
                                    onClick={() => handleMarkerDelete(index)}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </>
                        )
                    }
                    : null

                const m: any = {
                    latitude: selectedFloorData.layout.height - pos.y,
                    longitude: pos.x,
                    draggable: isEditingRegion,
                    ondragend: (e: any) => {
                        const { lat, lng } = e.target._latlng;
                        handleRegionUpdate(index, {
                            x: Number(lng),
                            y: Number(selectedFloorData.layout.height - lat)
                        });
                    },
                    customHTMLIcon: {
                        className: `space-editor__marker space-editor__marker--${markerType.replace('-', '-')}`,
                        html: `<div style="border-color: ${color}; background-color: ${color}33;"><div style="background-color: ${color};"></div></div>`
                    }
                }
                if (popup) m.renderPopup = popup

                return m
            });
        };

        // Show editing markers when in edit mode
        if (selectedSpace) {
            const isMarker = filteredSpaceRegions.find(s => s.spaceId === selectedSpace.id)?.type === 'marker';
            if (isMarker) {
                allMarkers.push(...createMarkers(isEditingRegion ? 'edit-marker' : 'selected-marker'));
            } else if (isEditingRegion) {
                allMarkers.push(...createMarkers('edit-marker'));
            }
        }

        // Show space markers (only for non-editing spaces)
        const spaceMarkers: IMarker[] = filteredSpaceRegions
            .filter(item => (
                item.type === 'marker'
                && (!selectedSpace || selectedSpace.id !== item.spaceId)
            ))
            .map(item => {
                const pos = item.coordinates[0];
                const isSelected = selectedSpace?.id === item.spaceId;

                const color = item.color || '#3C82F6'
                return {
                    latitude: selectedFloorData.layout.height - pos.y,
                    longitude: pos.x,
                    draggable: false,
                    customHTMLIcon: {
                        className: `space-editor__marker ${isSelected ? 'space-editor__marker--edit' : ''}`,
                        html: !!item.icon
                            ? `<div class="space-editor__icon-marker" style="background-color: ${color}"><i class="${item.icon}"></i></div>`
                            : `<div class='space-editor__default-marker' style="border-color: ${color}; background-color: ${color}33;"><div style="background-color: ${color};"></div></div>`,
                    },
                    data: item.space,

                };
            });

        allMarkers.push(...spaceMarkers);
        return allMarkers;
    }, [selectedFloorData, region, isEditingRegion, filteredSpaceRegions, selectedSpace, handleRegionUpdate, handleMarkerDuplicate, handleMarkerDelete]);

    const mapRegions = React.useMemo(() => {
        const regions: any[] = [];
        // Add all space regions (non-selected in default colors)
        filteredSpaceRegions
            .filter(item => item.type === 'region' && selectedSpace?.id !== item.spaceId)
            .forEach(spaceRegion => {
                const color = spaceRegion?.color || '#3C82F6';
                regions.push({
                    type: 'polygon' as const,
                    color: color,
                    fillColor: color,
                    bounds: spaceRegion.coordinates.map(c => [c.x, c.y]),
                    imageCoordinates: true,
                    data: spaceRegion.space
                });
            });

        // Add selected space region
        if (selectedSpace && region.length > 0) {
            const color = '#f09936';
            console.log('selected_region_color', color)
            regions.push({
                type: 'polygon' as const,
                color: color,
                fillColor: color,
                bounds: region.map(c => [c.x, c.y]),
                imageCoordinates: true,
            });
        }
        return regions;
    }, [filteredSpaceRegions, selectedSpace, region, isEditingRegion]);

    const updateSelectedSpace = React.useCallback((space?: ISpace) => {
        if (!space) return
        // Don't allow selection changes during edit mode
        if (isEditingRegion) return;
        // Don't toggle if already selected
        if (space?.id === selectedSpace?.id) return;
        setSelectedSpace(space as ISpace);

    }, [selectedSpace, isEditingRegion])

    // Configuration Form Component
    const ConfigurationForm = React.useCallback(() => {
        const [tempConfig, setTempConfig] = React.useState<IConfig>(config);

        const handleSaveConfig = async () => {
            try {
                await saveConfigToBackend(tempConfig);
                setShowConfigModal(false);
            } catch (error) {
                // Error is already handled in saveConfigToBackend
            }
        };

        const validateConfig = () => {
            const basicValid = tempConfig.floors.model && tempConfig.floors.action &&
                tempConfig.spaces.model && tempConfig.spaces.action &&
                tempConfig.setRegion.model && tempConfig.setRegion.action;

            if (!basicValid) return false;

            // If type filtering is enabled, getTypes model and action must be provided
            if (tempConfig.enableFilterByType) {
                return tempConfig.getTypes?.model && tempConfig.getTypes?.action;
            }

            return true;
        };

        return (
            <>
                <div className="space-editor__config-section">
                    <FormField>
                        <Label>Get Floors</Label>
                        <div className="space-editor__config-row">
                            <Input
                                value={tempConfig.floors.model}
                                onChange={(model) => setTempConfig(prev => ({
                                    ...prev,
                                    floors: { ...prev.floors, model }
                                }))}
                                placeholder="Model name"
                            />
                            <Input
                                value={tempConfig.floors.action}
                                onChange={(action) => setTempConfig(prev => ({
                                    ...prev,
                                    floors: { ...prev.floors, action }
                                }))}
                                placeholder="Action name"
                            />
                        </div>
                    </FormField>

                    <FormField>
                        <Label>Get Spaces</Label>
                        <div className="space-editor__config-row">
                            <Input
                                value={tempConfig.spaces.model}
                                onChange={(model) => setTempConfig(prev => ({
                                    ...prev,
                                    spaces: { ...prev.spaces, model }
                                }))}
                                placeholder="Model name"
                            />
                            <Input
                                value={tempConfig.spaces.action}
                                onChange={(action) => setTempConfig(prev => ({
                                    ...prev,
                                    spaces: { ...prev.spaces, action }
                                }))}
                                placeholder="Action name"
                            />
                        </div>
                    </FormField>

                    <FormField>
                        <Label>Set Coordinates</Label>
                        <div className="space-editor__config-row">
                            <Input
                                value={tempConfig.setRegion.model}
                                onChange={(model) => setTempConfig(prev => ({
                                    ...prev,
                                    setRegion: { ...prev.setRegion, model }
                                }))}
                                placeholder="Model name"
                            />
                            <Input
                                value={tempConfig.setRegion.action}
                                onChange={(action) => setTempConfig(prev => ({
                                    ...prev,
                                    setRegion: { ...prev.setRegion, action }
                                }))}
                                placeholder="Action name"
                            />
                        </div>
                    </FormField>

                    <FormField>
                        <Label>
                            <Checkbox
                                checked={tempConfig.enableFilterByType}
                                onChange={(v) => setTempConfig(prev => ({
                                    ...prev,
                                    enableFilterByType: v,
                                    getTypes: prev.getTypes || { model: "", action: "" }
                                }))}
                                type='bordered'
                                label="Enable Filter by Type"
                            />

                        </Label>
                    </FormField>

                    {tempConfig.enableFilterByType && (
                        <FormField>
                            <Label>Get Types</Label>
                            <div className="space-editor__config-row">
                                <Input
                                    value={tempConfig.getTypes?.model || ''}
                                    onChange={(model) => setTempConfig(prev => ({
                                        ...prev,
                                        getTypes: { ...prev.getTypes, model } as IModel
                                    }))}
                                    placeholder="Model name"
                                />
                                <Input
                                    value={tempConfig.getTypes?.action || ''}
                                    onChange={(action) => setTempConfig(prev => ({
                                        ...prev,
                                        getTypes: { ...prev.getTypes, action } as IModel
                                    }))}
                                    placeholder="Action name"
                                />
                            </div>
                        </FormField>
                    )}
                </div>

                <FormField className="space-editor__button-row">
                    <Button
                        icon="fas times"
                        title="Cancel"
                        onClick={() => setShowConfigModal(false)}
                    />
                    <AsyncButton
                        icon="fas save"
                        title="Save Configuration"
                        loadingTitle="Saving..."
                        onClick={handleSaveConfig}
                        className="space-editor__button space-editor__button--edit"
                        // loading={isConfigSaving}
                        disabled={!validateConfig()}
                    />
                </FormField>
            </>
        );
    }, [config, saveConfigToBackend, isConfigSaving]);

    // Show configuration needed message if config is not valid
    if (configState.isLoaded && !configState.hasValidConfig) {
        return (
            <div className="space-editor">
                <div className="space-editor__header">
                    <div className="space-editor__title">Coordinate Editor</div>
                    <div className="space-editor__actions">
                        <div className="space-editor__settings">
                            <div className="space-editor__settings-button" onClick={() => setShowConfigModal(true)}>
                                <FontAwesomeIcon icon={['fas', 'cog']} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-editor__configuration-needed">
                    <div className="space-editor__configuration-needed-icon">
                        <FontAwesomeIcon icon={['fas', 'cogs']} />
                    </div>
                    <div className="space-editor__configuration-needed-title">
                        Configuration Required
                    </div>
                    <div className="space-editor__configuration-needed-message">
                        Please configure the data models and actions to get started with the coordinate editor.
                    </div>
                    <Button
                        title="Open Configuration"
                        className="space-editor__configuration-needed-button"
                        onClick={() => setShowConfigModal(true)}
                    />

                </div>

                <Modal
                    show={showConfigModal}
                    onClose={() => setShowConfigModal(false)}
                    title="Configuration Settings"
                    className="space-editor__modal space-editor__modal--config"
                >
                    <ConfigurationForm />
                </Modal>
            </div>
        );
    }

    // Show loading state while config is being loaded
    if (!configState.isLoaded) {
        return (
            <div className="space-editor">
                <div className="space-editor__overlay">
                    <Loading />
                </div>
            </div>
        );
    }

    return (
        <div className="space-editor">

            <div className="space-editor__header">
                <div className="space-editor__title">Coordinate Editor</div>
                <div className="space-editor__actions">
                    <div className="space-editor__filters">
                        <Select
                            selected={selectedFloor}
                            onChange={handleFloorChange}
                            options={floors}
                            labelField="name"
                            valueField="id"
                            placeholder="Select a floor"
                        />
                        {config.enableFilterByType && spaceTypes.length > 0 && (
                            <Select
                                selected={selectedType}
                                onChange={setSelectedType}
                                options={[{ id: '', name: 'All Types' }, ...spaceTypes]}
                                labelField="name"
                                valueField="id"
                                placeholder="Filter by type"
                            />
                        )}
                    </div>
                    <div className="space-editor__settings">
                        <div className="space-editor__settings-button" onClick={() => setShowConfigModal(true)} >
                            <FontAwesomeIcon icon={['fas', 'cog']} />
                        </div>
                    </div>
                </div>

            </div>

            <div className={`space-editor__body ${selectedSpace ? 'space-editor__body--editing' : ''}`}>

                <div className="space-editor__sidebar">
                    <div className="space-editor__search">
                        <SearchBox value={query} onChange={setQuery} />
                    </div>

                    <div className="space-editor__list">
                        {filteredSpaceRegions.map((space, index) => (
                            <div
                                key={space.space.id}
                                className={`space-editor__space ${selectedSpace?.id === space.space.id ? 'space-editor__space--active' : ''}`}
                                onClick={() => handleSpaceSelect(space.space)}
                            >
                                {space.space.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-editor__map-container">
                    {
                        selectedFloorData?.layout?.floorPlan
                            ? <MapComponent
                                zoom={-1}
                                minZoom={-20}
                                center={mapCenter}
                                regions={mapRegions}
                                staticImage={{
                                    url: getImageUrl(selectedFloorData.layout.floorPlan),
                                    width: selectedFloorData.layout.width,
                                    height: selectedFloorData.layout.height
                                }}
                                markers={markers}
                                onMarkerClick={(el, data) => {
                                    updateSelectedSpace(data)
                                }}
                                onRegionClick={(el, data) => {
                                    updateSelectedSpace(data)
                                }}
                                mapUrl=""
                                onClick={(e) => console.log("Map clicked", e)}
                            />
                            : <div className="space-editor__no-map">Select a floor to get started</div>
                    }
                </div>

                {
                    selectedFloorData?.layout?.floorPlan && selectedSpace && <div className="space-editor__map-toolbar">
                        <div className="space-editor__map-toolbar-header">
                            <div className="space-editor__map-toolbar-title">Coordinates</div>
                            <div className="space-editor__map-toolbar-button" onClick={() => {
                                setIsConfirming(false)
                                setIsSaving(false)
                                setIsEditingRegion(false)
                                setSelectedSpace(null)
                            }}>
                                <FontAwesomeIcon icon={['fas', 'times']} />
                            </div>
                        </div>

                        <div className="space-editor__map-toolbar-body">
                            <table className="space-editor__coordinates-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>X</th>
                                        <th>Y</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {region.map((coord, index) => (
                                        <tr key={index} className="space-editor__coordinate-row">
                                            <td>{index + 1}</td>
                                            <td>
                                                <Input
                                                    type="number"
                                                    value={coord.x.toString()}
                                                    onChange={(value) => handleCoordinateChange(index, 'x', value)}
                                                    placeholder="X"
                                                    className="space-editor__coordinate-input"
                                                    inputAttr={{
                                                        disabled: !isEditingRegion
                                                    }}
                                                />
                                            </td>
                                            <td>
                                                <Input
                                                    type="number"
                                                    value={coord.y.toString()}
                                                    onChange={(value) => handleCoordinateChange(index, 'y', value)}
                                                    placeholder="Y"
                                                    className="space-editor__coordinate-input"
                                                    inputAttr={{
                                                        disabled: !isEditingRegion
                                                    }}
                                                />
                                            </td>
                                            {region.length > 1 && (
                                                <td>
                                                    <IconButton
                                                        type="delete"
                                                        size="small"
                                                        onClick={() => handleMarkerDelete(index)}
                                                    />
                                                </td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="space-editor__map-toolbar-footer">
                            {
                                isEditingRegion
                                    ? <>
                                        {(!isConfirming && !isSaving) && <Button
                                            icon="fas plus"
                                            title="Add"
                                            onClick={handleAddCoordinate}
                                            className="space-editor__button"
                                        />}
                                        {isConfirming ? (
                                            <AsyncButton
                                                icon="fas check"
                                                title="Confirm"
                                                loadingTitle="Saving..."
                                                onClick={saveRegionChanges}
                                                className="space-editor__button space-editor__button--confirm"
                                            />
                                        ) : (
                                            <Button
                                                icon="fas save"
                                                title="Save"
                                                onClick={() => setIsConfirming(true)}
                                                className="space-editor__button space-editor__button--confirm"
                                            />
                                        )}
                                        {!isSaving && (
                                            <Button
                                                icon="fas times"
                                                title='Cancel'
                                                onClick={handleCancelEdit}
                                            />
                                        )}
                                    </>
                                    : <Button
                                        icon="fas pencil"
                                        title="Edit Coordinates"
                                        onClick={() => setIsEditingRegion(true)}
                                        className="space-editor__button space-editor__button--edit"
                                    />
                            }
                        </div>
                    </div>
                }

            </div>

            {
                isLoading && (
                    <div className="space-editor__overlay">
                        <Loading />
                    </div>
                )
            }

            <Modal
                show={showConfigModal}
                onClose={() => setShowConfigModal(false)}
                title="Configuration Settings"
                className="space-editor__modal space-editor__modal--config"
            >
                <ConfigurationForm />
            </Modal>
        </div >
    );
};

registerUI({
    id: "sensor-space-coordinate-editor",
    component: SensorSpaceCoordinateEditor,
    showDefaultHeader: false
});