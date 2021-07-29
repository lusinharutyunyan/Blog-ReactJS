import React from "react";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import CreatePost from "../Story/CreatePost";
import { Button } from "@material-ui/core";

export default function YourPost({ data }) {
  let history = useHistory();
 
  const posts = {
    boxShadow: "2px 2px 2px 2px lightgray",
    width: "50em",
    height: "10em",
    textAlign: "center",
    marginLeft: "18em",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "2em",
    flexDirection: "column",
  };
  const btnStyle = {
    color: "crimson",
    marginLeft: "48em",
  };
  const date = ("" + new Date()).substr(4, 11);

  return (
  
      <Box component='div' style={posts}>
        <Box component='h4'>{data.title}</Box>
        <Box component='span' style={{ color: "lightgray" }}>
          {date} by {data.name}
        </Box>
        <Box component='p'>{data.content}...</Box>
        <Button style={btnStyle}>LEARN MORE</Button>
      </Box>
 
  );
}
