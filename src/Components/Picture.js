import React from 'react'
const Picture = (props) => {
    const {nasaData} = props

    return (
        <div>
           <img src={nasaData.url} alt="nasa pic of the day"/>
        
        </div>
    )
}

export default Picture
