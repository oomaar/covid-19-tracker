import {
    Container,
    StatsContainer,
} from "./styledLeftApplication";
import { Header, Map, Stats } from "../../components";
import { prettyPrintStat } from "../../utils/prettyPrintStat";

const LeftApplication = ({
    setCasesType,
    casesType,
    center,
    zoom,
    countryInfo,
    onCountryChange,
    country,
    countries,
    mapCountries
}) => {
    return (
        <Container>
            <Header onCountryChange={onCountryChange} country={country} countries={countries} />
            <StatsContainer>
                <Stats
                    isRed="true"
                    active={casesType === "cases"}
                    onClick={e => setCasesType('cases')}
                    title="Coronavirus Cases"
                    cases={prettyPrintStat(countryInfo.todayCases)}
                    totalCases={prettyPrintStat(countryInfo.cases)}
                />
                <Stats
                    active={casesType === "recovered"}
                    onClick={e => setCasesType('recovered')}
                    title="Recovered"
                    cases={prettyPrintStat(countryInfo.todayRecovered)}
                    totalCases={prettyPrintStat(countryInfo.recovered)}
                />
                <Stats
                    isRed="true"
                    active={casesType === "deaths"}
                    onClick={e => setCasesType('deaths')}
                    title="Deaths"
                    cases={prettyPrintStat(countryInfo.todayDeaths)}
                    totalCases={prettyPrintStat(countryInfo.deaths)}
                />
            </StatsContainer>
            <Map casesType={casesType} mapCountries={mapCountries} center={center} zoom={zoom} />
        </Container>
    );
};

export default LeftApplication;
