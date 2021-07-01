import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ContactSupport from "@material-ui/icons/ContactSupport";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MenuItem from "@material-ui/core/MenuItem";
import MuiMenu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";

import { MenuItems } from "./items";
import useStyles from "./styles";

export function Menu() {
  const { token, username } = useSelector((state) => state.login);
  const [isDrawerOpen, setDrawerOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const isAnchorOpen = Boolean(anchorEl);
  const history = useHistory();
  const styles = useStyles();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(styles.appBar, isDrawerOpen && styles.appBarShift)}
      >
        <Toolbar className={styles.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDrawerOpen(true)}
            className={clsx(
              styles.menuButton,
              isDrawerOpen && styles.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h4"
            variant="h4"
            color="inherit"
            noWrap
            className={styles.title}
          >
            <ContactSupport />
            Askr
          </Typography>
          {!!token ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar aria-label="user">
                  <img
                    src={`https://robohash.org/${username}`}
                    alt="profile pic"
                    width={60}
                    height={60}
                  />
                </Avatar>
              </IconButton>
              <MuiMenu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={isAnchorOpen}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </MuiMenu>
            </div>
          ) : (
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
            >
              <Button color="inherit" onClick={() => history.push("/login")}>
                Login
              </Button>
              <Button
                color="secondary"
                onClick={() => history.push("/register")}
              >
                Register
              </Button>
            </ButtonGroup>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(
            styles.drawerPaper,
            !isDrawerOpen && styles.drawerPaperClose
          ),
        }}
        open={isDrawerOpen}
      >
        <div className={styles.toolbarIcon}>
          <IconButton onClick={() => setDrawerOpen(false)}>
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
