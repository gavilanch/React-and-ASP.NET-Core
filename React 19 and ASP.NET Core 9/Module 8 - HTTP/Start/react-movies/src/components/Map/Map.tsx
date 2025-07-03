import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet";
import type Coordinate from "./coordinate.model";
import { useState } from "react";

export default function Map(props: MapProps){

    const [coordinates, setCoordinates] = useState(props.coordinates);

    return (
        <MapContainer center={[18.473048226173034, -69.9341986115913]}
        zoom={14} scrollWheelZoom={true} style={{height: '500px'}}
        >
            <TileLayer attribution="React Movies"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <HandleMapClick setCoordinate={coordinate => {
                setCoordinates([coordinate]);
                if (props.setCoordinate){
                    props.setCoordinate(coordinate);
                }
            }} />

            {coordinates?.map(coordinate => <Marker key={coordinate.lat + coordinate.lng}
                position={[coordinate.lat, coordinate.lng]}
            >
                {coordinate.message ? <Popup>{coordinate.message}</Popup> : undefined}
            </Marker>)}

        </MapContainer>
    )
}

interface MapProps {
    coordinates?: Coordinate[];
    setCoordinate?: (coodinate: Coordinate) => void;
}

function HandleMapClick(props: {setCoordinate(coordinate: Coordinate): void}){
    useMapEvent('click', e => {
        props.setCoordinate({lat: e.latlng.lat, lng: e.latlng.lng})
    })

    return null;
}