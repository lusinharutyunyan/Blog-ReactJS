import React from "react";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));

export default function CreatePost() {
  const classes = useStyles();
  const styles = {
    marginLeft: "400px",
    width: "600px",
  };
  return (
    <div className='container'>
      <Box component='div' display='block' style={styles}>
        <Box component='h3'>Tell us your story!</Box>

        <TextField
          id='standard-basic'
          label='Title*'
          style={{ width: "600px" }}
        />
        <TextField
          id='standard-textarea'
          label='Multiline Placeholder'
          placeholder='Placeholder'
          multiline
          rows={12}
          rowsMax={12}
          fullWidth
          style={{ display: "block" }}
        />
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          style={{ borderRadius: "20em",  }}
          endIcon={<Icon>done</Icon>}></Button>
      </Box>
    </div>
  );
}
