import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Picture from './Components/Picture'
import ExplanationData from './Components/Explanation' 
import Title from './Components/Title'
import Date from './Components/Date'

function App() {
  const [nasaData, setNasaData] = useState([])
  
  useEffect(() => {
    const dataFetcher= ()=> {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=MUpuYcxc4k65kf8cVr2wxiRt7TOQaAZZXRhbuStl`)
      .then(res => {
        setNasaData(res.data)
      })
      .catch(err => {
        debugger
      })
    }
    dataFetcher()
  }, [])

  return (
    <div className="App">
      <h1>
        NASA Picture of the Day <span role="img" aria-label='go!'>🚀</span>!
      </h1>
      <Picture nasaData={nasaData}/>
      <Title nasaData={nasaData}/>
      <Date nasaData={nasaData}/>
      <ExplanationData nasaData={nasaData}/>
    </div>
  );
}


export default App;
