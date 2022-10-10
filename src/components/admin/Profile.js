import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { fetchcompany, submitcompany } from "../services/MyOwnServices";
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

class Company extends React.Component {
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
  AddressChangeHandler = (event) => {
    this.setState({ address: event.target.value });
  };
  submitcompanyinput = (event) => {
    event.preventDefault();

    submitcompany(this.state.companyname, this.state.address)
      .then((response) => {
        this.setState({
          success: "Y",
          done: "Y",
        });
      })
      .catch((error) => console.error);
  };

  componentDidMount() {
    fetchcompany(this.state.company)
      .then((response) => {
        this.setState({
          companyname: response.companyname,
          address: response.returnedaddress,
        });
      })
      .catch((error) => console.error);
  }

  render() {
    return (
      <div>
        {this.props.currentStatus === "Y" && this.state.done !== "Y" && (
          <Form className="companyrectangle" onSubmit={this.submitcompanyinput}>
            <FormGroup>
              <Label className="widthy">Company Name</Label>
              <Input
                defaultValue={this.state.companyname}
                onChange={this.companynameChangeHandler}
                className="widthy2"
              />
            </FormGroup>
            <FormGroup>
              <Label className="widthy">Address</Label>
              <Input
                defaultValue={this.state.address}
                onChange={this.AddressChangeHandler}
                className="widthy"
              />
            </FormGroup>
            <button type="submit" className="companybuttonsPage">
              Update
            </button>
          </Form>
        )}
      </div>
    );
  }
}

export default Company;
