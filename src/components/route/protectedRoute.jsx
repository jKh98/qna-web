import React from "react";
import { Redirect, Route } from "react-router-dom";

export function ProtectedRoute({
  condition,
  fallback,
  component: Component,
  ...props
}) {
  return (
    <Route
      {...props}
      render={(props) =>
        condition ? <Component {...props} /> : <Redirect to={fallback} />
      }
    />
  );
}
