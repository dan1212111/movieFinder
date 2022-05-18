import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "./LoginForm"
const API_URL = process.env.REACT_APP_API_URL

export default function Login() {
  const [loginError, setLoginError] = useState()
  let navigate = useNavigate()

  const handleLogin = async ({ username, password }) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }

    fetch("Access-Control-Allow-Origin", "*", `${API_URL}/user/login`, options)
      .then((res) => res.json())
      .then((res) => {
        setLoginError(res.error)
        localStorage.setItem("jwt", res.data)
        if (res.data !== undefined) {
          navigate("/")
        }
      })
      .catch((err) => {
        const errorMessage = err
        console.log("Server error.", errorMessage)
      })
  }

  return (
    <>
      <LoginForm handleSubmit={handleLogin} loginError={loginError} />
    </>
  )
}
