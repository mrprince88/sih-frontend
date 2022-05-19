import { alpha, makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Navigate } from "react-router";

const useStyles = makeStyles((theme) => ({
  nav: {
    padding: "10px 50px",
    background: theme.palette.success.dark,
  },
  title: {
    display: "flex",
    fontWeight: "700",
    paddingLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      flex: 1,
    },
  },
}));

export default function PrimarySearchAppBar({ navigate }) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.nav}>
      <Toolbar>
        <img src="assets/icon.png" style={{ width: "50px" }} />
        <Typography className={classes.title} variant="h6">
          FloraDoc+
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          <Button style={{ color: "white", marginRight: "5px" }}>Home</Button>
          <Button style={{ color: "white", marginRight: "5px" }}>Profile</Button>
          <Button style={{ color: "white" }} onClick={() => navigate("/login")}>
            LogOut
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
