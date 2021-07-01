import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";

const renderRole = (name) => {
  switch (name) {
    case "ROLE_ADMIN":
      return <Chip color="primary" label={"Admin"} />;
    case "ROLE_MODERATOR":
      return <Chip color="secondary" label={"Moderator"} />;
    case "ROLE_USER":
    default:
      return <Chip label={"User"} />;
  }
};

export function UserItem({ id, username, email, roles }) {
  return (
    <Grid key={id} item xs={6} sm={4}>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar aria-label="user">
              <img
                src={`https://robohash.org/${username}`}
                alt="profile pic"
                width={60}
                height={60}
              />
            </Avatar>
          }
          title={<Typography variant="h5">{username}</Typography>}
          subheader={<Typography>{email}</Typography>}
        />
        <CardContent>
          <Grid container spacing={1}>
            {roles.map(({ name }, i) => (
              <Grid key={i} item>
                {renderRole(name)}
              </Grid>
            ))}
          </Grid>
        </CardContent>
        <CardActions>
          <Button color="primary" size="small">
            View Questions
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}