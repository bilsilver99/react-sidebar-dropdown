import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "./team.css";
import { fetchcompany, submitcompany } from "../components/MyOwnServices";
import {
  //   //Container,
  //   //   Col,
  Form,
  //   //   //Row,
  FormGroup,
  Label,
  Input,
  //   //   //FormText,
  //   //   //FormFeedback,
} from "reactstrap";

//localStorage.setItem("loginmessage", "");

export class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: "",
      CompanyNumber: "",
      Companyname: "",
      AddressLineOne: "",
      AddressLineTwo: "",
      AddressLineThree: "",
      AddressLineFour: "",
      Country: "",
      PostalCode: "",
      PhoneNumber: "",
      EmailAdrress: "",
      Username: "",
      Password: "",
      address: "",
      company: 1,
      done: "N",
    };
  }

  companynameChangeHandler = (event) => {
    this.setState({ companyname: event.target.value });
  };
  AddressOneChangeHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  AddressTwoChangeHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  submitcompanyinput = (event) => {
    // event.preventDefault();
    // submitcompany(this.state.companyname, this.state.address)
    //   .then((response) => {
    //     this.setState({
    //       success: "Y",
    //       done: "Y",
    //     });
    //   })
    //   .catch((error) => console.error);
  };

  componentDidMount() {
    fetchcompany(this.state.company)
      .then((response) => {
        this.setState({
          companyname: response.companyname,
          AddressLineOne: response.returnaddressone,
          AddressLineTwo: response.returnaddresstwo,
        });
      })
      .catch((error) => console.error);
  }

  render() {
    return (
      <div className="main_box--main ">
        <Form className="team_containerdiv" onSubmit={this.submitcompanyinput}>
          <FormGroup>
            <Label>Company Name</Label>
            <Input
              defaultValue={this.state.companyname}
              onChange={this.companynameChangeHandler}
            />
            <Label>Address</Label>
            <Input
              defaultValue={this.state.AddressLineOne}
              onChange={this.AddressOneChangeHandler}
            />
            <Label>Address two</Label>
            <Input
              defaultValue={this.state.AddressLineTwo}
              onChange={this.AddressTwoChangeHandler}
            />
            <button type="submit" className="companybuttonsPage">
              Update
            </button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

//>
// render() {
//   return (
//     <div className="main_box--main ">
//       <Form className="containerdiv" onSubmit={this.submitcompanyinput}>
//         <FormGroup>
//           <Label>Company Name</Label>
//           <Input
//             defaultValue={this.state.companyname}
//             onChange={this.companynameChangeHandler}
//           />
//           <Label>Address</Label>
//           <Input
//             defaultValue={this.state.AddressLineOne}
//             onChange={this.AddressOneChangeHandler}
//           />
//           <Label>Address two</Label>
//           <Input
//             defaultValue={this.state.AddressLineTwo}
//             onChange={this.AddressTwoChangeHandler}
//           />
//           <button type="submit" className="companybuttonsPage">
//             Update
//           </button>
//         </FormGroup>
//       </Form>
//     </div>
//   );
// }
// }
