import React from "react";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

export function CategorySkeleton() {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Skeleton width="60%" height="40%" />
      <Skeleton />
      <Skeleton />
      <Skeleton width="40%" />
      <br />
    </Grid>
  );
}
