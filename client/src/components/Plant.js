import React from 'react'

function Plant({plant}) {

    const {
        binomial_name,
        common_name,
        species_type,
        height,
        moisture,
        light
    } = plant

    return(
        <tr>
            <td id="latin">{binomial_name}</td>
            <td>{common_name}</td>
            <td>{species_type}</td>
            <td>{height}</td>
            <td>{moisture}</td>
            <td>{light}</td>
        </tr>
    )
}

export default Plant