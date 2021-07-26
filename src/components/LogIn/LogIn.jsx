import React from "react";
import { Redirect } from "react-router";
import ButtonAppBar from "../Home/Header";
import Inputs from "./LogInBody";

function LogIn({ authorized }) {
  if (!authorized) {
    return <Redirect to='/home' />;
  }
  return (
    <div className='container'>
      <ButtonAppBar />,
      <Inputs />
    </div>
  );
}
export default LogIn;
