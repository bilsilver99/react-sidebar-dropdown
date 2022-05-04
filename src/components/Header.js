import React from "react";
import logo from "../images/iron.webp";
import styled from "styled-components";

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  align-items: center;
  background-color: #67acf9;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
  font-size: 2rem;
`;
const Header = () => {
  return (
    <HeaderBar>
      <img src={logo} alt="Iron Reservations" height="60" />
      &nbsp; &nbsp;Iron Reservation Management
    </HeaderBar>
  );
};
export default Header;
//<HeaderBar>
