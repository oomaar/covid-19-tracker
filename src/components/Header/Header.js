import { FormControl, Select, MenuItem } from '@material-ui/core';
import {
    Container,
    Brand,
} from "./styledHeader";

const Header = ({ country, onCountryChange, countries }) => {
    return (
        <Container>
                <Brand>COVID-19 TRACKER</Brand>
                <FormControl className="dropdown">
                    <Select
                        variant="outlined"
                        value={country}
                        onChange={onCountryChange}
                    >
                        <MenuItem value="worldwide">WorldWide</MenuItem>
                        {countries.map(country => (
                            <MenuItem key={country.name} value={country.value}>{country.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
        </Container>
    );
};

export default Header;
