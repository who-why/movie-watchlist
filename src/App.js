import React from 'react'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import Header from './componenets/Header/Header'
import Watchlist from './componenets/Watchlist/Watchlist'
import Add from './componenets/Add/Add'
import MovieDetails from './componenets/MoveiDetails/Details'
import Home from './componenets/Home/Home'

const App = () => {
  return (
    <div>
   <Router>
       <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/watchlist" element={<Watchlist/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/movie/:movieId" element={<MovieDetails/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
