import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Picture from './Components/Picture'
import ExplanationData from './Components/Explanation' 
import styled from "styled-components";

function App() {
  const [nasaData, setNasaData] = useState([])
  
  useEffect(() => {
    const dataFetcher= ()=> {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=MUpuYcxc4k65kf8cVr2wxiRt7TOQaAZZXRhbuStl&`)
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
    <StyledContainer className="App">
      <div className="mainContainer">
          <div className= "title">
            <h1>
              NASA Picture of the Day
            </h1>
          </div>
      </div>
          <Picture nasaData={nasaData}/>
          <ExplanationData nasaData={nasaData}/>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  background-color: #5697D8;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 10vh;
  
  .mainContainer{
    width: 70%;
    display: flex;
    align-content: center;
    justify-content: center;
    border: 1rem solid #F3E081;
    margin: .5rem;
  }
  
  .title {
    width: 100%;
    background-color: #F95B48;
    border: .8rem solid #F8A84C;
    display: flex;
  }

  h1{
    padding: .5rem;
    margin: 0%;
    font-size: calc(1rem + 4vw);
    font-family: 'Geo', sans-serif;
    color: white;
    width: 100%;
    text-align: center;
  }
  @media (min-height: 768px){
    .mainContainer{
    width: 80%;
  }
`

export default App;


  
  