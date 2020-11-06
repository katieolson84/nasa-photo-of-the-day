import React from 'react'
import styled from "styled-components";


const Picture = (props) => {
    const {nasaData} = props

    return (
        <StyledPicture>
            <div className= "imageContainer">
                <img className="image" src={nasaData.url} alt="nasa pic of the day"/>
                <h2 className="imgTitle">{nasaData.title}</h2>
                <h3 className="date">{nasaData.date}</h3>
            </div>
        </StyledPicture>
    )
}
const StyledPicture = styled.div`
    font-family: 'Rock Salt', cursive;
    font-size: 2rem;
    align-self: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .imageContainer{
        background-color: white;
        width: 50%;
        border-radius: 2px;
        box-shadow: 5px 5px 7px rgba(0,0,0,0.6);
    }
    .image{
        position: relative;
        width: 90%;
        margin-top: 2.8rem;
        border-radius: 2px;
        
    }
    .image:after{
        display: block;
        padding-bottom: 90%;
    }

    .imgTitle{
        width: 100%;
        text-align: center;
        font-size: 2rem;
    }

    .date{
    width: 100%;
    font-size: 1.5rem;
    color: black;
    padding-bottom: .5%;
    }
    
    
`
export default Picture
