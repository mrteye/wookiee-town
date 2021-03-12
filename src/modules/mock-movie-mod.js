class MockMovieMod {
  constructor() {
    this.films = [{
      title: 'x',
      episode: 1,
      relDate: '10/15/2010',
      crawl: '...this \n\ris the beginning of a great\n\rmoive',
      directory: 'lucas',
      producer: 'bob',
    }, {
      title: 'y',
      episode: 2,
      relDate: '10/15/1987',
      crawl: '...this \n\ris the middle of a great\n\rmoive',
      directory: 'lucas',
      producer: 'mark',
    }, {
      title: 'z',
      episode: 3,
      relDate: '10/15/1985',
      crawl: '...this \n\ris the end of a great\n\rmoive',
      directory: 'lucas',
      producer: 'john',
    }]
  }

  getMovies() {
    return Promise.resolve(
      this.films
    )
  }
}


export { MockMovieMod } 