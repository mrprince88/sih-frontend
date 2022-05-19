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
import { useState } from "react";
import axios from "axios";

const styles = makeStyles((theme) => ({
  login: {
    background: "#f0f2f5",
    width: "100vw",
    height: window.innerHeight,
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
  registerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  registerBox: {
    height: "75%",
    width: "90%",
    backgroundColor: "white",
    paddingTop: "20px",
    paddingBottom: "10px",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  registerContent: {
    height: "80%",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  registerInput: {
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
  regsiterButton: {
    height: "50px",
    borderRadius: "10px",
  },
  loginButton: {
    height: "50px",
    borderRadius: "10px",
    background: "#66bb6a",
    "&:hover": {
      background: "#388e3c",
    },
  },
}));

export default function Register({ navigate }) {
  const classes = styles();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [experience, setExperience] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const RegisterCall = async () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/doctor/signup`, {
        name: name,
        email: email,
        phone: phone,
        age: age,
        availibility: true,
        image: "feafe",
        experience: experience,
        specialization: "a, b",
        password: password,
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
      });
  };

  return (
    <Box className={classes.login}>
      <Card style={{ marginTop: "8%", width: "70%", height: "70%" }}>
        <Grid container direction="row" spacing={1} className={classes.container}>
          <Grid
            item
            md={6}
            className={classes.registerWrapper}
            style={{ background: 'url("assets/background.png")' }}
          >
            <img src="assets/icon.png" style={{ width: "150px" }} />
            <Typography className={classes.logo}>Flora Doc+</Typography>
            <Typography className={classes.subtitle}>Saving Plants</Typography>
          </Grid>
          <Grid item md={6} className={classes.registerWrapper}>
            <Typography align="center" variant="h6">
              Portal For Doctors
            </Typography>
            <CardContent className={classes.registerContent}>
              <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={classes.registerInput}
              />
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={classes.registerInput}
              />
              <input
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className={classes.registerInput}
              />
              <input
                placeholder="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className={classes.registerInput}
              />
              <input
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={classes.registerInput}
              />
              <input
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className={classes.registerInput}
              />
              <Button
                variant="contained"
                disableElevation="true"
                className={classes.regsiterButton}
                color="primary"
                onClick={RegisterCall}
              >
                Sign Up
              </Button>

              <Button
                variant="contained"
                disableElevation="true"
                className={classes.loginButton}
                color="primary"
                onClick={() => navigate("/login")}
              >
                Log into Account
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
