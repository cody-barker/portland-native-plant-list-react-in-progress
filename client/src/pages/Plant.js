import React from 'react'

function Plant({plant}) {

    const {binomialName, commonName, speciesType, height, moistureRequirement, lightRequirement} = plant

    return(
        <div className="plant-card">
            <h2 id="latin">{binomialName}</h2>
            <h3>{commonName}</h3>
            <p>Type: {speciesType}</p>
            <p>Height: {height}</p>
            <p>Moisture Requirement: {moistureRequirement}</p>
            <p>Light Requirement: {lightRequirement}</p>
        </div>
    )
}

export default Plant