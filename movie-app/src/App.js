import React,{useState,useEffect} from 'react';
import './App.css';
import MovieBox from './MovieBox'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap';


const API_URL="https://api.themoviedb.org/3/movie/top_rated?api_key=414eec00dd3b35b52e5201e1ec693543"

function App() {

  const [movies, setMovies]=useState([]);
  
  useEffect(()=>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
      setMovies(data.results);
    })
  },[])

  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="">MovieBox</Navbar.Brand>
        <Navbar.Brand href="">Trending</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">

          <Navbar.Collapse id='navbarScrool'>
            <Nav
            className="me-auto my-2 my-lg-3"
            style={{maxHeight: '100px'}}
            NavbarScroll></Nav>

          </Navbar.Collapse>
        </Navbar.Toggle>
      </Container>
    </Navbar>
      <div className='container'>
        <div className='grid'>
          {movies.map((moviesReq)=>
          <MovieBox key={moviesReq.id} {...moviesReq} />)}
        </div>
      </div>
    </>
 
  );
}

export default App;
