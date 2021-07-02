import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { getQuestionByIdAction } from "../../redux/actions/questionsActions";
import { PageFilters } from "../filters";
import { AnswerSkeleton } from "./answerSkeleton";
import { AnswerItem } from "./answerItem";
import { getAnswersByQuestionAction } from "../../redux/actions/answersActions";
import { QuestionMainSkeleton } from "../questions";
import { Status } from "../status/status";

// pageable:
// offset: 0
// pageNumber: 0
// pageSize: 4
// paged: true
// sort: {unsorted: false, sorted: true, empty: false}
// unpaged: false

export function AnswersPage() {
  const {
    content,
    pageable,
    totalPages,
    numberOfElements,
    selectedQuestion,
    pending,
    error,
    success,
  } = useSelector((state) => state.answers);

  const dispatch = useDispatch();
  const { questionId } = useParams();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(getQuestionByIdAction(questionId));
    dispatch(getAnswersByQuestionAction(questionId, search));
  }, [dispatch, search, questionId]);

  const handleAddAnswer = (event) => {
    event.preventDefault();

    const data = {
      text: event.target.title.text,
    };

    // dispatch(handleAddAnswer(selectedQuestion?.id, data));
  };

  const renderQuestion = () => {
    if (pending) return <QuestionMainSkeleton />;
    return (
      <Grid item xs={12} sm={12}>
        <Typography variant="body2" color="textSecondary">
          {selectedQuestion?.title}
        </Typography>
        <Box my={1} display="flex">
          <Typography variant="h5">{selectedQuestion?.title}</Typography>
        </Box>
        <Box my={2} display="flex">
          <Typography variant="body1">{selectedQuestion?.body}</Typography>
        </Box>
      </Grid>
    );
  };

  const renderAnswers = () => {
    if (pending)
      return Array(6)
        .fill()
        .map((_, i) => <AnswerSkeleton key={i} />);

    return content?.map((question, i) => <AnswerItem key={i} {...question} />);
  };

  return (
    <Container maxWidth="lg">
      <Grid container direction="column">
        <Card variant="outlined">
          <CardContent>
            {renderQuestion()}
            <form onSubmit={handleAddAnswer}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="text"
                label="What are your thoughts"
                type="text"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
              <Box>
                <Button type="submit" color="primary" variant="contained">
                  Answer!
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
        <Box my={2} display="flex">
          <Typography variant="h6" color="textSecondary">
            {!!numberOfElements
              ? "Other answers"
              : "There are no answers for this questions yet."}
          </Typography>
        </Box>
        <Grid item xs={12} sm={12}>
          <List>{renderAnswers()}</List>
        </Grid>
        <Box my={2} display="flex">
          {!!numberOfElements && (
            <PageFilters
              size={pageable?.pageSize || 5}
              number={pageable?.pageNumber + 1}
              total={totalPages}
            />
          )}
        </Box>
      </Grid>
      <Status message={error} type={"error"} />
      <Status message={success} type={"success"} />
    </Container>
  );
}
