import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export function AuthenticatedModal({ isVisible, setVisible, children }) {
  const { token } = useSelector((state) => state.login);
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token, history]);

  return (
    <Dialog
      open={isVisible}
      onClose={() => setVisible(false)}
      aria-labelledby="form-dialog-title"
    >
      {children}
    </Dialog>
  );
}
