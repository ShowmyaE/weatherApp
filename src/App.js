import './App.css';
import React from 'react'
import {useState, useEffect} from 'react'

function App() {
  const [query, setQuery] = useState('');
  const [report, setReport] = useState({});

  const handleChange = (event) => {
    setQuery(event.target.value);

  };
  const searchLocation = (event) => {
    let url = `http://localhost:5000/${query}`
    fetch(url)
    .then(async(response) => 
      {
       const data= await response.json()
      setReport(data);
    })
  };

  useEffect( () => {
          console.log("REPORT", report)
  }, [report]);

  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  };

  return (
    <div className="App">
      <header className="App-header">
      <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
    />
    <button onClick={searchLocation}>Search</button>
    <div >
    {!isEmptyObject(report) && (
        <p>
        Place : {report.name}  <br/>
        Temperature : {report.main.temp}  <br/>
        Cloud : {report.clouds.all}  <br/>
        Humidity: {report.main.humidity}  <br/>
        Wind Speed: {report.wind.speed}  <br/>
        Ground Level : {report.main.grnd_level}  <br/>
      </p>
      )}
        </div>
      </header>
    </div>
  );
}

export default App;
