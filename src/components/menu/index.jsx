import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";

import { MenuItems } from "./items";
import useStyles from "./styles";

export function Menu() {
  const styles = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(styles.appBar, open && styles.appBarShift)}
      >
        <Toolbar className={styles.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            className={clsx(styles.menuButton, open && styles.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={styles.title}
          >
            Askr
          </Typography>
          <Button color="inherit" variant="outlined">
            Register
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(styles.drawerPaper, !open && styles.drawerPaperClose),
        }}
        open={open}
      >
        <div className={styles.toolbarIcon}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <MenuItems />
        </List>
      </Drawer>
    </>
  );
}
