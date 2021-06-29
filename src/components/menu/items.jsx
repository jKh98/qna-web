import React from "react";
import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import CategoryIcon from "@material-ui/icons/Category";
import PeopleIcon from "@material-ui/icons/People";

export const MenuItems = () => {
  const history = useHistory();

  return (
    <div>
      <ListItem button onClick={() => history.push("/questions")}>
        <ListItemIcon>
          <QuestionAnswerIcon />
        </ListItemIcon>
        <ListItemText primary="Questions" />
      </ListItem>
      <ListItem button onClick={() => history.push("/categories")}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItem>
      <ListItem button onClick={() => history.push("/users")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
    </div>
  );
};
