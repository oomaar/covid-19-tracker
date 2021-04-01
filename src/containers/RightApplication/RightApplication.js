import {
    Container,
    ChartTitle,
} from "./styledRightApplication";
import { Card } from "@material-ui/core";
import { LineGraph, Table } from "../../components";

const RightApplication = ({ tableData, casesType }) => {
    return (
        <Container>
            <Card>
                <Table
                    tableData={tableData}
                />
                <LineGraph casesType={casesType} />
            </Card>
        </Container>
    )
}

export default RightApplication
