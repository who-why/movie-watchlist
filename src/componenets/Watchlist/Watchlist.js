import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../Context/Context';
import { FaEye, FaTimes } from 'react-icons/fa';
import './Watchlist.css'
import { Link } from 'react-router-dom';

const Watchlist = () => {
  const { myArray ,removeFromArray } = useContext(MyContext);
   
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  return (
    <div className='container'>
      {myArray.map((item) => (
        <div key={item.id} className="watchlist-item">
          <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={item.title} />
          <div className='text'>
          <h1 className='p-title'>{truncateTitle(item.title, 25)}</h1>
             <span>{item.release_date}</span>
          </div>
          <div className="action-icons">
          <Link to={`/movie/${item.id}`}>
            <FaEye className="view-icon" />
            </Link>
            <FaTimes
              className="remove-icon"
              onClick={()=>removeFromArray(item.id)}
            />
          </div>
        </div>
      ))}
      {myArray.length === 0 && 
       <Link to='/add' className='add-item'>
           <button>add to watchlist</button>
        </Link>
       }

    </div>
  );
};

export default Watchlist;
