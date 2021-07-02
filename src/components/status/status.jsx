import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export function Status({ message, type }) {
  return (
    <Snackbar
      open={!!message}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert variant="filled" severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
