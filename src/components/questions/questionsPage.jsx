import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

import {
  getQuestionsAction,
  getQuestionsByCategoryAction,
} from "../../redux/actions/questionsActions";
import { PageFilters } from "../filters";
import { QuestionSkeleton } from "./questionSkeleton";
import { QuestionItem } from "./questionItem";

// pageable:
// offset: 0
// pageNumber: 0
// pageSize: 4
// paged: true
// sort: {unsorted: false, sorted: true, empty: false}
// unpaged: false

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export function QuestionsPage() {
  const { content, pageable, totalPages, pending } = useSelector(
    (state) => state.questions
  );
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const { search } = useLocation();
  const styles = useStyles();

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
      dispatch(getQuestionsByCategoryAction(params.categoryId, search));
    } else {
      dispatch(getQuestionsAction(search));
    }
  }, [dispatch, search, handleSetQuery, params.categoryId]);

  const renderQuestions = () => {
    if (pending)
      return Array(6)
        .fill()
        .map((_, i) => <QuestionSkeleton key={i} />);

    return content?.map((question, i) => (
      <QuestionItem key={i} {...question} />
    ));
  };

  return (
    <Container maxWidth="md">
      <Grid container direction="column">
        <Box my={2} display="flex">
          <Typography variant="h4">Questions</Typography>
        </Box>
        <List className={styles.root}>{renderQuestions()}</List>
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
