import React from 'react'

const ExplanationData = (props) => {
    const {nasaData} = props
    return (
        <div>
            <p>{nasaData.explanation}</p>
        </div>
    )
}

export default ExplanationData
