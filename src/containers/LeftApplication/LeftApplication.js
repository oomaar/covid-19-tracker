import {
    Container,
    StatsContainer,
} from "./styledLeftApplication";
import { Header, Map, Stats } from "../../components";

const LeftApplication = ({ casesType, center, zoom, countryInfo, onCountryChange, country, countries, mapCountries }) => {
    return (
        <Container>
            <Header onCountryChange={onCountryChange} country={country} countries={countries} />
            <StatsContainer>
                <Stats title="Coronavirus Cases" cases={countryInfo.todayCases} totalCases={countryInfo.cases} />
                <Stats title="Recovered" cases={countryInfo.todayRecovered} totalCases={countryInfo.recovered} />
                <Stats title="Deaths" cases={countryInfo.todayDeaths} totalCases={countryInfo.deaths} />
            </StatsContainer>
            <Map casesType={casesType} mapCountries={mapCountries} center={center} zoom={zoom} />
        </Container>
    );
};

export default LeftApplication;
