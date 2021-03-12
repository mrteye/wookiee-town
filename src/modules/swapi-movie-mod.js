import axios from 'axios'

const apiBase = 'https://swapi.dev/api'
function getPath (path, params = '') {
  return `${apiBase}/${path}/${params}`
}

class SwapiMovieMod {
  constructor() {
    this.films = []
  }

  /** Map swapi films results to movie-model.
   * 
   * @param results: results form api/films/ request.
   */
  mapFilms(results) {
    return results.map(rec => {
      return {
        title: rec['title'],
        episode: rec['episode_id'],
        relDate: rec['release_date'].split('-').reverse().join('/'),
        crawl: rec['opening_crawl'],
        director: rec['director'],
        producer: rec['producer'],
      }
    })
  }

  getMovies() {
    return axios.get(getPath('films'))
      .then(resp => {
        if (resp.status == 200) {
          this.films = this.mapFilms(resp.data.results)
        }
        return this.films
      }).catch(err => console.log({
        err,
        msg: 'getMovies Error',
      }))
  }
}


export { SwapiMovieMod } 