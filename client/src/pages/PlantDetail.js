import { useContext } from 'react'
import { useParams, NavLink } from "react-router-dom"
import { SpeciesContext } from "../SpeciesContext"
import { AdminContext } from '../AdminContext'

function PlantDetail() {

  let {id} = useParams()
  id = parseInt(id)
  const {admin} = useContext(AdminContext)
  const {allPlants} = useContext(SpeciesContext)
  const species = allPlants.find((species) => species.id === id)
  if (!species) {
    return <p>"Loading"</p>
  }
  const {
    binomial_name,
    common_name,
    height,
    moisture,
    light
  } = species

  return (
    <div className="plant-detail-container">
      <div className="plant-details">
        <p>{binomial_name}</p>
        <p>{common_name}</p>
        <p>{height}'</p>
        <p>{moisture}</p>
        <p>{light}</p>
        {admin ? <NavLink className="edit-button">Edit</NavLink> : null}
        {admin ? <NavLink className="delete-button">Delete</NavLink> : null}
      </div>
    </div>
  )
}

export default PlantDetail