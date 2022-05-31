import React, { useRef } from "react";
import "./loginbutton.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import LoginManager from "./LoginManager";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function Loginbutton(props) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  //const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const showuserdata = () => {};

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>{props.username}</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
        {props.authorized === "N" && (
          <LoginManager authFunction={props.authFunction} />
        )}
        {props.authorized === "Y" && (
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <button className="remove_button_css" onClick={showuserdata}>
                  Your Profile
                </button>
              </li>
              <li>
                <button
                  className="remove_button_css"
                  onClick={props.clearLogin}
                >
                  Logout
                </button>
              </li>
              <li>
                <button className="remove_button_css">Holder</button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
