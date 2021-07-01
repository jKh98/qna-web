import React from "react";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

export function UserSkeleton() {
  return (
    <Grid item xs={6} sm={4}>
      <Skeleton variant="circle" width={60} height={60} />
      <Skeleton width="60%" height="40%" />
      <Skeleton />
      <Skeleton width="40%" />
      <br />
      <br />
      <br />
    </Grid>
  );
}
