import React from "react";
import "./Welcome.css";
import system from "../images/system.jpg";
//import logo from "../images/iron.webp";

function Card() {
  return (
    <div class="card">
      <div class="card-top">
        <h1>Our System</h1>
      </div>
      <p className="ParagraphSpace">
        Our reservation management system is designed to supply easy-to-manage
        low cost subscription and booking management for your business. Whether
        you run a barbershop, a hair salon or a dentist office, we have a
        solution to fit your needs.
      </p>
      <img
        className="systempic"
        src={system}
        alt="Iron Reservations "
        height="200"
        width="200"
      />
    </div>
  );
}
function Card2() {
  return (
    <div class="card">
      <div class="card-top">
        <h1>Scheduling </h1>
      </div>

      <p className="ParagraphSpace">
        We know scheduling and time management can be an arduous process, and
        our system is designed to make the process as simple as possible.
        Templates are pre-installed with defaults which can be tailored to your
        individual requirements. You can set up a general schedule and then
        over-ride the schedule for specific requirements, or leave it as is and
        just press the "Launch" button.
      </p>
    </div>
  );
}
function Card3() {
  return (
    <div class="card">
      <div class="card-top">
        <h1>Support </h1>
      </div>

      <p> something else </p>
    </div>
  );
}
const Welcome = () => {
  return (
    <div className="App">
      <div class="right-container">
        <Card />
        <Card2 />
        <Card3 />
      </div>
    </div>
  );
};

export default Welcome;

// function App() {
//   return (
//   <div className=”App”>
//   <div class=”right-container”>

//   <Card/>
//   <Card/>
//   <Card/>
//   </div>
//   </div>
//   );
//  }
