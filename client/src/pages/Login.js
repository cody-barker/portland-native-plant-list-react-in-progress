import { useState } from 'react'

function Login() {
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

  const formData = {
    username,
    password,
    passwordConfirmation
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    fetch("/login")
  }

  //render errors below the form

  return(
    <div className="login-container">
      <p className="dark-green">Login for Admins Only</p>
      <form>
        <input className="login-input" onChange={onInputChange} name="username" type="text" value={username} placeholder="Username"></input>
        <input className="login-input" onChange={onInputChange} name="password"type="password" value={password} placeholder="Password"></input>
        <input className="login-input" onChange={onInputChange} name="passwordConfirmation" type="password" value={passwordConfirmation} placeholder="Confirm Password"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login