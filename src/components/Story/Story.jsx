import React from "react";
import { Box } from "@material-ui/core";
import CreatePost from "./CreatePost";
import Header from "../Posts/HeaderPosts";

export default function Story() {
  return (
    <div>
      <Header />
      <CreatePost />
    </div>
  );
}
