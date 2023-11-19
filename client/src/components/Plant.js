import React from 'react'

function Plant({plant}) {

    const {binomialName, commonName, speciesType, height, moistureRequirement, lightRequirement} = plant

    return(
        <div className="plant-card">
            <p id="latin">{binomialName}</p>
            <p>{commonName}</p>
            <p>{speciesType}</p>
            <p>{height}</p>
            <p>{moistureRequirement}</p>
            <p>{lightRequirement}</p>
        </div>
    )
}

export default Plant