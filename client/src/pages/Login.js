import { useState, useContext } from "react";
import { AdminContext } from "../AdminContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const { setAdmin } = useContext(AdminContext);

  const [state, setState] = useState({
    username: "",
    password: "",
    isLoading: false,
    errors: [],
  });

  const { username, password, isLoading, errors } = state;

  const showToastMessage = (username) => {
    toast.success(`Hello, ${username}.`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const onInputChange = ({ target: { name, value } }) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, isLoading: true }));

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      setState((prevState) => ({ ...prevState, isLoading: false }));

      if (response.ok) {
        const admin = await response.json();
        showToastMessage(username);
        setAdmin(admin);
        navigate("/plants");
      } else {
        const errorData = await response.json();
        setState((prevState) => ({ ...prevState, errors: errorData.errors }));
      }
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        errors: ["An unexpected error occurred. Please try again."],
      }));
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <h3 className="dark-green">Login for Admins Only</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="login-input"
          onChange={onInputChange}
          name="username"
          type="text"
          value={username}
          placeholder="Username"
        />
        <input
          className="login-input"
          onChange={onInputChange}
          name="password"
          type="password"
          value={password}
          placeholder="Password"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
      {errors.length > 0 &&
        errors.map((error, index) => (
          <p key={index} className="error-message">
            {error}
          </p>
        ))}
    </div>
  );
}

export default Login;
