import React from "react";
import "./Page.css";

export default class Page extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='bodyTxt'>
        <div>
          {" "}
          <strong className='firstTxt'>There is no post on web-site.</strong>
        </div>
        <div>
          <strong className='secondTxt'>
            <a href='#'>Log In</a> and be our first story teller
          </strong>
        </div>
      </div>
    );
  }
}
