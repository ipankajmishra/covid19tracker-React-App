import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaStar } from 'react-icons/fa';

import './SearchPage.css';
import { MDBRow,MDBCol } from 'mdbreact';
import Modal from 'react-bootstrap/Modal';
import CardDeck from 'react-bootstrap/Card';
export default class MovieCard extends Component {
    
    static propTypes = {
        prop: PropTypes
    }



    // addTowishlist = () =>{
    //     let wishList = this.props.wishList;
    //     let count = this.props.count;
    //     wishList.push(this.props.value);
    //     count = wishList.length;
    //     this.setState({
    //         myWishList: wishList,
        
    //         myMovieCount:count
    //     })
    //    // console.log(wishList)
    //     console.log("hello")

    // }

    render() {
        const divStyle = {
            width : '200px',
            height: '200px'
        }
        const divCardImage = {
            // marginLeft: '-25px',
            width : '200px',
            height: '200px',
            marginTop: '-20px',
            borderRadius: '30px'
        }
        
        return (
            
            <div  className = "background1 mx-5">
                 <Card border='dark'  style={{boxShadow: '10',borderRadius: '10%',backgroundColor: 'black',color: 'white'}}>
                <Card.Img style={divCardImage}  variant="top" src={this.props.value.Poster} />
                <Card.Body >
                <Card.Title className="text-center">  
                         {this.props.value.Title} 
                         
                         </Card.Title>
                   
                         
                        
                        <p className="text-center">Imdb : {this.props.value.imdbRating} <FaStar/></p>
                        
                  
                    
                   
                    <Card.Text className="text-center">
                   Imdb ID : {this.props.value.imdbID}
                    {/* {this.props.value.Plot.substring(0,50)+ "..."} */}
                    </Card.Text>
                   {/* onClick={this.addTowishlist} */}
                    {!this.props.add && <Button onClick={()=>this.props.linkToAdd(this.props.value)} variant="primary">Watch before you die.</Button>}
                    {this.props.add && <Button onClick={()=>this.props.remove(this.props.value)} variant="danger">Remove from WishList</Button>}
                </Card.Body>
                </Card>
            </div>
            
        )



        
    
    
    }

    

}
