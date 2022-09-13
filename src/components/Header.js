import React from "react";
import logo from "../images/iron.webp";
//import styled from "styled-components";
import "./header.css";
//import Loginbutton from "./Loginbutton";
import LoginManager from "./LoginManager";

const Header = (props) => {
  return (
    <>
      <div className="HeaderBar">
        <div className="logo">
          <img src={logo} alt="Iron Reservations v1.2" height="60" />
        </div>
        <div className="headername">Iron Systems</div>
        {props.authorized === "Y" && (
          <div className="headername">Welcome: &nbsp; {props.username}</div>
        )}
      </div>
      <LoginManager
        username={props.username}
        authorized={props.authorized}
        clearLogin={props.clearLogin}
        authFunction={props.authFunction}
      />
    </>
  );
};
export default Header;
//<HeaderBar>

//<div className="loginname">{props.signedusername}</div>
//<div className="loginname">&nbsp; &nbsp;{props.signedusername}</div>
