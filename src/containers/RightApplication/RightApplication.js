import {
    Container,
    ChartTitle,
} from "./styledRightApplication";
import { Card } from "@material-ui/core";
import { LineGraph, Table } from "../../components";

const RightApplication = ({ tableData }) => {
    return (
        <Container>
            <Card>
                <Table
                    tableData={tableData}
                />
                <LineGraph />
            </Card>
        </Container>
    )
}

export default RightApplication
