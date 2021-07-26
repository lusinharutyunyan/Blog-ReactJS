import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HouseIcon from "@material-ui/icons/House";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  homeIcon: {
    fontSize: 18,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <HouseIcon className={classes.homeIcon} />
            Blog
          </IconButton>
          <Typography variant='h6' className={classes.title} mr={100}>
          </Typography>
          <Box mr={130}>
            <Button color='inherit'>Create Post</Button>
          </Box>
          <Box >
            {" "}
            <Button color='inherit'>Log In</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
