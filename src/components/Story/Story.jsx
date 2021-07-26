import React from "react";
import { Box } from "@material-ui/core";
import ButtonAppBar from "../Home/Header";
import CreatePost from "./CreatePost";

export default function Story() {
  return (
    <div>
      <ButtonAppBar />
      <CreatePost />
    </div>
  );
}
