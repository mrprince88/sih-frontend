import {
  CssBaseline,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";

const styles = makeStyles((theme) => ({
  login: {
    background: "#f0f2f5",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  logo: {
    fontSize: "50px",
    fontWeight: "800",
    color: theme.palette.success.dark,
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "24px",
  },
  loginWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContent: {
    height: "60%",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  loginInput: {
    height: "50px",
    borderRadius: "10px",
    border: "1px solid grey",
    fontSize: "18px",
    paddingLeft: "20px",
    "&:focus": {
      outline: "none",
    },
  },
  loginForgot: {
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  LoginButton: {
    height: "50px",
    borderRadius: "10px",
  },
  RegisterButton: {
    height: "50px",
    borderRadius: "10px",
    background: "#66bb6a",
    "&:hover": {
      background: "#388e3c",
    },
  },
}));

export default function Login({ navigate, setPostData }) {
  const classes = styles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const LoginCall = async () => {
    console.log(email, password);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/doctor/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("res", res);
        setPostData(res.data.posts);
        navigate("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <CssBaseline />
      <Box className={classes.login}>
        <Card style={{ marginTop: "8%", width: "70%", height: "70%" }}>
          <Grid container direction="row" spacing={1} className={classes.container}>
            <Grid
              item
              md={6}
              className={classes.loginWrapper}
              style={{ background: 'url("assets/background.png")' }}
            >
              <img src="assets/icon.png" style={{ width: "150px" }} />
              <Typography className={classes.logo}>Flora Doc+</Typography>
              <Typography className={classes.subtitle}>Saving Plants</Typography>
            </Grid>
            <Grid item md={6} className={classes.loginWrapper}>
              <Typography align="center" variant="h6">
                Portal For Doctors
              </Typography>
              <CardContent className={classes.loginContent}>
                <input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={classes.loginInput}
                />
                <input
                  placeholder="Enter password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={classes.loginInput}
                />
                <Button
                  variant="contained"
                  disableElevation="true"
                  className={classes.LoginButton}
                  color="primary"
                  onClick={LoginCall}
                >
                  Log in
                </Button>
                {/* <Typography className={classes.loginForgot}>Forgot Password</Typography> */}
                <Button
                  variant="contained"
                  disableElevation="true"
                  className={classes.RegisterButton}
                  color="primary"
                  onClick={() => navigate("/register")}
                >
                  Create New Account
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
