import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Story from "../Story/Story";
import { useState } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields() {
  const [value, setValue] = React.useState("");
  const [password, setPassword] = React.useState("");

  let history = useHistory();
  const classes = useStyles();
  const styles = {
    marginLeft: "400px",
  };
  const onSubmit = () => {
    localStorage.setItem(
      "auth",
      JSON.stringify({ name: value, password: password })
    );
    history.push("../Posts");
  };

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <Box component='div' style={styles}>
        <Box component='h1'>Log In </Box>
        <TextField
          id='standard-basic'
          label='Name*'
          style={{ width: "500px" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <TextField
          id='standard-basic'
          label='Password*'
          style={{ width: "500px" }}
          value={password}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box component='div' mt={5}>
          {" "}
          <Button
            variant='contained'
            color='primary'
            style={{ width: "500px" }}
            disabled={!(value && password)}
            onClick={() => {
              onSubmit();
            }}>
            Log In
          </Button>
        </Box>
      </Box>
    </form>
  );
}
