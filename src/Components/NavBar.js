import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NavBar.css'
import { MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { FaSearchLocation } from 'react-icons/fa';
import Button from 'react-bootstrap/Button'
export class NavBar extends Component {
    static propTypes = {
        prop: PropTypes
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
                                    <input className="searchInput" type="text" placeholder="Search country..."  className="searchInput"  />
                                    {/* label="Search country..." */}
                                
                                </MDBCol>
                                <MDBCol size="2.5">
                                <Button  onClick={()=>this.props.fetchData()} class="searchButton" variant="dark">Search</Button>{' '}
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
