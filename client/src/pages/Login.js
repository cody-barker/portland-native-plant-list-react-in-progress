import { useState } from 'react'

function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const formData = {
    username,
    password
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    fetch("/login")
  }

  return(
    <div className="login-container">
      <form>
      </form>
    </div>
  )
}

export default Login