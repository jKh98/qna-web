import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";

import makeStyles from "./styles";
import { registerUserAction } from "../../redux/actions/authActions";
import { Status } from "../status/status";

export function RegisterPage() {
  const styles = makeStyles();
  const { pending, error, success } = useSelector((state) => state.register);
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
    <Container maxWidth="xs">
      <div className={styles.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={styles.form} noValidate onSubmit={handleRegister}>
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
            disabled={pending}
            className={styles.submit}
          >
            {pending ? <CircularProgress size={14} /> : "Submit"}
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
      <Status message={error} type={"error"} />
      <Status message={success} type={"success"} />
    </Container>
  );
}
