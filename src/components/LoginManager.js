import React from "react";
//import { useHistory } from "react-router-dom";
import { login } from "./MyOwnServices";
//import styled from "styled-components";
import "./login.css";

function LoginManager(props) {
  const [authorized, setStatus] = React.useState("N");
  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  //const history = useHistory();

  const loginManagerDone = (e) => {
    e.preventDefault();
    login(username, password).then((response) => {
      //history.push("/Sidebar");
      props.authFunction(
        response.authorized,
        response.clientname,
        response.unavailable
      );
      setStatus(response.authorized);
    });
  };
  const usernameChangeHandler = (event) => {
    setusername(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setpassword(event.target.value);
  };

  return (
    <div className="main_box">
      {authorized === "N" && (
        <form className="main_box--main" onSubmit={loginManagerDone}>
          <div className="main_box--header">
            <h2>Sign In</h2>
            <div className="main_box--main--name">
              Username
              <input
                className="main_box--main--login"
                placeholder=""
                onChange={usernameChangeHandler}
                type="text"
              />
            </div>
            <div className="main_box--main--name">
              Password&nbsp;
              <input
                className="main_box--main--login"
                onChange={passwordChangeHandler}
              />
            </div>
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginManager;

// {/* <p className="forgot-password text-right">
// Forgot <a href="#">password?</a>
// </p>{" "} */}
