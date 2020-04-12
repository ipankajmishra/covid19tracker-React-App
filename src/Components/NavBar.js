import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NavBar.css'
import { MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { FaSearchLocation } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';
export class NavBar extends Component {
    constructor(props){
        super();
        this.state = {
        
            name:'',
            report:{}
        }
    }

    

       isEmpty=(obj)=> {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
    
        return true;
    }

    fetchData=()=>{
        fetch("https://covid19-server.chrismichael.now.sh/api/v1/ReportsByCountries/"+this.state.name)
        .then(res => res.json())
        .then(
          (result) => {
            // console.log(result.report);
            this.setState({
              report:result.report
            })
            this.props.setfetchdata(result.report);
            console.log(this.isEmpty(result.report))
            if(this.isEmpty(result.report))
            {
                this.handleLoadedError();
            }
            else{
                this.props.opencountry();
            }
          }
        ).catch(error =>{
            this.props.handleLoadedError();
        }
        )
        
    
        // return <App1 twentyData={this.state.top20data}/>;
    }

    handleNameChange( e ) {
        this.setState( { name: e.target.value } );
        console.log(this.state.name)
      }


    render() {
        return (
            <div className="container">
                <div className="blanckdiv"></div>
                <MDBRow className=".searchBarParentDiv">
                    <MDBCol className="searchBar1">

                    </MDBCol>
                    <MDBCol className="searchBar2">

                    </MDBCol>
                    <MDBCol className="searchBar3">
                        <div className="inlinesearch">
                            <MDBRow>
                                <MDBCol size="9.5">
                                    <input className="searchInput" onChange={ e => this.handleNameChange( e ) } type="text" placeholder="Search country..."  className="searchInput"  />
                                    {/* label="Search country..." */}
                                
                                </MDBCol>
                                <MDBCol size="2.5">
                                <Button  onClick={this.fetchData} class="searchButton" variant="dark">Search</Button>{' '}
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
        )
    }
}

export default NavBar
