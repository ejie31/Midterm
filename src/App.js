import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentCountry, setCurrentCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://countries-api-abhishek.vercel.app/countries")
      .then((response) => {
        setCountries(response.data.data);
        setFilteredCountries(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        setLoading(false);
      });
  }, []);

  const fetchCountryDetails = (border) => {
    setLoading(true);

    const country = countries.find((c) => c.name === border);

    if (country) {
      setCurrentCountry(country);
    } else {
      console.error("Country not found!");
    }

    setLoading(false);
  };

  const handleSearch = (query) => {
    setCurrentCountry(null);

    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  const filterByPopulation = () => {
    const sorted = [...countries].sort((a, b) => b.population - a.population);
    setFilteredCountries(sorted);
    setCurrentCountry(null);
  };

  const filterByRegion = (region = "Asia") => {
    const filtered = countries.filter((country) => country.region === region);
    setFilteredCountries(filtered);
    setCurrentCountry(null);
  };
  
  const handleFilter = (type) => {
    if (type === "all") {
      setFilteredCountries(countries);
    } else if (type === "population") {
      filterByPopulation();
    } else {
      filterByRegion(type);
    }
  };

  return (
    <>
      <Header className="header-fixed" onSearch={handleSearch} onFilter={handleFilter} />
      <div className="container mt-3">
        <h3 className="text-center mb-3 ">Country's Information:</h3>

        {loading ? (
          <p className="text-center">
            <strong>Loading country's data...</strong>
          </p>
        ) : (
          <>
            {currentCountry ? (
              <CountryDetails
                country={currentCountry}
                onClick={fetchCountryDetails}
              />
            ) : (
              <ul className="list-group">
                {filteredCountries.map((country, index) => (
                  <CountryDetails
                    key={index}
                    country={country}
                    onClick={fetchCountryDetails}
                  />
                ))}
              </ul>
            )}
          </>
        )}
      </div>
      <Footer className="footer-fixed" />
    </>
  );
}

export default App;