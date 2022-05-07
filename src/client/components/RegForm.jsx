import React from "react"
import { useState, useEffect } from "react"
import { Grid, Paper, Avatar, Link, Typography, Box } from "@material-ui/core"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { TextField } from "@mui/material"
import Button from "@mui/material/Button"
import "../../styles/login&Register.css"

export default function RegisterForm({ handleSubmit, registerError }) {
  const [user, setUser] = useState({ username: "", password: "" })
  const [helperTextUsername, setHelperTextUsername] = useState("")
  const [helperTextPassword, setHelperTextPassword] = useState("")
  const [errorUsername, setErrorUsername] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "30vw",
    margin: "5% auto",
  }
  const signBox = { paddingBottom: "5%" }
  const avatarStyle = { backgroundColor: "#f4c518", marginTop: "15%" }
  const signTxt = { marginTop: "6%" }
  const btnStyle = { margin: "5% 0" }
  const txtStyle = { marginTop: "10%" }
  const txt2Style = { marginTop: "10px" }

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

  useEffect(() => {
    if (registerError) {
      let registerErrors = registerError.toString().toLowerCase()
      if (registerErrors.includes("username")) {
        setHelperTextUsername(registerError)
        setHelperTextPassword("")
        setErrorUsername(true)
        setErrorPassword(false)
      }
      if (registerErrors.includes("password")) {
        setHelperTextPassword(registerError)
        setHelperTextUsername("")
        setErrorPassword(true)
        setErrorUsername(false)
      }
    }
  }, [registerError])

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" style={signBox}>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <div className="signInTxt" style={signTxt}>
            <h2>Sign Up</h2>
          </div>
        </Grid>
        <Box
          component="form"
          onSubmit={handleSubmitDecorator}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            label="Username"
            placeholder="Enter Username"
            name="username"
            style={txtStyle}
            value={user.username}
            onChange={handleChange}
            autoComplete="username"
            fullWidth
            required
            error={errorUsername}
            helperText={helperTextUsername}
          ></TextField>
          <TextField
            label="Password"
            placeholder="Enter Password"
            name="password"
            style={txt2Style}
            type="password"
            value={user.password}
            onChange={handleChange}
            autoComplete="current-password"
            fullWidth
            required
            error={errorPassword}
            helperText={helperTextPassword}
          ></TextField>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Submit
          </Button>
          <Typography>
            {" "}
            Already have an account?
            <Link href="/login"> Sign In</Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  )
}
