import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <nav id="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/allplants">Plants</NavLink>
        </nav>
    )
}

export default NavBar