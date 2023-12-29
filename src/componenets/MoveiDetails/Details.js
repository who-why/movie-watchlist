import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../Context/Context';
import { CiBookmark } from "react-icons/ci";
import { FaHeart} from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { FcTodoList } from "react-icons/fc";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import YouTube from 'react-youtube';

import './Details.css';

const MovieDetails = () => {
  const { movieId } = useParams(); 
  const { myArray } = useContext(MyContext);
  const [video, setVideo] = useState([]);
  const [movie, setMovie] = useState(null);
  const [open,setopen]=useState(false)

  useEffect(() => {
    getMovieDetails();
    getVideo();
  }, [movieId]);

  const getMovieDetails = () => {
    const selectedMovie = myArray.find((item) => item.id === parseInt(movieId));
    setMovie(selectedMovie);
  };

  const getVideo = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=d1acd18a215153255124f84609f9825e&language=en-US`);
      const data = await response.json();
      console.log("Movie Videos:", data.results);
      setVideo(data.results);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handlePlayClick = () => {
     setopen(!open)
  };
  const handleCloseClick = () => {
    setopen(!open);
  };

  return (
    <div className="movie-details-container">
      {movie ? (
        <>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className='para'>
            <h1>{movie.title}</h1>
            <span>Release date: {movie.release_date}</span>

            <div className='icons'>
              <a href="#"><FcTodoList/></a>
              <a href="#"><FaHeart/></a>
              <a href="#"><CiBookmark/></a>
              <a href="#"><IoMdStar/></a>
              <div className='trailer'>
                <a href="#" onClick={handlePlayClick}><FaPlay/></a>
                <span>play trailer</span>
              </div>
              
            </div>

            <div className='overview'>
              <h1>Overview</h1>
              <p>{movie.overview}</p>
            </div>
             <div className='play-video'>
               <span onClick={handleCloseClick}><IoMdClose/></span>
              {video.length > 0 && open &&  <YouTube videoId={video[0].key} />}
             </div>
          </div>
          
        </>
      ) : (
        <div className="movie-details-container">Loading...</div>
      )}
    </div>
  );
};

export default MovieDetails;
