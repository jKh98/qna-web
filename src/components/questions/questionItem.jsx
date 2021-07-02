import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { UserProfile } from "../users/userProfile";

const renderSubheader = (createdAt, user, category) => (
  <span>
    <Link onClick={(e) => e.stopPropagation()} to={`/users/${user?.id}`}>
      {user?.username}
    </Link>
    {" in "}
    <Link
      onClick={(e) => e.stopPropagation()}
      to={`/categories/${category?.id}/questions`}
    >
      {category?.name}
    </Link>
    {` ${moment(createdAt).fromNow()}`}
  </span>
);

export function QuestionItem({
  id,
  title,
  body,
  createdAt,
  user,
  category,
  onSelectQuestion = null,
}) {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        dense
        button={!!onSelectQuestion}
        divider
        onClick={onSelectQuestion}
      >
        <ListItemAvatar>
          <Link onClick={(e) => e.stopPropagation()} to={`/users/${user?.id}`}>
            <UserProfile username={user?.username} />
          </Link>
        </ListItemAvatar>
        <Grid container>
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
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="body2" color="textSecondary">
                {renderSubheader(createdAt, user, category)}
              </Typography>
              <br />
            </Grid>
          </Grid>
        </Grid>
      </ListItem>
    </>
  );
}

export function QuestionMainItem({
  title,
  body,
  createdAt,
  user,
  category,
  shouldReferenceCategory = false,
}) {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <Typography variant="body2" color="textSecondary">
          {renderSubheader(createdAt, user, category)}
        </Typography>
        <Box my={1} display="flex">
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box my={2} display="flex">
          <Typography variant="body1">{body}</Typography>
        </Box>
      </Grid>
    </>
  );
}
