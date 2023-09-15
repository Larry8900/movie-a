import {Button, Modal, show} from 'react-bootstrap';
import React, {useState} from 'react';
const API_IMG ="https://image.tmdb.org/t/p/original/"

const MovieBox =({title,poster_path, vote_average, release_date, overview })=>{
   const [show, setShow]=useState(false);

   const handleShow=()=>setShow(true);
   const handleClose=()=>setShow(false);
   
   
   
    return(
        <div className='card text-center bg-secondary mb-3'> 
            <div className='card-body'>
                <img className='card-img-top' style={{width: '14rem'}} src={API_IMG+poster_path} alt=''></img>
                <div className='card-body'>
                <span>USA, 2021</span>
                <h4>{title}</h4>
                <h5>IMDb {vote_average}</h5> 
                    <button type='button' className='btn btn-dark' onClick={handleShow}>View more</button>
                    <Modal show={show} onHide={handleClose}>
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