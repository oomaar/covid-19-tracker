import { MapContainer, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../../utils/showDataOnMap";
import {
    Container,
} from "./styledMap";

const Map = ({ casesType, mapCountries, center, zoom }) => {
    return (
        <Container>
            <MapContainer center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(mapCountries, casesType)}
            </MapContainer>
        </Container>
    );
};

export default Map;
