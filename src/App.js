import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { UsersPage } from "./components/users";
import { LoginPage } from "./components/login";
import { RegisterPage } from "./components/register";
import { CategoriesPage } from "./components/categories";
import { QuestionsPage } from "./components/questions";
import { ProtectedRoute } from "./components/route";
import { Menu } from "./components/menu";

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

export function App() {
  const classes = useStyles();
  const { token } = useSelector((state) => state.login);

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <Menu />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container className={classes.container}>
            <Switch>
              <Route exact path="/" component={QuestionsPage} />
              <ProtectedRoute
                exact
                path="/login"
                component={LoginPage}
                condition={!token}
                fallback={"/"}
              />
              <ProtectedRoute
                exact
                path="/register"
                component={RegisterPage}
                condition={!token}
                fallback={"/"}
              />
              <Route exact path="/questions" component={QuestionsPage} />
              <Route
                path="/categories/:categoryId/questions"
                component={QuestionsPage}
              />
              <Route exact path="/categories" component={CategoriesPage} />
              <Route exact path="/users" component={UsersPage} />
            </Switch>
          </Container>
        </main>
      </BrowserRouter>
    </div>
  );
}
