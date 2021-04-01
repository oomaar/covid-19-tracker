import {
    Container,
    TableTitle,
    TableContainer,
    TableRow,
    TableData,
    Strong,
} from "./styledTable";

const Table = ({ tableData }) => {
    return (
        <Container>
            <TableTitle>Live Cases by Country</TableTitle>
            <TableContainer>
                {tableData.map(({country, cases}) => (
                    <TableRow>
                        <TableData>{country}</TableData>
                        <TableData>
                            <Strong>{cases}</Strong>
                        </TableData>
                    </TableRow>
                ))}
            </TableContainer>
        </Container>
    );
};

export default Table;
