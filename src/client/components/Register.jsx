import React from 'react'
import UserFormReg from "./UserFormReg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const [registeredResponse, setRegisteredResponse] = useState()
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
        fetch("http://localhost:4000/user/register", options)
          .then((res) => res.json())
          .then((json) => {
            setRegisteredResponse(
              "You have successfully registered with:" + json.data.username
            )
            navigate("/login") }
          )
          .catch(() => {
            setRegisteredResponse("Server error")
          })
      }

  return (
    <>
    <UserFormReg handleSubmit={handleRegister} />
    <p>{registeredResponse}</p>
  </>
  )
}
