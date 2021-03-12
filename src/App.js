import logo from './logo.svg';
import './App.css';
import React, { Suspend, useState } from 'react'

// const MovieList = React.lazy(() => 
//   import('./components/movie-list.js'))

// const MovieDetail = React.lazy(() => 
//   import('./components/movie-detail.js'))

import { MovieList } from './components/movie-list.js'
import { MovieDetail } from './components/movie-detail.js'

/** TODO get suspend working... */
function PlaceHolder() {
  return (
    <div>
      Loading...MovieDetail
    </div>
  )
}


function App() {
  const [movieId, setMovieId] = useState(1)

  function handleClick(e) {
    setMovieId(e)
  }
  
  return (
    <div className="App">
      <main>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
          <a
            className="App-link"
            href="https://github.com/mrteye/wookiee-town"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Repo (github)
          </a>
          <MovieList runMe={handleClick}></MovieList>
        </header>

        <section className="App-section">
        {/* <Suspend fallback={<div>loading...MovieDetail</div>}> */}
        <MovieDetail movieId={movieId}></MovieDetail>
        {/* </Suspend> */}
        </section>
      </main>
    </div>
  );
}


export default App;
