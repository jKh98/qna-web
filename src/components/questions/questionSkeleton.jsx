import React from "react";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

export function QuestionSkeleton() {
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={1}>
          <Skeleton variant="circle" width={60} height={60} />
        </Grid>
        <Grid item xs={11}>
          <Skeleton width="60%" height="40%" />
          <Skeleton width="80%" />
          <Skeleton width="40%" />
          <br />
        </Grid>
      </Grid>
    </Grid>
  );
}
