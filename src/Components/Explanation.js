import React from 'react'
import styled from "styled-components";

const ExplanationData = (props) => {
    const {nasaData} = props
    return (
        <StyledExplanation>
            <div class="textContainer">
                <p>{nasaData.explanation}</p>
            </div>
        </StyledExplanation>
    )
}
const StyledExplanation = styled.div`
    width: 70%;
    display: flex;
    align-content: center;
    justify-content: center;
    border: 1px red solid;
    border: 20px solid #F3E081;
    margin: 4%;
    
    .textContainer{
        width: 100%;
        padding: 4%;
        text-align: center;
        background-color: #F95B48;
        color: white;
        line-height: 1.5;
        font-size: 1.4rem;
        border: 20px solid #F8A84C;
        
       
    }
`

export default ExplanationData