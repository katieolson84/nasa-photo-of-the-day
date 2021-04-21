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
    align-self: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
    padding: 0;
    
    .imageContainer{
        background-color: white;
        width: 80%;
        border-radius: 2px;
        box-shadow: 5px 5px 7px rgba(0,0,0,0.6);
        min-height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .image{
        position: relative;
        width: 90%;
        margin-top: 2rem;
        border-radius: 2px;
        
    }
    .image:after{
        display: block;
        padding-bottom: 90%;
    }

    .imgTitle{
        width: 95%;
        font-size: calc(.8rem + .5vw);
    }

    .date{
        width: 100%;
        font-size: calc(.7rem + .5vw);
        color: black;
    }

    @media screen and (min-width: 768px){
        .imageContainer{
        width: 50%;
        }
    }
     
`
export default Picture;
