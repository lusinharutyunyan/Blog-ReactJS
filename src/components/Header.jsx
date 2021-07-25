import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import "./Header.css";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='headerTxt'>
          <h2>
            {" "}
            <a>Blog</a>
          </h2>
          <a className='post' href='#'>
            <li>Create Post</li>
          </a>
          <a className='logOut' href="#">
            <li>Log Out</li>
          </a>
        </div>
      </div>
    );
  }
}
