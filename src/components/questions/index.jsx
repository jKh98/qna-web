import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import Pagination from "@material-ui/lab/Pagination";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import {
  getQuestionsAction,
  getQuestionsByCategoryAction,
} from "../../redux/actions/questionsActions";

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
    maxWidth: 360,
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
    if (!search) handleSetQuery("page=0&size=5");

    if (params.categoryId) {
      dispatch(getQuestionsByCategoryAction(params.categoryId, search));
    } else {
      dispatch(getQuestionsAction(search));
    }
  }, [dispatch, search, handleSetQuery, params.categoryId]);

  const onSelectPageNumber = (_e, number) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", number - 1);
    handleSetQuery(searchParams.toString());
  };

  const onSelectPageSize = (e) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("size", e.target.value);
    searchParams.set("page", 0);
    handleSetQuery(searchParams.toString());
  };

  const renderQuestions = () => {
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

    return content?.map(({ id, title, body }) => (
      <>
        <ListItem key={id} alignItems="flex-start">
          <ListItemText
            primary={title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {body}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
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
        <br />
        <Grid container alignItems="baseline">
          <FormControl variant="filled" size="small">
            <Select
              variant="outlined"
              value={pageable?.pageSize}
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
