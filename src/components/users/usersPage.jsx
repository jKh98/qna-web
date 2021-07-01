import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import Container from "@material-ui/core/Container";

import { getUsersAction } from "../../redux/actions/usersActions";
import { PageFilters } from "../filters";

// pageable:
// offset: 0
// pageNumber: 0
// pageSize: 4
// paged: true
// sort: {unsorted: false, sorted: true, empty: false}
// unpaged: false

export function UsersPage() {
  const { content, pageable, totalPages, pending } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();

  const handleSetQuery = useCallback(
    (query) => {
      history.push(`/users?${query}`);
    },
    [history]
  );

  useEffect(() => {
    dispatch(getUsersAction(search));
  }, [dispatch, search, handleSetQuery]);

  const renderUsers = () => {
    if (pending)
      return Array(6)
        .fill()
        .map((_, i) => (
          <Grid key={i} item xs={6} sm={4}>
            <Skeleton variant="circle" width={60} height={60} />
            <Skeleton width="60%" height="40%" />
            <Skeleton />
            <Skeleton width="40%" />
            <br />
            <br />
            <br />
          </Grid>
        ));

    return content?.map(({ id, username, email }) => (
      <Grid key={id} item xs={6} sm={3}>
        <Card variant="outlined">
          <img
            src={`https://robohash.org/${username}`}
            alt="profile pic"
            width={80}
            height={80}
          />
          <CardContent>
            <Typography variant="h5">{username}</Typography>
            <Typography>{email}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Explore</Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  return (
    <Container maxWidth="md">
      <Grid container direction="column">
        <Box my={2} display="flex">
          <Typography variant="h4">Users</Typography>
        </Box>
        <Grid container spacing={1}>
          {renderUsers()}
        </Grid>
        <br />
        <br />
        <PageFilters
          size={pageable?.pageSize || 5}
          number={pageable?.pageNumber + 1}
          total={totalPages}
        />
      </Grid>
    </Container>
  );
}
