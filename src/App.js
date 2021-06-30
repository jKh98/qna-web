import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { LoginPage } from "./components/login";
import { RegisterPage } from "./components/register";
import { CategoriesPage } from "./components/categories";
import { UsersPage } from "./components/users";
import { Menu } from "./components/menu";

export function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Menu />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/questions" component={RegisterPage} />
              <Route exact path="/categories" component={CategoriesPage} />
              <Route exact path="/users" component={UsersPage} />
            </Switch>
          </Container>
        </main>
      </BrowserRouter>
    </div>
  );
}
