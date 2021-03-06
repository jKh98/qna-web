import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { UserProfile } from "../users";

export function AnswerItem({ id, text, createdAt, user }) {
  return (
    <>
      <ListItem alignItems="flex-start" dense>
        <ListItemAvatar>
          <Link onClick={(e) => e.stopPropagation()} to={`/users/${user?.id}`}>
            <UserProfile username={user?.username} />
          </Link>
        </ListItemAvatar>
        <Grid container>
          <ListItemText
            primary={
              <Typography variant="body2" color="textSecondary">
                <Link to={`/users/${user?.id}`}>{user?.username}</Link>
                {` ${moment(createdAt).fromNow()}`}
              </Typography>
            }
            secondary={
              <Typography variant="body2" color="textPrimary">
                {text}
              </Typography>
            }
          />
        </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
