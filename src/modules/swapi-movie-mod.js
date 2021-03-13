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
    let mo, da, yr

    return results.map(rec => {
      return {
        title: rec['title'],
        episode: rec['episode_id'],
        relDate: ([yr, mo, da] = rec['release_date'].split('-')
          , `${mo}/${da}/${yr}`),
        crawl: rec['opening_crawl'],
        // break the opeing crawl into paragraphs.
        crawlLines: rec['opening_crawl']
          .split('\r\n\r\n')
          .map(p => p.replace('\r\n', ' ')),
        director: rec['director'],
        producer: rec['producer'],
      }
    })
  }

  getMovies() {
    return axios.get(getPath('films'))
      .then(resp => {
        if (resp.status === 200) {
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