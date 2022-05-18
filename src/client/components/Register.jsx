import React from 'react'
import RegisterForm from "./RegForm"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const API_URL = process.env.REACT_APP_API_URL

export default function Register() {
    const [registerError, setRegisterError] = useState()
    let navigate = useNavigate();

    const handleRegister = async ({ username, password }) => {
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
        fetch(`${API_URL}/user/register`, options)
          .then((res) => res.json())
          .then((res) => {
            setRegisterError(res.error)
            if (res.data !== undefined) {
              navigate("/login")
            }
          })
          .catch((err) => {
            const errorMessage = err
            console.log("Server error.", errorMessage)
          })
      }

  return (
    <>
    <RegisterForm handleSubmit={handleRegister} registerError={registerError}/>
    <p>{registerError}</p>
  </>
  )
}
