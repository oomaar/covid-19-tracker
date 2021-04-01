import { Card, CardContent, Typography } from "@material-ui/core";
import {
    Container,
    Cases,
} from "./styledStats";

const Stats = ({ isRed, active, title, cases, totalCases, ...restProps }) => {
    return (
        <Container>
            <Card
                className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}
                onClick={restProps.onClick}
            >
                <CardContent>
                    <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                    <Cases>{cases}</Cases>
                    <Typography className="infoBox__total">{totalCases} Total</Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Stats;
