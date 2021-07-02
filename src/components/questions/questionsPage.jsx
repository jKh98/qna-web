import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

import {
  addQuestionAction,
  getQuestionsAction,
  getQuestionsByCategoryAction,
} from "../../redux/actions/questionsActions";
import { PageFilters } from "../filters";
import { QuestionSkeleton } from "./questionSkeleton";
import { QuestionItem } from "./questionItem";
import { getCategoryByIdAction } from "../../redux/actions/categoriesActions";
import { CategoryItem } from "../categories/categoryItem";

import { QuestionModal } from "./questionModal";

// pageable:
// offset: 0
// pageNumber: 0
// pageSize: 4
// paged: true
// sort: {unsorted: false, sorted: true, empty: false}
// unpaged: false

export function QuestionsPage() {
  const {
    content,
    pageable,
    totalPages,
    selectedCategory,
    pending,
    error,
    success,
  } = useSelector((state) => state.questions);

  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { search, pathname } = useLocation();
  const [isVisible, setVisible] = useState(false);

  const handleSetQuery = useCallback(
    (query) => {
      if (params?.categoryId) {
        history.push(`/categories/${params.categoryId}/questions?${query}`);
      } else {
        history.push(`/questions?${query}`);
      }
    },
    [history, params]
  );

  useEffect(() => {
    if (params.categoryId) {
      dispatch(getCategoryByIdAction(params.categoryId));
      dispatch(getQuestionsByCategoryAction(params.categoryId, search));
    } else {
      dispatch(getQuestionsAction(search));
    }
  }, [dispatch, search, handleSetQuery, params.categoryId]);

  const handleAddQuestion = (event) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      body: event.target.body.value,
    };

    dispatch(addQuestionAction(selectedCategory?.id, data));
    setVisible(false);
  };

  const renderQuestions = () => {
    if (pending)
      return Array(6)
        .fill()
        .map((_, i) => <QuestionSkeleton key={i} />);

    return content?.map((question, i) => (
      <QuestionItem
        key={i}
        {...question}
        shouldReferenceCategory={!pathname.includes("categories")}
      />
    ));
  };

  const renderCategoryComponent = () =>
    !!selectedCategory && (
      <CategoryItem
        {...selectedCategory}
        actionsSection={
          <Button
            color="primary"
            variant="contained"
            onClick={() => setVisible(true)}
          >
            Ask!
          </Button>
        }
      />
    );

  const renderAlert = () => {
    if (!!error)
      return (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      );
    else if (!!success)
      return (
        <Alert variant="filled" severity="success">
          {success}
        </Alert>
      );
  };

  return (
    <Container maxWidth="lg">
      <Grid container direction="column">
        <Box my={2} display="flex">
          <Typography variant="h4">
            {!!selectedCategory
              ? `Questions in ${selectedCategory?.name}`
              : "Feed"}
          </Typography>
        </Box>
        <Grid container direction="row" justify="space-between">
          <Grid item xs={12} sm={selectedCategory ? 7 : 12}>
            <List>{renderQuestions()}</List>
          </Grid>
          {renderCategoryComponent()}
        </Grid>
        <br />
        <PageFilters
          size={pageable?.pageSize || 5}
          number={pageable?.pageNumber + 1}
          total={totalPages}
        />
      </Grid>

      {isVisible && (
        <QuestionModal
          isVisible={isVisible}
          setVisible={setVisible}
          handleAddQuestion={handleAddQuestion}
        />
      )}

      <Snackbar
        open={!!error}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {renderAlert()}
      </Snackbar>
    </Container>
  );
}
