import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import { getCategoriesAction } from "../../redux/actions/categoriesActions";
import { PageFilters } from "../filters";
import { CategoryItem } from "./categoryItem";
import { CategorySkeleton } from "./categorySkeleton";

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
        .map((_, i) => <CategorySkeleton key={i} />);

    return content?.map((category, i) => (
      <CategoryItem
        key={i}
        {...category}
        onSelect={() => history.push(`/categories/${category.id}/questions`)}
      />
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
        <PageFilters
          size={pageable?.pageSize || 5}
          number={pageable?.pageNumber + 1}
          total={totalPages}
        />
      </Grid>
    </Container>
  );
}
