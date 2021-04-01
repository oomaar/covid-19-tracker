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

const setColors = (casesType) => {
    if (casesType === "cases") {
        return casesTypeColors.cases.hex;
    } else if (casesType === "recovered") {
        return casesTypeColors.recovered.hex;
    } else if (casesType === "deaths") {
        return casesTypeColors.deaths.hex;
    }
}

export const showDataOnMap = (data, casesType) => {

    return (
        data.map(country => (
            <Circle
                center={[country.countryInfo.lat, country.countryInfo.long]}
                color={setColors(casesType)}
                fillColor={setColors(casesType)}
                fillOpacity={0.4}
                radius={
                    Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
                }
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
};
