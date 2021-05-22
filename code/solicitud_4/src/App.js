import { useState } from 'react';
import axios from 'axios';
import TableContainer from './components/Table/TableContainer';
import SearchBar from './components/SearchBar/SearchBar';


function App() {

  const [cities, setCities] = useState([]);

  const onSearch = (city) => {
      axios.get(`http://api.weatherstack.com/current?access_key=9668ec331930c26a39c709a723296e16&query=${city}`)
      .then(res => {
        console.log(res)
        const location = res.data.location;
        const current = res.data.current;
        if(!res.data.error){
          const city = {
            name: location.name,
            country: location.country,
            lat: location.lat,
            lon: location.lon,
            temp: current.temperature,
            description: current.weather_descriptions[0],
            humidity: current.humidity,
            feels: current.feelslike,
            visibility: current.visibility
          };
          if (!cities.some((c) => c.name === city.name)) {
            setCities((oldCities) => [...oldCities, city]);
          } else {
            alert("This city already exists in the table");
          }
        }else{
          alert("The city not exist or something went wrong");
        }

      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      <SearchBar onSearch={onSearch} />
      <TableContainer cities={cities} />
    </>
  );
}

export default App;


