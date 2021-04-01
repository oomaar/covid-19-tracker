import {
    Container,
    ChartTitle,
} from "./styledRightApplication";
import { Card } from "@material-ui/core";
import { Table } from "../../components";

const RightApplication = ({ tableData }) => {
    return (
        <Container>
            <Card>
                {/* Table */}
                <Table
                    tableData={tableData}
                />
                {/* Graph */}
                <ChartTitle>Worldwide new cases</ChartTitle>
            </Card>
        </Container>
    )
}

export default RightApplication
