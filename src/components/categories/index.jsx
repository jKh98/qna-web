import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";

import { getCategoriesAction } from "../../redux/actions/categoriesActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function CategoriesPage() {
  const { content, pending } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  if (pending)
    return (
      <Box pt={0.5}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    );

  return (
    <List className={classes.root}>
      {content?.map(({ id, name, description }) => (
        <ListItem key={id}>
          <ListItemText primary={name} secondary={description} />
        </ListItem>
      ))}
    </List>
  );
}
