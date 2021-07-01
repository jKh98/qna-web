import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";

export function QuestionItem({
  id,
  title,
  body,
  createdAt,
  user: { username },
  category: { id: categoryId, name },
  shouldReferenceCategory = false,
}) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <img
              src={`https://robohash.org/${username}`}
              alt="profile pic"
              width={60}
              height={60}
            />
          </Avatar>
        </ListItemAvatar>
        <Grid container>
          <ListItemText>
            <Typography component="span" variant="body2" color="textSecondary">
              Posted
              {shouldReferenceCategory && (
                <>
                  {" in "}
                  <Link to={`/categories/${categoryId}/questions`}>{name}</Link>
                </>
              )}
              {` ${moment(createdAt).fromNow()}`}
            </Typography>
          </ListItemText>
          <ListItemText
            primary={title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {body}
                </Typography>
              </React.Fragment>
            }
          />
        </Grid>
      </ListItem>

      <Divider variant="inset" component="li" />
    </>
  );
}
