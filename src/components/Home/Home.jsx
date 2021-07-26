import React from "react";
import reactDom from "react-dom";
import ButtonAppBar from "./Header";
import Page from "./Page";

function Home() {
  return (
    <div className='Home'>
      <ButtonAppBar />
      <Page />
    </div>
  );
}

export default Home;
