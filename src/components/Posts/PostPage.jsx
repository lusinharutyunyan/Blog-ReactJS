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
  const titles = {
    width: "50em",
    display: "flex",
    alignItems: "center",
  };
  const texts = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    marginLeft: "10px",
  };
  const round = {
    width: "40px",
    height: "40px",
    backgroundColor: "crimson",
    borderRadius: "50%",
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    fontSize:"20px"

  };
  const date = ("" + new Date()).substr(4, 11);

  return (
    <Box component='div' style={posts}>
      <Box component='div' style={titles}>
        <Box component='div'>
          <Box component='div' style={round}>
            {data.name.charAt(0).toUpperCase()}
          </Box>
        </Box>
        <Box component='div' style={texts}>
          <Box component='h4'>{data.title}</Box>
          <Box component='span' style={{ color: "lightgray" }}>
            {date} by {data.name}
          </Box>
        </Box>
      </Box>

      <Box component='p'>{data.content}...</Box>
      <Button style={btnStyle}>LEARN MORE</Button>
    </Box>
  );
}
