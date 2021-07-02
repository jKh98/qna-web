import React from "react";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import { AuthenticatedModal } from "../modal";

export function QuestionModal({ isVisible, setVisible, handleAddQuestion }) {
  return (
    <AuthenticatedModal isVisible={isVisible} setVisible={setVisible}>
      <form onSubmit={handleAddQuestion}>
        <DialogTitle id="form-dialog-title">New Question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Check if someone asked this before and be specific.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="title"
            label="Title"
            type="title"
            variant="outlined"
            fullWidth
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="body"
            label="Body"
            type="body"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setVisible(false)} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained">
            Ask
          </Button>
        </DialogActions>
      </form>
    </AuthenticatedModal>
  );
}
