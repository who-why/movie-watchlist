import React, { useState, useEffect, useContext } from 'react';
import './Home.css';
import Hero from './Hero';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context/Context';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const {addToArray } = useContext(MyContext);
  const apiKey = 'd1acd18a215153255124f84609f9825e';
  const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=' + apiKey;

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, [url]);

  return (
    <div className='Home'>
      <div className='okk'>
        <Hero />
      </div>
      <div className='popular'>
        <h1>Popular Movies</h1>
        <div className="card">
          {popularMovies.map((item) => (
            <div className='cart-image' key={item.id}>
              <Link to={`/movie/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  alt={item.title}
                  onClick={() => addToArray(item)}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
