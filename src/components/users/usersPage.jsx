import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import { getUsersAction } from "../../redux/actions/usersActions";
import { PageFilters } from "../filters";
import { UserSkeleton } from "./userSkeleton";
import { UserItem } from "./userItem";
import { Status } from "../status/status";

export function UsersPage() {
  const {
    content,
    pageable,
    totalPages,
    pending,
    numberOfElements,
    error,
    success,
  } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(getUsersAction(search));
  }, [dispatch, search]);

  const renderUsers = () => {
    if (pending)
      return Array(6)
        .fill()
        .map((_, i) => <UserSkeleton key={i} />);

    return content?.map((user, i) => <UserItem key={i} {...user} />);
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
        {!!numberOfElements && (
          <PageFilters
            size={pageable?.pageSize || 5}
            number={pageable?.pageNumber + 1}
            total={totalPages}
          />
        )}
      </Grid>
      <Status message={error} type={"error"} />
      <Status message={success} type={"success"} />
    </Container>
  );
}
