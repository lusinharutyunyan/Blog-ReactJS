import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import CreatePost from "../Story/CreatePost";

export default function YourPost({ data }) {
  let history = useHistory();
  const styles = {
    textAlign: "center",
  };
  const posts = {
    boxShadow: "2px 2px 2px 2px lightgray",
    width: "55em",
    height: "12em",
    textAlign: "center",
    marginLeft: "15em",
    display: "flex",
    justifyContent: "flex-start",
    alignItems :"flex-start",
    padding :"2em",
    flexDirection: "column",
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
      <Box component='div' style={posts}>
        <Box component='h2'>{data.title}</Box>
        <Box component='h3'>{data.content}</Box>
        <Box component='h4'>{data.name}</Box>
      </Box>
    </Box>
  );
}
