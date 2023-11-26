import {useContext, useState} from 'react'
import { AdminContext } from '../AdminContext'
import { useNavigate } from 'react-router-dom'
import { SpeciesContext } from '../SpeciesContext'


function PlantForm() {

    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const {allPlants, setAllPlants} = useContext(SpeciesContext)
    const navigate = useNavigate()
    const [inputState, setInputState] = useState({
        binomialName: "",
        commonName: "",
        speciesType: "",
        height: "",
        lightRequirement: "",
        moistureRequirement: "",
    })

    const {
        binomialName,
        commonName,
        speciesType,
        height,
        lightRequirement,
        moistureRequirement
    } = inputState

    function onInputChange(e) {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

    const formData = {
        binomialName,
        commonName,
        speciesType,
        height,
        lightRequirement,
        moistureRequirement
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/species', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => {
            if (r.ok) {
                setIsLoading(false)
                r.json().then((plant) => setAllPlants([...allPlants, plant]))
                navigate("/plants")
            } else {
                r.json().then((error) => setErrors(error.errors))
            }
        })
    }

    return(
        <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <h3>Submit a New Species to the List</h3>
                <input required onChange={onInputChange} type="text" name="binomialName" placeholder="Binomial Name" value={binomialName}></input>
                <input required onChange={onInputChange} type="text" name="commonName" placeholder="A Common Name" value={commonName}></input>
                <input required onChange={onInputChange} type="text" name="speciesType" placeholder="Type" value={speciesType}></input>
                <input required onChange={onInputChange} type="text" name="height" placeholder="Height (ft)" value={height}></input>
                <input required onChange={onInputChange} type="text" name="lightRequirement" placeholder="Light Requirement" value={lightRequirement}></input>
                <input required onChange={onInputChange} type="text" name="moistureRequirement" placeholder="Moisture Requirement" value={moistureRequirement}></input>
                <button type="submit">{isLoading ? "Loading" : "Submit"}</button>
            </form>
            {errors.map((error) => (
                <p className="error-message">{error}</p>
            ))}
        </div>
    )
}

export default PlantForm