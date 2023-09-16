import {Button, Modal, } from 'react-bootstrap';
import React, {useState} from 'react';

const API_IMG ="https://image.tmdb.org/t/p/original/"

const MovieBox =({title,poster_path,id, vote_average, release_date, overview })=>{
   const [show, setShow]=useState(false);

   const handleShow=()=>setShow(true);
   const handleClose=()=>setShow(false);
   
   
   
    return(
        <div className='card text-center bg-white mb-3'> 
            <div className='card-body'  data-testid="movie-card">
                <img data-testid="movie-poster" className='card-img-top' src={API_IMG+poster_path} alt=''></img>
                <div className='card-body'>
                <span data-testid="movie-release-date">{release_date}</span>
                <h4 data-testid="movie-title">{title}</h4>
                <h5 > IMDb </h5> 
                <p data-testid="movie-overview" >{overview}</p>
                    <button type='button' className='btn btn-dark' onClick={handleShow}>View more</button>
                    <Modal onShow={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <img className='card-img-top' src={API_IMG+poster_path} alt=''></img>
                        <h3>{title}</h3>
                        <h5>Overview</h5>
                        <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            {/* 
            <img src={API_IMG+poster_path} alt=""></img>
            <p>{overview}</p> */}
        </div>
    )
}
 

export default MovieBox;