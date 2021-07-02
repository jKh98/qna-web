import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Grid } from "@material-ui/core";
import { UserProfile } from "../users/userProfile";

export function QuestionItem({
  id,
  title,
  body,
  createdAt,
  user: { username },
  category: { id: categoryId, name },
  shouldReferenceCategory = false,
}) {
  const renderSubheader = () => (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="body2" color="textSecondary">
          Posted
          {shouldReferenceCategory && (
            <span>
              {" in "}
              <Link to={`/categories/${categoryId}/questions`}>{name}</Link>
            </span>
          )}
          {` ${moment(createdAt).fromNow()}`}
        </Typography>
      </Grid>
    </Grid>
  );

  return (
    <>
      <ListItem
        alignItems="flex-start"
        dense
        button
        divider
        // onClick={handleToggle(value)}
      >
        <ListItemAvatar>
          <UserProfile username={username} />
        </ListItemAvatar>
        <Grid container>
          {renderSubheader()}
          <ListItemText
            primary={
              <Typography variant="h6" color="textPrimary">
                {title}
              </Typography>
            }
            secondary={
              <Typography variant="body2" color="textPrimary">
                {body}
              </Typography>
            }
          />
        </Grid>
      </ListItem>
    </>
  );
}
