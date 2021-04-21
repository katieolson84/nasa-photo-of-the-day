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
    width: 80%;
    display: flex;
    align-content: center;
    justify-content: center;
    border: 1rem solid #F3E081;
    margin: 1rem;
    
    .textContainer{
        width: 100%;
        padding: 1rem;
        text-align: center;
        background-color: #F95B48;
        color: white;
        line-height: 1.5;
        font-size: 1rem;
        border: .8rem solid #F8A84C;
    }
`

export default ExplanationData