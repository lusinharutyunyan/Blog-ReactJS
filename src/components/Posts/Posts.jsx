import React, { useState } from "react";
import Header from "./HeaderPosts";
import YourPost from "./PostPage";

export default function Posts() {
  const data = localStorage.getItem("post")
    ? JSON.parse(localStorage.getItem("post"))
    : [];

  const myPosts = data.map((item) => {
    return <YourPost data={item} /> ;
  });
  return (
    <div>
      <Header />
      {myPosts}
    </div>
  );
}
