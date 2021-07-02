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
import { loginUserAction } from "../../redux/actions/authActions";
import { Status } from "../status/status";

export function LoginPage() {
  const styles = makeStyles();
  const { pending, error, success } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const onHandleLogin = (event) => {
    event.preventDefault();

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    dispatch(loginUserAction(data));
  };

  return (
    <Container maxWidth="xs">
      <div className={styles.paper}>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <form className={styles.form} onSubmit={onHandleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
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
              <Link href="register" variant="body2">
                {"Don't have an account? Register"}
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
