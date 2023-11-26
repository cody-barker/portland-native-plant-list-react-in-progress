import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AdminContext } from '../AdminContext'

function NavBar() {
    
    const { admin, setAdmin } = useContext(AdminContext)
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setAdmin(null)
            }
        })
  }

    return(
        <nav id="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/plants">Plants</NavLink>
            {admin ? <NavLink to="/plants/new">Add Species</NavLink> : null}
            {admin ? <NavLink onClick={handleLogout} to="/">Logout</NavLink> : <NavLink to="/login">Login</NavLink>}
        </nav>
    )
}

export default NavBar