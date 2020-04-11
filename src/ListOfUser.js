import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MDBCard, MDBRow, MDBCol } from 'mdbreact'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import './ListOfUsers.css'
import Badge from 'react-bootstrap/Badge'
export class ListOfUser extends Component {
    static propTypes = {

    }

    render() {
        return (
            <Tr>
                <Td>
                    <div className="TdText">
                    1
                    </div>
                </Td>
                <Td>
                    <div className="TdText">
                    Pankaj
                    </div>
                </Td>
                <Td>
                    <div className="TdText">
                    Mishra
                    </div>
                </Td>
                <Td>
                    <div className="TdText">
                    panmishr3@publicisgroupe.net
                    </div>
                </Td>
                <Td>
                    <div className="TdText">
                    5698345678
                    </div>
                </Td>
                <Td>
                    <div className="TdText">
                    13/06/1998
                    </div>
                </Td>
                <Td>
                    <div className="TdText">
                    1
                    </div>
                </Td>
                <Td>
                    <div className="TdText">
                    2
                    </div>
                </Td>
                <Td>
                    <div className="TdText">
                    Gurgaon
                    </div>
                </Td>
                <Td>
                    <div className="TdText">
                    <Badge variant="danger">Inactive</Badge>{' '}
                    <Badge variant="success">Active</Badge>{' '}
                    </div>
                </Td>
                
                
                {/* <Td><MDBCard className="cardCustom">Tablescon</MDBCard></Td> */}
               
            </Tr>
        )
    }
}

export default ListOfUser
