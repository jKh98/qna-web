import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

export function CategoryItem({ id, name, image, description, actionsSection }) {
  return (
    <Grid item xs={6} sm={4}>
      <Card variant="outlined">
        <CardMedia image={image} title={name} style={{ height: 160 }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        {actionsSection && <CardActions>{actionsSection}</CardActions>}
      </Card>
    </Grid>
  );
}
