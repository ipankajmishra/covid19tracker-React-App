import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CountryCard.css";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { MDBRow, MDBCol } from "mdbreact";
import Badge from "react-bootstrap/Badge";
export class CountryCard extends Component {
  constructor(props) {
    super(props);
    // this.state={
    //    activecase:this.props.activecases[0]
    // }
    
  }

  
  render() {
    // const arr = this.props.activecases;
    return (
      <div className="countrydiv">
        <Card xs={3} md={3}
         className="countrycard"
          border="info"
          style={{
            width: "60rvw",
            marginLeft: "20vw",
            marginRight: "20vw",
            backgroundColor: "#34373b",
          }}
          //  bg="black"
          //  key={idx}
          text="light"
        >
          <Card.Header>
            <img
              style={{ height: "30px" }}
              src={this.props.fetchData.flag}
            />
            &nbsp; &nbsp; &nbsp;<span style={{fontSize:"24px"}}>{this.props.fetchData.country}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Badge  onClick={()=>this.props.close()} variant="success"><span className="batchclose"><h5>Close</h5></span></Badge>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <h4>
                <Badge variant="success">#STAYHOME</Badge>&nbsp;&nbsp;
                <Badge variant="success">#STAYSAFE</Badge>
              </h4>
            </Card.Title>
            <Card.Text>
              <MDBRow>
                <MDBCol size="9">
                  <h4 style={{ color: "#a1dbe6", textAlign: "center" }}>
                    Total Cases :{" "}
                    <span style={{ color: "white", textAlign: "center" }}>
                      <span style={{ color: "white", textAlign: "center" }}>
                      {this.props.fetchData.cases}{" "}
                      </span>
                    </span>
                    <img
                      style={{ height: "25px" }}
                      src={require("../Images/rise.svg")}
                    />
                  </h4>
                </MDBCol>
                <MDBCol size="3">
                  <span className="increment"><p>+236</p></span>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="9">
                  <h4 style={{ color: "#edc0a1", textAlign: "center" }}>
                    Total Recovered :{" "}
                    <span style={{ color: "white", textAlign: "center" }}>
                    {this.props.fetchData.recovered}{" "}
                    </span>
                    <img
                      style={{ height: "25px" }}
                      src={require("../Images/rise.svg")}
                    />
                  </h4>
                </MDBCol>
                {/* <MDBCol size="3">
                     <h4>+236</h4>
                  </MDBCol> */}
              </MDBRow>
              <MDBRow>
                <MDBCol size="9">
                  <h4 style={{ color: "#d9a1ed", textAlign: "center" }}>
                    Active Cases :{" "}
                    <span style={{ color: "white", textAlign: "center" }}>
                    {this.props.activecases[0].currently_infected_patients}{" "}
                    </span>
                    {/* <img
                      style={{ height: "25px" }}
                      src={require("../Images/rise.svg")}
                    /> */}
                  </h4>
                </MDBCol>
                {/* <MDBCol size="3">
                     <h4>+236</h4>
                  </MDBCol> */}
              </MDBRow>

              <MDBRow>
                <MDBCol size="9">
                  <h4 style={{ textAlign: "center" }}>
                    Total Deaths :{" "}
                    <span style={{ color: "white", textAlign: "center" }}>
                    {this.props.fetchData.deaths}{" "}
                    </span>
                    <img
                      style={{ height: "25px" }}
                      src={require("../Images/rise.svg")}
                    />
                  </h4>
                </MDBCol>
                <MDBCol size="3">
                <span className="increment"><p>+236</p></span>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size="9">
                  <h4 style={{ textAlign: "center", color: "yellow" }}>
                    Serious Cases :{" "}
                    <span style={{ color: "white", textAlign: "center" }}>
                    {this.props.activecases[0].criticalStates}{" "}
                    </span>
                    {/* <img
                      style={{ height: "25px" }}
                      src={require("../Images/rise.svg")}
                    /> */}
                  </h4>
                </MDBCol>
                {/* <MDBCol size="3">
                     <h4>+236</h4>
                  </MDBCol> */}
              </MDBRow>

              <MDBRow>
                <MDBCol size="9">
                  <h4 style={{ textAlign: "center", color: "yellow" }}>
                    Total Tests :{" "}
                    <span style={{ color: "white", textAlign: "center" }}>
                    N/A{" "}
                    </span>
                    {/* <img
                      style={{ height: "25px" }}
                      src={require("../Images/rise.svg")}
                    /> */}
                  </h4>
                </MDBCol>
                {/* <MDBCol size="3">
                     <h4>+236</h4>
                  </MDBCol> */}
              </MDBRow>

              <MDBRow>
                <MDBCol size="9">
                  <h5 style={{ textAlign: "center", color: "yellow" }}>
                    Death/1M Population :{" "}
                    <span style={{ color: "white", textAlign: "center" }}>
                    N/A{" "}
                    </span>
                    {/* <img
                      style={{ height: "15px" }}
                      src={require("../Images/rise.svg")}
                    /> */}
                  </h5>
                </MDBCol>
                {/* <MDBCol size="3">
                     <h4>+236</h4>
                  </MDBCol> */}
              </MDBRow>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default CountryCard;
