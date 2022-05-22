import React from "react";
import logo from "../images/iron.webp";
//import styled from "styled-components";
import "./header.css";
import Loginbutton from "./Loginbutton";

const Header = (props) => {
  return (
    <div className="HeaderBar">
      <div className="logo">
        <img src={logo} alt="Iron Reservations " height="60" />
      </div>
      <div className="headername">Iron Reservation Management System</div>
      <Loginbutton
        username={props.username}
        authorized={props.authorized}
        clearLogin={props.clearLogin}
      />
    </div>
  );
};
export default Header;
//<HeaderBar>

//<div className="loginname">{props.signedusername}</div>
//<div className="loginname">&nbsp; &nbsp;{props.signedusername}</div>
