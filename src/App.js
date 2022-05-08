import "./App.css";
import React from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import { Overview, Scheduling, Users } from "./pages/Overview";
import Team from "./pages/Team";
import LoginManager from "./components/login.component";
import Header from "./components/Header";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [authorized, setauthorized] = useState("N");
  const [username, setusername] = useState("(Please Log in)");

  const authFunction = (childAuthorized, childclientname) => {
    setauthorized(childAuthorized);
    setusername(childclientname);
  };
  const clearLogin = () => {
    setauthorized("N");
    setusername("(Please Log in)");
  };

  //const clearLogin = () => {
  //  setauthorized("N");
  //  setusername("(Please Log in)");
  //};

  return (
    <body className="body">
      <Header signedusername={username} />
      {authorized !== "Y" && <LoginManager authFunction={authFunction} />}
      {authorized === "Y" && (
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/overview" exact component={Overview} />
            <Route path="/overview" exact component={Users} />
            <Route path="/overview" exact component={Scheduling} />
            <Route path="/reports" exact component={Reports} />
            <Route path="/reports/reports1" exact component={ReportsOne} />
            <Route path="/reports/reports2" exact component={ReportsTwo} />
            <Route path="/reports/reports3" exact component={ReportsThree} />
            <Route path="/team" exact component={Team} />
            <Route path="/clearLogin" render={(props) => clearLogin()} />
          </Switch>
        </Router>
      )}
    </body>
  );
}

export default App;

//  <Router>
// <Sidebar />
// <Switch>
//   <Route path="/overview" exact component={Overview} />
//   <Route path="/overview" exact component={Users} />
//   <Route path="/overview" exact component={Scheduling} />
//   <Route path="/reports" exact component={Reports} />
//   <Route path="/reports/reports1" exact component={ReportsOne} />
//   <Route path="/reports/reports2" exact component={ReportsTwo} />
//   <Route path="/reports/reports3" exact component={ReportsThree} />
//   <Route path="/team" exact component={Team} />
// </Switch>
// </Router>
