import { movieModel } from '../modules/movie-model.js'
import React from 'react'

class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      films: []
    }
  }

  componentDidMount() {
    movieModel.getMovies()
      .then(films => this.setState({ films }))
      .catch(err => console.log({ err, msg: 'no movies returned' }))
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <ul>
        { this.state.films.map(film => ( 
          <li onClick={() => this.props.runMe(film.episode)} key={ film.episode }>
            <span>{ film.title || 'No Title' }</span>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}


export { MovieList }