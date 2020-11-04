import React from 'react'

const Title = (props) => {
    const {nasaData} = props
    return (
        <div>
            <h2>{nasaData.title}</h2>
        </div>
    )
}

export default Title
