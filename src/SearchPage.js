import React,{useState} from "react";
import { MDBCol,MDBRow, MDBFormInline, MDBBtn } from "mdbreact";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardDeck from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import './SearchPage.css';
import MovieCard from './MovieCard';
import { BrowserRouter } from 'react-router-dom';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';
class SearchPage extends React.Component{
  constructor( props, context ) {
    super( props, context );
    this.state = {
        name: '',
        movies: {},
        isLoaded: false,
        movieList: [],
        myWishList: [],
        myMovieCount: 0,
        showwishList: false
    }

}
removeFromWishList=(movie)=>{
  let wishList = this.state.myWishList;
  for(let i=0;i<wishList.length;i++)
  {
    if(wishList[i].imdbID ==movie.imdbID)
    {
      wishList.splice(i,1);
      break;
    }
  }
  this.setState({myWishList: wishList});
  movie.isAdded = false;
  this.handleClick3();
}

handleLoaded() {
  // e.preventDefault();
   Alert.success('Found 10 items related to your search.', {
       position: 'top-right',
       effect: 'genie',
       onShow: function () {
           console.log('aye!')
       },
       beep: false,
       timeout: 2000,
       offset: 100
   });
 }


handleClick1() {
 // e.preventDefault();
  Alert.success('Added to WishList', {
      position: 'bottom-right',
      effect: 'scale',
      onShow: function () {
          console.log('aye!')
      },
      beep: false,
      timeout: 2000,
      offset: 100
  });
}

removeFromMovieList(movie){
  let movieList = this.state.movieList;
  for(let i=0;i<movieList.length;i++)
  {
    if((movieList[i].imdbID)==(movie.imdbID))
    {
      console.log((movieList[i].imdbID)==(movie.imdbID));
      movieList.splice(i,1);
      break;
    }
  }
}

handleClick2() {
  // e.preventDefault();
   Alert.error('WishList is empty now.', {
       position: 'bottom-right',
       effect: 'scale',
       onShow: function () {
           console.log('aye!')
       },
       beep: false,
       timeout: 2000,
       offset: 100
   });
 }

 handleClick5() {
  // e.preventDefault();
   Alert.error('Results are removed successfully.', {
       position: 'bottom-right',
       effect: 'scale',
       onShow: function () {
           console.log('aye!')
       },
       beep: false,
       timeout: 2000,
       offset: 100
   });
 }

 handleClick3() {
  // e.preventDefault();
   Alert.info('Removed from wishlist.', {
       position: 'bottom-right',
       effect: 'scale',
       onShow: function () {
           console.log('aye!')
       },
       beep: false,
       timeout: 2000,
       offset: 100
   });
 }

 handleClick4() {
  // e.preventDefault();
   Alert.error('Maximum 10 items can be added to the wishList', {
       position: 'bottom-right',
       effect: 'scale',
       onShow: function () {
           console.log('aye!')
       },
       beep: false,
       timeout: 2000,
       offset: 100
   });
 }

handleCloseAll() {
  //e.preventDefault();
  Alert.closeAll();
}

handleClear() {
    this.setState( { name: '' } );
    this.setState({movieList: []});
    this.handleClick5();
    
}
WishListClear() {
  
  this.setState({myWishList: []});
  this.handleClick2();
}
handleNameChange( e ) {
    this.setState( { name: e.target.value } );
    console.log(this.state.name)
}

showWishList = () =>
{
  let isShow = this.state.showwishList;
  if(isShow == true)
  {
    this.setState( { showwishList: false } );
  }
  else{
    this.setState( { showwishList: true } );
  }
}


addtoList = (value) =>{
  let wishList = this.state.myWishList;
  
  if(wishList.length<10){
    value.isAdded = true;
    this.handleClick1();
  wishList.push(value);
  this.removeFromMovieList(value);
}
  else{
    this.handleClick4();
  }
 
  this.setState({
      myWishList: wishList
  })
  
 
}




 searchMovie=()=>{
  this.setState({
    add : false
})
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=2fd52844&s="+this.state.name)
    .then(res => res.json())
    .then(
      (result) => {
        let movieList = this.state.movieList
        //movieList.push(result)
        movieList = movieList.concat(result.Search) 
        console.log(movieList)
        this.setState({
          isLoaded: true,
          movieList: movieList
        })
        this.handleLoaded();
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
   
   
  }
render(){
  const boolState = this.state.showwishList;
  const movieList = this.state.movieList;
  const movies = movieList.map((movie)=>{
    
    return (
      
      <MovieCard remove={this.removeFromWishList} add= {movie.isAdded} linkToAdd = {this.addtoList} count = {this.state.myMovieCount} value= {movie} wishList = {this.state.myWishList}></MovieCard>
    );
  })
  const movieWishList = this.state.myWishList;
  const moviesList = movieWishList.map((movie)=>{
    
    return (
      
      <MovieCard remove={this.removeFromWishList} add= {movie.isAdded} value= {movie} wishList = {this.state.myWishList}></MovieCard>
    );
  })
  return (

    
   
    <div className="search">
      <Alert stack={{limit: 3}}/>
       
      {/* <a href="#" onClick={this.handleCloseAll}>Close All</a> */}
      <MDBRow className="search1">
        <MDBCol size="9">
        <h2 id="h2">One Place for all Movies.</h2>
        </MDBCol>
        <MDBCol size="3">
  <Button onClick={this.showWishList} variant="warning">My Movie List ({this.state.myWishList.length})</Button>
  <Button variant="danger" onClick={ () => this.WishListClear() } >
                    X
                </Button>
        </MDBCol>
        </MDBRow>
     
      
      <MDBCol>
      <MDBRow className="search1">
      <input placeholder="Search Movie Here..." className="form-control" value={this.state.name} 
                       onChange={ e => this.handleNameChange( e ) } />
         <Button onClick={this.searchMovie} variant="dark">Search</Button>
         <Button variant="danger" onClick={ () => this.handleClear() } >
                    Clear
                </Button>
        </MDBRow>
    <div className="blankArea">

    </div>

    {
      !boolState?(
        
        <MDBRow>
         {movies}
         </MDBRow>
        
      ):<MDBRow>
      {moviesList.length>0 && moviesList}
      {moviesList.length==0 && <div>
          <p className="emptyWishList">Your wishlist is Empty.</p>
          <br></br>
          <Button onClick={this.showWishList} style={{marginLeft:'600px'}} variant="warning">Return</Button>
          </div>}
      </MDBRow>
    }
         

         
        </MDBCol>
       

       
  
    </div>

       
   
  );
}
}

export default SearchPage;