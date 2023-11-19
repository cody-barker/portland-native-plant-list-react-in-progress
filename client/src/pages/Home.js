import React from 'react'
import gotter_prairie from '../assets/gotter prairie.jpg'

function Home() {
    return(
        <header>
            <h1>Portland Native Plants</h1>
            <h3>Helping you find the right plant, for the right place.</h3>
            <p>The Portland Native Plant List is an expansive resource containing plants native to Portland, Oregon.</p>
            <p>All of the plants on this list could be suitable for backyard habitats and restoration projects alike.</p>
            <img id="background" src={gotter_prairie} alt="field of camas"></img>
        </header>
    )
}

export default Home