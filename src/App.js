import { useEffect, useState } from 'react';
import styled from "styled-components";
import { LeftApplication, RightApplication } from "./containers";
import { sortData } from "./utils/sortedData";
import "leaflet/dist/leaflet.css";

const App = () => {
  const [casesType, setCasesType] = useState("cases");
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCenter, setMapCenter] = useState({
    lat: 20.80746,
    lng: -40.4796
  });
  const [mapCountries, setMapCountries] = useState([]);
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(res => res.json())
    .then(data => setCountryInfo(data))
  }, []);
  
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then(res => res.json())
        .then(data => {
          const countries = data.map(country => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));
          
          const sortedData = sortData(data);
          setCountries(countries);
          setTableData(sortedData);
          setMapCountries(data);
        });
      };
      
    getCountriesData();
  }, []);
  
  const onCountryChange = async event => {
    const countryCode = event.target.value;
    const url =
    countryCode === "worldwide"
    ? "https://disease.sh/v3/covid-19/all"
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    
    await fetch(url)
    .then(res => res.json())
    .then(data => {
      setCountry(countryCode);
      setCountryInfo(data);
      
      if (countryCode !== "worldwide") {
        setMapCenter([
          data.countryInfo.lat,
          data.countryInfo.long
        ]);
        setMapZoom(4);
      }
    });
  };
  
  console.log("🚀 ~ file: App.js ~ line 14 ~ App ~ mapCenter", mapCenter)
  return (
    <Application>
      <LeftApplication
        countryInfo={countryInfo}
        onCountryChange={onCountryChange}
        countries={countries}
        country={country}
        center={mapCenter}
        zoom={mapZoom}
        mapCountries={mapCountries}
        casesType={casesType}
      />
      <RightApplication
        tableData={tableData}
      />
    </Application>
  );
}

export default App;

const Application = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
`;