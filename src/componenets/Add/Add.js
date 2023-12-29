import React, { useState, useEffect, useContext } from 'react';
import './Add.css';
import { MyContext } from '../Context/Context';

const Add = () => {
  const [text, setText] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const { myArray, addToArray } = useContext(MyContext);

  useEffect(() => {
    const apiKey = 'd1acd18a215153255124f84609f9825e';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}`;

    const fetchdata = async () => {
      try {
        const data = await fetch(url);
        const result = await data.json();
        setMovies(result.results);
      } catch (error) {
        console.error(error);
      }
    };

    const debounceTimeout = setTimeout(fetchdata, 500);
    return () => clearTimeout(debounceTimeout);
  }, [text]);

  useEffect(() => {
    const filtered = movies.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) &&
        item.poster_path !== null &&
        item.release_date
    );
    setFilteredMovies(filtered);
  }, [text, movies]);

  return (
    <div className='inpit'>
      <input
        type='text'
        id='searchInput'
        placeholder='Search movie'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />

      <div className='movie-item'>
        {filteredMovies.length > 0 &&
          filteredMovies.map((item) => (
            <div className='movie' key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                alt={item.title}
                onError={(e) => {
                  e.target.src =
                    '/path/to/placeholder-image.jpg'; 
                }}
              />
              <div className='ok'>
                <h1>{item.title}</h1>
                <span>{item.release_date}</span>
              </div>
              <div className='btn1'
              onClick={() => addToArray(item)}
              >
                <button>Add to watchlist</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Add;
