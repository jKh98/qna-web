import React from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import useStyles from "./styles";
import { registerUserAction } from "../../redux/actions/authActions";

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRegister = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };

    dispatch(registerUserAction(data));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link href="login" variant="body2">
                Already have an account? Log In
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
