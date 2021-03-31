import {
    Container,
    StatsContainer,
} from "./styledLeftApplication";
import { Header, Map, Stats } from "../../components";

const LeftApplication = ({ countryInfo, onCountryChange, country, countries }) => {
    return (
        <Container>
            <Header onCountryChange={onCountryChange} country={country} countries={countries} />
            <StatsContainer>
                <Stats title="Coronavirus Cases" cases={countryInfo.todayCases} totalCases={countryInfo.cases} />
                <Stats title="Recovered" cases={countryInfo.todayRecovered} totalCases={countryInfo.recovered} />
                <Stats title="Deaths" cases={countryInfo.todayDeaths} totalCases={countryInfo.deaths} />
            </StatsContainer>
            <Map />
        </Container>
    );
};

export default LeftApplication;
