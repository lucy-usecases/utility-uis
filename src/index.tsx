import * as React from "react";
import { registerUI, IContextProvider } from './uxp';
import { FormField, Select, Label, Input, MapComponent, IMarker, IconButton, Button, AsyncButton, Loading, useToast, SearchBox, Modal } from "uxp/components";
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
    icon?: string
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
}


const SensorSpaceCoordinateEditor: React.FunctionComponent<IWidgetProps> = (props) => {
    // State management
    const [filteredSpaces, setFilteredSpaces] = React.useState<ISpace[]>([]);
    const [query, setQuery] = React.useState('');
    const [spaces, setSpaces] = React.useState<ISpace[]>([]);
    const [selectedSpace, setSelectedSpace] = React.useState<ISpace | null>(null);
    const [floors, setFloors] = React.useState<IFloor[]>([]);
    const [selectedFloor, setSelectedFloor] = React.useState<string>('');
    const [config, setConfig] = React.useState<IConfig>({
        floors: { model: "", action: "" },
        spaces: { model: "", action: "" },
        setRegion: { model: "", action: "" }
    });
    const [allSpaceRegions, setAllSpaceRegions] = React.useState<Array<{
        spaceId: string,
        coordinates: IRegion[],
        color?: string,
        icon?: string,
        type: 'region' | 'marker',
        space: ISpace
    }>>([]);
    const [isEditingRegion, setIsEditingRegion] = React.useState(false);
    const [region, setRegion] = React.useState<IRegion[]>([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isSaving, setIsSaving] = React.useState(false);
    const [isConfirming, setIsConfirming] = React.useState(false);
    const [showConfigModal, setShowConfigModal] = React.useState(false)

    const toast = useToast();

    // Initialize config from URL params
    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setConfig({
            floors: {
                model: params.get("flm") || "",
                action: params.get("fla") || ""
            },
            spaces: {
                model: params.get("asm") || "",
                action: params.get("asa") || ""
            },
            setRegion: {
                model: params.get("ucm") || "",
                action: params.get("uca") || ""
            }
        });
    }, []);

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

    // Filter spaces based on search query
    React.useEffect(() => {
        const filtered = query.trim()
            ? spaces.filter(s => s.name.toLowerCase().includes(query.toLowerCase()))
            : spaces;
        setFilteredSpaces(filtered);
    }, [spaces, query]);

    // Load coordinates when space changes
    React.useEffect(() => {
        if (selectedSpace) {
            loadCoordinates();
        }
    }, [selectedSpace]);

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
            setSpaces(spacesData);

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
            setSpaces([]);
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
            return region.map((pos, index) => ({
                latitude: selectedFloorData.layout.height - pos.y,
                longitude: pos.x,
                draggable: true,
                ondragend: (e: any) => {
                    const { lat, lng } = e.target._latlng;
                    handleRegionUpdate(index, {
                        x: Number(lng),
                        y: Number(selectedFloorData.layout.height - lat)
                    });
                },
                customHTMLIcon: {
                    className: `space-editor__marker space-editor__marker--${markerType.replace('-', '-')}`,
                    html: '<div></div>'
                },
                renderPopup: {
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
            }));
        };

        // Show editing markers when in edit mode
        if (selectedSpace) {
            const isMarker = allSpaceRegions.find(s => s.spaceId === selectedSpace.id)?.type === 'marker';
            if (isMarker) {
                allMarkers.push(...createMarkers(isEditingRegion ? 'edit-marker' : 'selected-marker'));
            } else if (isEditingRegion) {
                allMarkers.push(...createMarkers('edit-marker'));
            }
        }

        // Show space markers (only for non-editing spaces)
        const spaceMarkers: IMarker[] = allSpaceRegions
            .filter(item => (
                item.type === 'marker'
                && (!selectedSpace || selectedSpace.id !== item.spaceId)
            ))
            .map(item => {
                const pos = item.coordinates[0];
                const isSelected = selectedSpace?.id === item.spaceId;
                return {
                    latitude: selectedFloorData.layout.height - pos.y,
                    longitude: pos.x,
                    draggable: false,
                    customHTMLIcon: {
                        className: `space-editor__marker ${isSelected ? 'space-editor__marker--edit' : ''}`,
                        html: !!item.icon
                            ? `<div class="space-editor__icon-marker" style="background-color: ${item.color || '#52c4c9'}"><i class="${item.icon}"></i></div>`
                            : `<div class='space-editor__default-marker'></div>`,
                    },
                    data: item.space
                };
            });

        allMarkers.push(...spaceMarkers);
        return allMarkers;
    }, [selectedFloorData, region, isEditingRegion, allSpaceRegions, selectedSpace, handleRegionUpdate, handleMarkerDuplicate, handleMarkerDelete]);

    const mapRegions = React.useMemo(() => {
        const regions: any[] = [];
        // Add all space regions (non-selected in default colors)
        allSpaceRegions
            .filter(item => item.type === 'region' && selectedSpace?.id !== item.spaceId)
            .forEach(spaceRegion => {
                regions.push({
                    type: 'polygon' as const,
                    color: spaceRegion?.color || '#52c4c9',
                    fillColor: (spaceRegion?.color || '#52c4c9') + '55',
                    bounds: spaceRegion.coordinates.map(c => [c.x, c.y]),
                    imageCoordinates: true,
                    data: spaceRegion.space
                });
            });

        // Add selected space region
        if (selectedSpace && region.length > 0) {
            regions.push({
                type: 'polygon' as const,
                color: '#f09936',
                fillColor: '#f099365c',
                bounds: region.map(c => [c.x, c.y]),
                imageCoordinates: true,
            });
        }
        return regions;
    }, [allSpaceRegions, selectedSpace, region, isEditingRegion]);

    const updateSelectedSpace = React.useCallback((space?: ISpace) => {
        if (!space) return
        // Don't allow selection changes during edit mode
        if (isEditingRegion) return;
        // Don't toggle if already selected
        if (space?.id === selectedSpace?.id) return;
        setSelectedSpace(space as ISpace);

    }, [selectedSpace, isEditingRegion])

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
                        {filteredSpaces.map((space, index) => (
                            <div
                                key={space.id}
                                className={`space-editor__space ${selectedSpace?.id === space.id ? 'space-editor__space--active' : ''}`}
                                onClick={() => handleSpaceSelect(space)}
                            >
                                {space.name}
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
                <div className="space-editor__config-section">
                    <FormField>
                        <Label>Get Floors</Label>
                        <div className="space-editor__config-row">
                            <Input
                                value={config.floors.model}
                                onChange={(model) => setConfig(prev => ({
                                    ...prev,
                                    floors: { ...prev.floors, model }
                                }))}
                                placeholder="Model name"
                            />
                            <Input
                                value={config.floors.action}
                                onChange={(action) => setConfig(prev => ({
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
                                value={config.spaces.model}
                                onChange={(model) => setConfig(prev => ({
                                    ...prev,
                                    spaces: { ...prev.spaces, model }
                                }))}
                                placeholder="Model name"
                            />
                            <Input
                                value={config.spaces.action}
                                onChange={(action) => setConfig(prev => ({
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
                                value={config.setRegion.model}
                                onChange={(model) => setConfig(prev => ({
                                    ...prev,
                                    setRegion: { ...prev.setRegion, model }
                                }))}
                                placeholder="Model name"
                            />
                            <Input
                                value={config.setRegion.action}
                                onChange={(action) => setConfig(prev => ({
                                    ...prev,
                                    setRegion: { ...prev.setRegion, action }
                                }))}
                                placeholder="Action name"
                            />
                        </div>
                    </FormField>

                </div>

                <FormField className="space-editor__button-row">
                    <Button
                        title="Close"
                        onClick={() => setShowConfigModal(false)}
                        className="space-editor__button space-editor__button--primary"
                    />
                </FormField>
            </Modal>
        </div >
    );
};

registerUI({
    id: "sensor-space-coordinate-editor",
    component: SensorSpaceCoordinateEditor,
    showDefaultHeader: false
});