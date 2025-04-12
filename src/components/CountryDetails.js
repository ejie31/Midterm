import React from 'react';
 import Flag from './Flag';
 import Borders from './Borders';
 
 const CountryDetails = ({ country, onClick }) => {
   const hasCoordinates =
     country.coordinates &&
     typeof country.coordinates.latitude === 'number' &&
     typeof country.coordinates.longitude === 'number';
 
   const coordinateText = hasCoordinates
     ? `Latitude: ${country.coordinates.latitude}, Longitude: ${country.coordinates.longitude}`
     : 'N/A';
 
   return (
     <li style={{ marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
       <Flag src={country.flag} name={country.name} />
       <h2>{country.name}</h2>
       <p><strong>Capital:</strong> {country.capital}</p>
       <p><strong>Region:</strong> {country.region}</p>
       <p><strong>Subregion:</strong> {country.subregion}</p>
       <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
       <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
       <p><strong>Coordinates:</strong> {coordinateText}</p>
       <Borders borders={country.borders} onClick={onClick} />
       <p><strong>Timezones:</strong> {country.timezones?.length ? country.timezones.join(', ') : 'N/A'}</p>
       <p><strong>Currencies:</strong> {country.currency ? Object.values(country.currency).join('') : 'N/A'}</p>
       <p><strong>Languages:</strong> {country.languages?.length ? country.languages.join(', ') : 'N/A'}</p>
     </li>
   );
 };
 
 export default CountryDetails;