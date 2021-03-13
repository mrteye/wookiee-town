import { movieModel } from '../modules/movie-model.js'
import React from 'react'
import ('./movie-list.css')

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

  render() {
    return (
      <div>
        <ul className="MovieList-ul">
        { this.state.films.map(film => (
          <li className="MovieList-li" key={ film.episode }>
            <a onClick={() => this.props.setFilm(film.episode)}>
              { film.title || 'No Title' }
            </a>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}


export { MovieList }