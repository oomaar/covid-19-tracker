import { FormControl, Select, MenuItem } from '@material-ui/core';
import { useEffect, useState } from 'react';
import {
    Container,
    Brand,
} from "./styledHeader";

const Header = () => {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("worldwide");

    useEffect(() => {
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then(res => res.json())
                .then(data => {
                    const countries = data.map(country => ({
                        name: country.country,
                        value: country.countryInfo.iso2
                    }));
                    setCountries(countries);
                });
        };

        getCountriesData();
    }, []);

    const onCountryChange = event => {
        const countryCode = event.target.value;
        setCountry(countryCode);
    }

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
