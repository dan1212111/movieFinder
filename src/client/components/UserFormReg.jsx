import { useState } from "react"
import "/Users/danielmccarthy/movieFinder/src/styles/Login.css"

export default function UserFormReg({ handleSubmit }) {
  const [user, setUser] = useState({ username: "", password: "" })

  const handleSubmitDecorator = (e) => {
    e.preventDefault()
    handleSubmit(user)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setUser({
      ...user,
      [name]: value,
    })
  }


  return (
    <form className="form" onSubmit={handleSubmitDecorator}>
       <h1>Register</h1>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />
        <button type="submit">Submit</button>
    </form>
  )
}
