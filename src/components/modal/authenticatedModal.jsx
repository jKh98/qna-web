import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { savePreAuthPathAction } from "../../redux/actions/authActions";

export function AuthenticatedModal({ isVisible, setVisible, children }) {
  const { token } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      dispatch(savePreAuthPathAction());
      history.push("/login");
    }
  }, [token, history, dispatch]);

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
