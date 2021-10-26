import React, { useState } from 'react';

const api = {
  key: "ef33f4f63af42482ea1fc1f5b95b3314",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const  [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

   const search  = evt => {
   if (evt.key === "Enter") {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
   .then(res => res.json())
    .then(result => {
      setWeather(result);
      setQuery('');
       console.log(result);
    });
  }
}

  return (
  <div className= "App night">
    <main>  
      <div className="search-box">
        <input type= "text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
          
      {(typeof weather.main != "undefined") ? ( 
      <div>
        
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{new Date().toDateString()}</div> 
        </div>
        
        <div className= "weather-box">
          <div className= "temp">{Math.round(weather.main.temp)}&deg;f</div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
      </div>
      ) : ('')}
        
    </main>
  </div>
  );
}

export default App
