import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { authContext } from "../../contexts/AuthContext";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Kitep.kg
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // right: "25%",
    // position: "relative",
    marginTop: "150px",
    borderRadius: "0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
  },
  paper: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    width: "700px",
  },
  form: {
    width: "100%",
    borderRadius: "0",
    padding: "5%",
    alignItems: "center",
  },
  input: {
    marginTop: "20px",
    width: "80%",
  },
}));

const SignUp = (props) => {
  const { registerUser, hasAccount } = useContext(authContext);
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form
            onSubmit={(e) => registerUser(e, props.history)}
            className={classes.form}
          >
            <Typography component="h1" variant="h5">
              Создайте учетную запись
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  variant="outlined"
                  required
                  fullwidth="true"
                  id="email"
                  label="Адрес электронной почты"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  variant="outlined"
                  required
                  fullwidth="true"
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <button
              style={{ marginTop: "25px" }}
              className="product-details-btn"
            >
              Создать
            </button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Grid>
  );
};

export default SignUp;
