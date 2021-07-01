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
import Pagination from "@material-ui/lab/Pagination";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

import { getCategoriesAction } from "../../redux/actions/categoriesActions";
import { CardMedia } from "@material-ui/core";

// pageable:
// offset: 0
// pageNumber: 0
// pageSize: 4
// paged: true
// sort: {unsorted: false, sorted: true, empty: false}
// unpaged: false

export function CategoriesPage() {
  const { content, pageable, totalPages, pending } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();

  const handleSetQuery = useCallback(
    (query) => {
      history.push(`/categories?${query}`);
    },
    [history]
  );

  useEffect(() => {
    if (!search) handleSetQuery("page=0&size=5");

    dispatch(getCategoriesAction(search));
  }, [dispatch, search, handleSetQuery]);

  const onSelectPageNumber = (_e, number) => {
    const params = new URLSearchParams(search);
    params.set("page", number - 1);
    handleSetQuery(params.toString());
  };

  const onSelectPageSize = (e) => {
    const params = new URLSearchParams(search);
    params.set("size", e.target.value);
    handleSetQuery(params.toString());
  };

  const renderCategories = () => {
    if (pending)
      return Array(6)
        .fill()
        .map((_, i) => (
          <Grid key={i} item xs={6} sm={4}>
            <Skeleton width="60%" height="40%" />
            <Skeleton />
            <Skeleton />
            <Skeleton width="40%" />
            <br />
          </Grid>
        ));

    return content?.map(({ id, name, description, image }) => (
      <Grid key={id} item xs={6} sm={4}>
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
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => history.push(`/categories/${id}/questions`)}
            >
              Explore
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  return (
    <Container maxWidth="md">
      <Grid container direction="column">
        <Box my={2} display="flex">
          <Typography variant="h4">Categories</Typography>
        </Box>
        <Grid container spacing={1}>
          {renderCategories()}
        </Grid>
        <br />
        <br />
        <Grid container alignItems="baseline">
          <FormControl variant="filled" size="small">
            <Select
              variant="outlined"
              value={pageable?.pageSize ?? 5}
              onChange={onSelectPageSize}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>
          <Pagination
            color="secondary"
            count={totalPages}
            page={pageable?.pageNumber + 1}
            onChange={onSelectPageNumber}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
