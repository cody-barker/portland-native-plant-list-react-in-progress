import { useState } from 'react'

function Login() {
  const {setAdmin} = useContext(AdminContext)
  const [inputState, setInputState] = useState({
    username: "",
    password: "",
    passwordConfirmation: ""
  })

  const {
    username,
    password,
    passwordConfirmation,
  } = inputState;

  const onInputChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([])
  const errorComps = errors.map((e, index) => (
    <div key={index} className="error-container">
        {e.errors.map((errorMessage, i) => (
            <p key={i} className="errors">
                {errorMessage}
            </p>
        ))}
    </div>
));
  const formData = {
    username,
    password,
    passwordConfirmation
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((r) => {
      setIsLoading(false)
      if (r.ok) {
        r.json().then((admin) => setAdmin(admin))
      } else {
        r.json().then((error) => setErrors(error.errors))
      }
    })
  }

  //render errors below the form

  return(
    <div className="login-container">
      <p className="dark-green">Login for Admins Only</p>
      <form onSubmit={handleSubmit}>
        <input className="login-input" onChange={onInputChange} name="username" type="text" value={username} placeholder="Username"></input>
        <input className="login-input" onChange={onInputChange} name="password"type="password" value={password} placeholder="Password"></input>
        <input className="login-input" onChange={onInputChange} name="passwordConfirmation" type="password" value={passwordConfirmation} placeholder="Confirm Password"></input>
        <button type="submit">{isLoading? "Loading" : "Submit"}</button>
      </form>
      {errors.length > 0 ? errorComps : null}
    </div>
  )
}

export default Login