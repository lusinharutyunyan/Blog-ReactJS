import React from "react";
import { Redirect } from "react-router";
import Header from "../Posts/HeaderPosts";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

export default function LogOut({ authorized }) {
  let history = useHistory();
  const styles = {
    textAlign: "center",
  };

  if (!authorized) {
    return <Redirect to='/home' />;
  }
  return (
    <div className='container'>
      <Header />
      <Box component='div' style={styles}>
        <h1>Log Out</h1>
        <p>Are you sure about leaving us?</p>
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            history.push("../login");
          }}>
          Log out
        </Button>
      </Box>
    </div>
  );
} 
