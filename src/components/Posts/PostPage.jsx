import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function YourPost() {
  let history = useHistory();
  const styles = {
    textAlign: "center",
  };
  return (
    <Box component='div' style={styles}>
      <Box component='h2'>There is no post on web-site</Box>
      <Box component='h1'>
        You have logged in,{" "}
        <Link
          onClick={() => {
            history.push("/story");
          }}>
          share your story
        </Link>
      </Box>
    </Box>
  );
}
