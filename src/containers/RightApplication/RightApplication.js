import {
    Container,
    TableTitle,
    ChartTitle,
} from "./styledRightApplication";
import { Card } from "@material-ui/core";

const RightApplication = () => {
    return (
        <Container>
            <Card>
                {/* Table */}
                <TableTitle>Live Cases by Country</TableTitle>
                {/* Graph */}
                <TableTitle>Worldwide new cases</TableTitle>
            </Card>
        </Container>
    )
}

export default RightApplication
