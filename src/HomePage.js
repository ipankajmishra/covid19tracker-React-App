import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HomePage.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NavBar from "../src/Components/NavBar";
import Top20DataChart from '../src/Components/Top20DataChart';
import LoadingScreen from "./Components/LoadingScreen"
export class HomePage extends Component {
    constructor( props, context ) {
        super( props, context );
        this.state = {
            reports:[],
            OverallCases:[],
            top20data:[]
        }
        // this.fetchData();
    
    }

componentDidMount(){
  this.fetchData();

}

fetchData=()=>{
    fetch("https://covid19-server.chrismichael.now.sh/api/v1/AllReports")
    .then(res => res.json())
    .then(
      (result) => {
        
        let arr = result.reports[0].table[0];
        console.log(arr);
        
        let twentyarr = [];
        for(let i=0;i<20;i++)
        {
          twentyarr.push(arr[i+1]);
        }
        this.setState({
          reports:result.reports,
          OverallCases:arr[0],
          top20data:twentyarr
        })
      }
    )

    // return <App1 twentyData={this.state.top20data}/>;
}
  render() {
    if (!this.state.reports.length>0) {
      return <LoadingScreen />
  }
    
    // const top20chartdata = this.state.top20data;
    // console.log(top20chartdata);
    return (
      <div className="body">
        <div>
          <NavBar fetchData={this.fetchData}/>
        </div>

        <div className="container">
          <Row>
            <Col xs={3} md={3}>
              <Card
                bg="dark"
                text="light"
                style={{ width: "18rem" }}
                className="cardTop"
              >
                <Card.Header style={{color:'#a1dbe6', textAlign:'center'}}>Total Cases (World)</Card.Header>
                <Card.Body>
                  <Card.Title style={{color:'red'}}>{this.state.OverallCases.NewCases}</Card.Title>
                    <img className="imgCard" src={require("./Images/totalCases.svg")}/>
                  <Card.Text className="cardtexttop">
                    {this.state.OverallCases.TotalCases}
                  </Card.Text>
                  <p style={{color:"#f5f100"}}>Total Cases/1M : <span style={{color:'white'}}>{this.state.OverallCases.TotCases_1M_Pop}</span></p>

                  
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
            <Card
                bg="dark"
                className="cardTop"
                text="light"
                style={{ width: "18rem" }}
              >
                <Card.Header style={{color:"#edc0a1", textAlign:'center'}}>Total Recovered Cases</Card.Header>
                <Card.Body>
                  <Card.Title style={{color:'#7beca2'}}>↑ {this.state.OverallCases.TotalRecovered}</Card.Title>
                    <img className="imgCard" src={require("./Images/patient.svg")}/>
                  <Card.Text className="cardtexttop">
                  {this.state.OverallCases.TotalRecovered}

                  </Card.Text>
                  <p style={{color:"#f5f100"}}>Country : <span style={{color:'white'}}>Across Globe</span></p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
            <Card
                bg="dark"
                text="light"
                style={{ width: "18rem" }}
                className="cardTop"

              >
                <Card.Header style={{color:'#d9a1ed', textAlign:'center'}}>Active Cases</Card.Header>
                <Card.Body>
                  <Card.Title style={{color:'#e37f8e'}}>↑ {this.state.OverallCases.ActiveCases}</Card.Title>
                    <img className="imgCard" src={require("./Images/active.svg")}/>
                  <Card.Text className="cardtexttop">
                  {this.state.OverallCases.ActiveCases}
                  </Card.Text>
                  <p style={{color:"#f5f100"}}>Serious/Critical Cases : <span style={{color:'white'}}>{this.state.OverallCases.Serious_Critical}</span></p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={3}>
            <Card
                bg="dark"
                text="light"
                style={{ width: "18rem" }}
                className="cardTop"

              >
                <Card.Header style={{textAlign:'center'}}>Total Deaths</Card.Header>
                <Card.Body>
                  <Card.Title style={{color:'white'}}>{this.state.OverallCases.NewDeaths}</Card.Title>
                    <img className="imgCard" src={require("./Images/death.svg")}/>
                  <Card.Text className="cardtexttop">
                  {this.state.OverallCases.TotalDeaths}
                  </Card.Text>
                  <p style={{color:"#f5f100"}}>Deaths/1M : <span style={{color:'white'}}>{this.state.OverallCases.Deaths_1M_pop}</span></p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div style={{marginTop:'250px', alignItems:'center', alignContent:'center',height:"420px", backgroundColor:"#1d2124"}}>
          <div style={{marginLeft:'15vw'}}>
          
            <Top20DataChart twentyData={this.state.top20data}/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default HomePage;
