import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper, FormField, Select, Label, Input, MapComponent, IMarker, Popover, IconButton, Button, AsyncButton, ConfirmButton, Loading, useToast } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

interface ISpace {
    id: string,
    name: string,
    coordinates: any
}

interface IRegion {
    x: number,
    y: number
}

interface IFloor {
    id: string,
    name: string,
    layout: {
        floorPlan: string,
        height: number,
        width: number
    }
}

interface IModel {
    model: string,
    action: string
}
interface IConfig {
    floors: IModel,
    spaces: IModel,
    setRegion: IModel
}
const SensorSpaceCoordinateEditor: React.FunctionComponent<IWidgetProps> = (props) => {


    let [spaces, setSpaces] = React.useState<ISpace[]>([])
    let [space, setSpace] = React.useState<ISpace>(null)
    let [floors, setFloors] = React.useState<IFloor[]>([])
    let [floor, setFloor] = React.useState<string>(null)
    let [config, setConfig] = React.useState<IConfig>({
        floors: { model: "", action: "" },
        spaces: { model: "", action: "" },
        setRegion: { model: "", action: "" },
    })
    let [region, setRegion] = React.useState<IRegion[]>([])
    let [editRegion, setEditRegion] = React.useState(false)
    let [loading, setLoading] = React.useState(true)
    let [saving, setSaving] = React.useState(false)
    let [confirming, setConfirming] = React.useState(false)

    let toast = useToast()


    React.useEffect(() => {
        let params = new URLSearchParams(window.location.search)

        console.log("params ", params)
        let flm = params.get("flm") || ""
        let fla = params.get("fla") || ""
        let asm = params.get("asm") || ""
        let asa = params.get("asa") || ""
        let ucm = params.get("ucm") || ""
        let uca = params.get("uca") || ""

        setConfig({
            floors: {
                model: flm,
                action: fla
            },
            spaces: {
                model: asm,
                action: asa
            },
            setRegion: {
                model: ucm,
                action: uca
            }
        })
    }, [window.location])


    React.useEffect(() => {
        getFloors()
    }, [config.floors])

    React.useEffect(() => {
        if (floors.length > 0) {
            setFloor(floors[0].id)
        }
    }, [floors])

    React.useEffect(() => {
        getSpaces()
    }, [config.spaces])

    React.useEffect(() => {
        if (spaces.length > 0) setSpace(spaces[0])
    }, [spaces])

    React.useEffect(() => {
        getDefaultCoords()
    }, [space])

    function getDefaultCoords() {
        if (space) {
            let coords = space.coordinates || []
            if (coords.length == 0) coords = [getCenterCoords()]
            setRegion(coords)
        }
    }


    function getCenterCoords() {
        let floorData = floors.find(f => f.id == floor);

        let lat = floorData?.layout.width * 0.5 || 0
        let lng = floorData?.layout.height * 0.5 || 0
        return { x: lng, y: lat }
    }

    async function getFloors() {
        try {
            setLoading(true)
            let { model, action } = config.floors
            if (model.trim().length > 0 && action.trim().length > 0) {
                let res = await props.uxpContext.executeAction(model, action, {}, { json: true })
                setFloors(res.floors || [])
            }
            setLoading(false)
        }
        catch (e) {
            setFloors([])
            console.log("unable to get floors ", e)
            setLoading(false)
            // toast.error("Unable to get floors. Something went wrong")
        }
    }

    async function getSpaces() {
        try {
            setLoading(true)
            let { model, action } = config.spaces
            if (model.trim().length > 0 && action.trim().length > 0) {
                let res = await props.uxpContext.executeAction(model, action, {}, { json: true })
                setSpaces(res.spaces || [])
                console.log("spaces ", res.spaces)
            }
            setLoading(false)
        }
        catch (e) {
            setSpaces([])
            console.log("unable to get spaces ", e)
            // toast.error("Unable to get spaces. Something went wrong")
        }
    }

    async function saveRegionChanges() {
        try {
            let { model, action } = config.setRegion
            if (model.trim().length > 0 && action.trim().length > 0 && space) {

                if (saving) return
                setSaving(true)
                let params = {
                    id: space.id,
                    coordinates: JSON.stringify(region)
                }

                let res = await props.uxpContext.executeAction(model, action, params, { json: true })
                await getSpaces()
                setEditRegion(false)
                setConfirming(false)
                setSaving(false)
            }
        }
        catch (e) {
            console.log("Unable to save ", e)
            toast.error("Unable to save changes. Something went wrong")
        }
    }


    let floorData = floors.find(f => f.id == floor);
    let _center: any = {
        position: {
            latitude: floorData?.layout.width * 0.5,
            longitude: floorData?.layout.height * 0.5
        },
        renderMarker: false
    }

    let markers: IMarker[] = []

    if (floorData) {
        for (let i = 0; i < region.length; i++) {
            let pos = region[i]

            let lat = (floorData.layout.height - pos.y)
            let lng = pos.x

            let m: IMarker = {
                latitude: lat,
                longitude: lng,
                draggable: editRegion,
                ondragstart: (e) => console.log("Drag start ", e),
                ondragend: (e) => {
                    let { lat, lng } = e.target._latlng
                    let _region = [...region]
                    _region[i] = { x: Number(lng), y: Number(floorData.layout.height - lat) }
                    setRegion(_region)
                },
                customHTMLIcon: {
                    className: 'lmui-custom-marker',
                    html: '<div></div>'
                },
                renderPopup: {
                    content: () => <div>
                        {editRegion ?
                            <>
                                <IconButton
                                    type="copy"
                                    size="small"
                                    onClick={() => {
                                        // duplicate the marker 
                                        let _region = [...region]
                                        _region.splice(i, 0, { x: pos.x + 1, y: pos.y + 1 })
                                        setRegion(_region)
                                    }} />

                                <IconButton
                                    type="delete"
                                    size="small"
                                    onClick={() => {
                                        let _region = [...region]
                                        _region.splice(i, 1)
                                        setRegion(_region)
                                    }} />
                            </>
                            :
                            <div> Click on "Edit Coordinates" to start editing </div>
                        }
                    </div>
                }
            }

            markers.push(m)
        }
    }



    return (<div className="location-marker-ui-container">

        <div className="lmui-sidebar">
            <div className="title"> Spaces </div>

            <div className="content">
                {spaces.map((s, i) => {
                    return <div className={`space ${space?.id == s.id && 'active'} `} key={i} onClick={() => setSpace(s)} > {s.name} </div>
                })}
            </div>
        </div>

        <div className="lmui-toolbar">

            <FormField className="floor-filter">
                <Select
                    selected={floor || ""}
                    onChange={setFloor}
                    options={floors}
                    labelField="name"
                    valueField="id"
                    placeholder="Select a floor"
                />
            </FormField>

            <FilterPanel>
                <FormField className="location-marker-config-row">
                    <Label>Get Floors </Label>

                    <div className="row">
                        <Input
                            value={config.floors.model || ""}
                            onChange={s => { setConfig(prev => ({ ...prev, floors: { ...prev.floors, model: s } })) }}
                            placeholder="Model name"
                        />
                        <Input
                            value={config.floors.action || ""}
                            onChange={s => { setConfig(prev => ({ ...prev, floors: { ...prev.floors, action: s } })) }}
                            placeholder="Action name"
                        />
                    </div>
                </FormField>

                <FormField className="location-marker-config-row">
                    <Label>Get Spaces </Label>

                    <div className="row">
                        <Input
                            value={config.spaces.model || ""}
                            onChange={s => { setConfig(prev => ({ ...prev, spaces: { ...prev.spaces, model: s } })) }}
                            placeholder="Model name"
                        />
                        <Input
                            value={config.spaces.action || ""}
                            onChange={s => { setConfig(prev => ({ ...prev, spaces: { ...prev.spaces, action: s } })) }}
                            placeholder="Action name"
                        />
                    </div>
                </FormField>

                <FormField className="location-marker-config-row">
                    <Label>Set Coordinates </Label>
                    <div className="row">
                        <Input
                            value={config.setRegion.model || ""}
                            onChange={s => { setConfig(prev => ({ ...prev, setRegion: { ...prev.setRegion, model: s } })) }}
                            placeholder="Model name"
                        />
                        <Input
                            value={config.setRegion.action || ""}
                            onChange={s => { setConfig(prev => ({ ...prev, setRegion: { ...prev.setRegion, action: s } })) }}
                            placeholder="Action name"
                        />
                    </div>
                </FormField>

            </FilterPanel>
        </div>

        <div className="lmui-map-container">
            {
                (floorData && floorData.layout.floorPlan) ?
                    <>
                        <MapComponent
                            zoom={3}
                            minZoom={3}
                            center={_center}
                            regions={[
                                {
                                    type: 'polygon',
                                    color: '#DDBC52FF',
                                    fillColor: '#DDBC52FF',
                                    bounds: region.map((c: any) => [c.x, c.y]),
                                    imageCoordinates: true,
                                }
                            ]}
                            staticImage={{
                                url: floorData.layout.floorPlan || "",
                                width: floorData.layout.width,
                                height: floorData.layout.height
                            }}
                            onRegionClick={(e: any, data: any) => {

                            }}
                            markers={markers}
                            onMarkerClick={() => { }}
                            mapUrl={''}
                            onClick={e => console.log("cliked", e)}
                        />
                        {space &&
                            <div className="toolbar">
                                {editRegion ?
                                    <>
                                        {confirming ?
                                            <AsyncButton
                                                title="Confirm"
                                                loadingTitle={"Saving..."}
                                                onClick={saveRegionChanges}
                                                className="confirm-button"
                                            />
                                            :
                                            <Button
                                                title="Save Changes"
                                                loadingTitle="Saving Changes...."
                                                onClick={() => setConfirming(true)}
                                                className="confirm-button"

                                            />
                                        }
                                        {!saving &&
                                            <Button
                                                title='Cancel'
                                                onClick={() => {
                                                    setEditRegion(false)
                                                    getDefaultCoords()
                                                }}
                                            />
                                        }
                                    </>
                                    :
                                    <Button
                                        title="Edit Coordinates"
                                        onClick={() => setEditRegion(true)}
                                    />
                                }
                            </div>
                        }
                    </>
                    : <div className='no-map'>Select a floor to get started</div>
            }

        </div>

        {loading && <div className="lmui-overlay"> <Loading /> </div>}

    </div>)
};

/**
 * Register as a Widget
 */
registerUI({
    id: "sensor-space-coordinate-editor",
    component: SensorSpaceCoordinateEditor
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "LocationMarkerUI",
    label: "LocationMarkerUI",
    // click: () => alert("Hello"),
    component: LocationMarkerUIWidget
});
*/

/**
 * Register as a UI
 */

/*
registerUI({
   id:"LocationMarkerUI",
   component: LocationMarkerUIWidget
});
*/