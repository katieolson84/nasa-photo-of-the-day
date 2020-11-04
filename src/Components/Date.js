import React from 'react'

const Date = (props) => {
    const {nasaData} = props
    return (
        <div>
           <h3>{nasaData.date}</h3> 
        </div>
    )
}

export default Date
