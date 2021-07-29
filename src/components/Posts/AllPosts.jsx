import React from "react";
import { useHistory } from "react-router";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "./HeaderPosts";
// import { Button } from "@material-ui/core";
// import Posts from "./Posts";
// import CreatePost from "../Story/CreatePost";

export default function AllPosts({ data }) {
  let history = useHistory();
  const styles = {
    textAlign: "center",
  };
  return (
    <Box component='div' style={styles}>
      <Header />
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
