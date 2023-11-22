import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <nav id="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/plants">Plants</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
    )
}

export default NavBar