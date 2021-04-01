import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";
import {
    InfoContainer,
    InfoFlag,
    InfoName,
    InfoData,
} from "../components/Map/styledMap";

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        multiplier: 800,
    },
    recovered: {
        hex: "#7dd71d",
        multiplier: 1200,
    },
    deaths: {
        hex: "#fb4443",
        multiplier: 2000,
    },
};

export const showDataOnMap = (data, casesType = "cases") => (
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier}
        >
            <Popup>
                <InfoContainer>
                    <InfoFlag
                        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                    />
                    <InfoName>{country.country}</InfoName>
                    <InfoData>Cases: {numeral(country.cases).format("0, 0")}</InfoData>
                    <InfoData>Recovered: {numeral(country.recovered).format("0, 0")}</InfoData>
                    <InfoData>Deaths: {numeral(country.deaths).format("0, 0")}</InfoData>
                </InfoContainer>
            </Popup>
        </Circle>
    ))
);