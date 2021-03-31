import { Card, CardContent, Typography } from "@material-ui/core";
import {
    Container,
    Cases,
} from "./styledStats";

const Stats = ({ title, cases, totalCases }) => {
    return (
        <Container>
            <Card className="infoBox">
                <CardContent>
                    <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                    <Cases>{cases}</Cases>
                    <Typography className="infoBox__cases">{totalCases} Total</Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Stats;
