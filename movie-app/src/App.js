import React,{useState,useEffect} from 'react';
import './App.css';
import MovieBox from './MovieBox'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav,Form, FormControl, Button} from 'react-bootstrap';


const API_URL="https://api.themoviedb.org/3/movie/top_rated?api_key=414eec00dd3b35b52e5201e1ec693543"
const API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=414eec00dd3b35b52e5201e1ec693543&query";
function App() {

  const [movies, setMovies]=useState([]);
  const [query, setQuerry]=useState('');
  
  useEffect(()=>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data)
      setMovies(data.results);
    })
  },[])

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=414eec00dd3b35b52e5201e1ec693543&query=${ query }`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }
  const changeHandler=(e)=>{
    setQuerry(e.target.value);
  }
  return (
    <>
    <Navbar bg="dark" className='Navbar' expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">MovieBox</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id='navbarScrool'>
            <Nav
            className="me-auto my-2 my-lg-3"
            style={{maxHeight: '100px'}}
            NavbarScroll>

            </Nav>

            <Form className="d-flex" onSubmit={searchMovie}>
              <FormControl 
              type='search'
              placeholder='What do you want to watch?'
              className='me-2'
              aria-label='search'
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type='submit'>Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
    <h3>Featured Movie</h3>
    {movies.length > 0 ?(
      <div className='container'>
        <div className='grid'>
          {movies.map((moviesReq)=>
          <MovieBox key={moviesReq.id} {...moviesReq} />)}
        </div>
      </div>
    ):(
      <h2>Sorry !! No Movies Found</h2>
    )}
    </div> 
    </>    
 
  );
}

export default App;
