import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListOfUser from './ListOfUser';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import './ListOfUsers.css';
import { MDBCard } from 'mdbreact';
export class ListOfUsers extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="Table">
                <MDBCard className="tablecard">
                    <Table className="tableContainer">
                        <Thead>
                            <Tr className="TableHeader">
                                <Th><div className="TdText">
                                    &nbsp;User Id
                            </div></Th>
                                <Th><div className="TdText">
                                    First Name
                            </div></Th>
                                <Th><div className="TdText">
                                    Last Name
                            </div></Th>
                                <Th><div className="TdText">
                                    Email
                            </div></Th>
                                <Th><div className="TdText">
                                    Mobile
                            </div></Th>
                                <Th><div className="TdText">
                                    Date Of Birth
                            </div></Th>
                                <Th><div className="TdText">
                                    Batch Id
                            </div></Th>
                                <Th><div className="TdText">
                                    Category Id
                            </div></Th>
                                <Th><div className="TdText">
                                    Location
                            </div></Th>
                                <Th><div className="TdText">
                                    First Login
                            </div></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <ListOfUser />
                            <ListOfUser />
                            <ListOfUser />
                            <ListOfUser />


                        </Tbody>
                    </Table>
                </MDBCard>
            </div>
        )
    }
}

export default ListOfUsers
