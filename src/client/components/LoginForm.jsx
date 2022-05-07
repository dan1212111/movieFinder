import React from "react"
import { useState, useEffect } from "react"
import { Grid, Paper, Avatar, Link, Typography, Box } from "@material-ui/core"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { TextField } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import Button from "@mui/material/Button"
import FormControlLabel from "@mui/material/FormControlLabel"
import "../../styles/login&Register.css"

export default function LoginForm({ handleSubmit, loginError }) {
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
    if (loginError) {
      let loginErrors = loginError.toString().toLowerCase()
      if (loginErrors.includes("username")) {
        setHelperTextUsername(loginError)
        setHelperTextPassword("")
        setErrorUsername(true)
        setErrorPassword(false)
      }
      if (loginErrors.includes("password")) {
        setHelperTextPassword(loginError)
        setHelperTextUsername("")
        setErrorPassword(true)
        setErrorUsername(false)
      }
    }
  }, [loginError])

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" style={signBox}>
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <div className="signInTxt" style={signTxt}>
            <h2>Sign In</h2>
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
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checked"
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnStyle}
            fullWidth
          >
            Sign in
          </Button>
          <Typography>
            {" "}
            Do you have an account?
            <Link href="/register"> Sign Up</Link>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  )
}
