import React from 'react';
const API_IMG ="https://image.tmdb.org/t/p/original/"

const MovieBox =({title,poster_path, vote_average, release_date, overview })=>{
    return(
        <div className='card text-center bg-secondary mb-3'> 
            <div className='card-body'>
                <img className='card-img-top' src={API_IMG+poster_path} alt=''></img>
                <div className='card-body'>
                    <button type='button' className='btn btn-dark'>View more</button>
                </div>
            </div>
            {/* <h1>{title}</h1>
            <img src={API_IMG+poster_path} alt=""></img>
            <p>{overview}</p> */}
        </div>
    )
}
 

export default MovieBox;