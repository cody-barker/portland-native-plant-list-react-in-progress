import React from 'react'

function Plant({plant}) {

    const {
        binomialName,
        commonName,
        speciesType,
        height,
        moistureRequirement,
        lightRequirement
    } = plant

    return(
        <tr>
            <td id="latin">{binomialName}</td>
            <td>{commonName}</td>
            <td>{speciesType}</td>
            <td>{height}</td>
            <td>{moistureRequirement}</td>
            <td>{lightRequirement}</td>
        </tr>
    )
}

export default Plant