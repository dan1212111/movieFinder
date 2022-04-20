import React from "react"
import UserFormLog from "./UserFormLog"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [loginResponse, setLoginResponse] = useState()
  let navigate = useNavigate();

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

    fetch("http://localhost:4000/user/login", options)
      .then((res) => res.json())
      .then((json) => {
        setLoginResponse("Logged In with token:" + json.data)
        localStorage.setItem("jwt", json.data)
        if(json.data !== undefined) {
          console.log(loginResponse)
          navigate("/")
        }
      })
  }

  return (
    <>
      <UserFormLog handleSubmit={handleLogin} loginResponse={loginResponse}/>
      {/* <p>{loginResponse}</p> */}
    </>
  )
}
