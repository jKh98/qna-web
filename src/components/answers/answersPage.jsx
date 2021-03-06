import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";

import { getQuestionByIdAction } from "../../redux/actions/questionsActions";
import { PageFilters } from "../filters";
import { AnswerSkeleton } from "./answerSkeleton";
import { AnswerItem } from "./answerItem";
import {
  addAnswerAction,
  getAnswersByQuestionAction,
} from "../../redux/actions/answersActions";
import { QuestionMainSkeleton } from "../questions";
import { Status } from "../status/status";
import { QuestionMainItem } from "../questions";
import { savePreAuthPathAction } from "../../redux/actions/authActions";

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
  const { token } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const history = useHistory();
  const { questionId } = useParams();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(getQuestionByIdAction(questionId));
    dispatch(getAnswersByQuestionAction(questionId, search));
  }, [dispatch, search, questionId]);

  const handleAddAnswer = (event) => {
    event.preventDefault();

    if (!token) {
      dispatch(savePreAuthPathAction());
      history.push("/login");
      return;
    }

    const data = {
      text: event.target.text.value,
    };

    dispatch(addAnswerAction(selectedQuestion?.id, data));
    window.location.reload();
  };

  const renderQuestion = () => {
    if (pending || !selectedQuestion) return <QuestionMainSkeleton />;
    return <QuestionMainItem {...selectedQuestion} />;
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
                <Button
                  disabled={pending}
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  {pending ? (
                    <CircularProgress size={14} />
                  ) : token ? (
                    "Answer!"
                  ) : (
                    "Login to Answer"
                  )}
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
