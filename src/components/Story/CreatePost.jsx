import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

export default function CreatePost() {
  const classes = useStyles();
  let history = useHistory();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [store, setStore] = useState(
    localStorage.getItem("post") ? JSON.parse(localStorage.getItem("post")) : []
  );

  const styles = {
    marginLeft: "400px",
    width: "600px",
  };

  const onSubmit = () => {
    localStorage.setItem(
      "post",
      JSON.stringify([
        ...store,
        {
          title: title,
          content: content,
          name: JSON.parse(localStorage.getItem("auth")).name,
        },
      ])
    );

    history.push("../Posts");
  };

  return (
    <div className='container'>
      <Box component='div' display='block' style={styles}>
        <Box component='h3'>Tell us your story!</Box>

        <TextField
          id='standard-basic'
          label='Title*'
          style={{ width: "600px" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id='standard-textarea'
          label='Content*'
          multiline
          rows={12}
          rowsMax={12}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          style={{ display: "block" }}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          style={{ borderRadius: "20em" }}
          endIcon={<Icon>done</Icon>}
          onClick={() => {
            onSubmit();
          }}></Button>
      </Box>
    </div>
  );
}
