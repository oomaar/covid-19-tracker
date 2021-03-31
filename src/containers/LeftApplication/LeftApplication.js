import {
    Container,
    StatsContainer,
} from "./styledLeftApplication";
import { Header, Map, Stats } from "../../components";

const LeftApplication = () => {
    return (
        <Container>
            <Header />
            <StatsContainer>
                <Stats title="Coronavirus Cases" totalCases={2000} cases={111} />
                <Stats title="Recovered" totalCases={2000} cases={111} />
                <Stats title="Deaths" totalCases={2000} cases={111} />
            </StatsContainer>
            <Map />
        </Container>
    );
};

export default LeftApplication;
