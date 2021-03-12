import { SwapiMovieMod } from './swapi-movie-mod.js'
import { MockMovieMod } from './mock-movie-mod.js'

class MovieModel {
  constructor(AltMovieMod) {
    this.module = new AltMovieMod()
    this.films = []
  }

  /**
   * Retreive all films from cache or a service.
   * @returns {array|Promise} cached films array or Promise module->getMovie.
   */
  getMovies() {
    if (this.films.length) {
      return this.films
    }

    return this.module.getMovies()
      .then(films => {
        this.films = films
        return films
      })
      .catch(err => console.log({ err, msg: 'no films returned' }),
        this.films)
  }

  /**
   * Retreive details of a film in memory.
   * @returns {object} movie object
   */
  getDetail(movieId) {
    const found = this.films.filter(f => f.episode == movieId)
    if (found.length) {
      return Promise.resolve(found[0])
    }

    return Promise.reject(new Error('Invalid Movie Id: ', movieId))
  }
}


const movieModel = new MovieModel(
  // MockMovieMod
  SwapiMovieMod
)

export { movieModel } 