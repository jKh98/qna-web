import React, { useEffect } from "react";
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
import CardMedia from "@material-ui/core/CardMedia";

import { getCategoriesAction } from "../../redux/actions/categoriesActions";
import { PageFilters } from "../filters";

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

  useEffect(() => {
    dispatch(getCategoriesAction(search));
  }, [dispatch, search]);

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
        <PageFilters
          size={pageable?.pageSize || 5}
          number={pageable?.pageNumber + 1}
          total={totalPages}
        />
      </Grid>
    </Container>
  );
}
