import { movieModel } from '../modules/movie-model.js'
import React from 'react'
import ('./movie-detail.css')

class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: {
      }
    }
  }

  componentDidUpdate(prevProps) {
    // Update movie when movie-id changes.
    if (this.props.movieId != prevProps.movieId) { 
      movieModel.getDetail(this.props.movieId)
      .then(movie => {
        if (movie) {
          this.setState({ movie })
          return movie
        }
      })
      .catch(err => console.log({ err, movieId: this.props.movieId }))
    }
  }

  render() {
    return (
      <div className="MovieDetail">
        <h2>{ this.state.movie.title }</h2>
        <h3>Released: { this.state.movie.relDate }</h3>
        <pre>{ this.state.movie.crawl }</pre>
      </div>
    )
  }
}


export { MovieDetail }