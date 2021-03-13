import './App.css';
import React, { useState } from 'react'

// const MovieList = React.lazy(() => 
//   import('./components/movie-list.js'))
// const MovieDetail = React.lazy(() => 
//   import('./components/movie-detail.js'))

import { MovieList } from './components/movie-list.js'
import { MovieDetail } from './components/movie-detail.js'

function App() {
  const [movieId, setMovieId] = useState(-1)

  function handleClick(e) {
    setMovieId(e)
  }
  
  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>Star Wars Intro</h1>
          <a className="App-link"
            href="https://github.com/mrteye/wookiee-town"
            target="_blank"
            rel="noopener noreferrer"
          >Project Repo (github)</a>
          
          <MovieList setFilm={handleClick}></MovieList>
        </header>

        <section className="App-section">
          <MovieDetail movieId={movieId}></MovieDetail>
        </section>
      </main>
    </div>
  );
}


export default App;
