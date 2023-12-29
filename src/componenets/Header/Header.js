import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='heading'>
      <h1 className='head'>
        <Link to="/">
          Trailer
        </Link>
      </h1>
       <div className='tag'>
         <Link to="/watchlist">WatchList</Link>
          <Link to="/add">
            <button>+ Add</button>
           </Link>
       </div>
    </div>
  );
};

export default Header;
