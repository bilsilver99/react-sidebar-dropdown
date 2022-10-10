import "./All.css";
import React, { Redirect } from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Pricing, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Pricing";
import { Overview, Scheduling, Users } from "./pages/Overview";
import { Team } from "./pages/Team";
//import LoginManager from "./components/LoginManager";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [authorized, setauthorized] = useState("N");
  const [username, setusername] = useState("Please Log In");
  const [unavailable, setunavailable] = useState("active");

  const authFunction = (childAuthorized, childclientname, childunavailable) => {
    setauthorized(childAuthorized);
    setusername(childclientname);
    setunavailable(childunavailable);
  };
  const clearLogin = () => {
    setauthorized("N");
    setusername("Please Log in");
  };

  //const clearLogin = () => {
  //  setauthorized("N");
  //  setusername("(Please Log in)");
  //};

  return (
    <div className="body">
      <Header
        username={username}
        authorized={authorized}
        clearLogin={clearLogin}
        authFunction={authFunction}
      />
      {unavailable === "Y" && (
        <div className="container">
          <div className="menu-container">
            <h1 className="unavailable">
              the system is not currently available
            </h1>
          </div>
        </div>
      )}
      {authorized === "Y" && (
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/team" exact component={Team} />
            <Route path="/overview" exact component={Overview} />
            <Route path="/overview" exact component={Users} />
            <Route path="/overview" exact component={Scheduling} />
            <Route path="/pricing" exact component={Pricing} />
            <Route path="/pricing/reports1" exact component={ReportsOne} />
            <Route path="/pricing/reports2" exact component={ReportsTwo} />
            <Route path="/pricing/reports3" exact component={ReportsThree} />
            <Route path="/clearLogin" render={(props) => clearLogin()} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;

// {authorized !== "Y" && <Welcome />}

//{authorized !== "Y" && <LoginManager authFunction={authFunction} />}

// <Route path="/" exact component={Welcome} />
// <Route path="/overview" exact component={Overview} />
// <Route path="/overview" exact component={Users} />
// <Route path="/overview" exact component={Scheduling} />
// <Route path="/reports" exact component={Reports} />
// <Route path="/reports/reports1" exact component={ReportsOne} />
// <Route path="/reports/reports2" exact component={ReportsTwo} />
// <Route path="/reports/reports3" exact component={ReportsThree} />
// <Route path="/team" element={Team} />
// <Route path="/clearLogin" render={(props) => clearLogin()} />

//<Route exact path="/">

//</Route>
