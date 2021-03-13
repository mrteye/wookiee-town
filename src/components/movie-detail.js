import { movieModel } from '../modules/movie-model.js'
import React from 'react'
import ('./movie-detail.css')

/** Thank you CSS-Tricks for the star wars animation:
 *  https://css-tricks.com/snippets/css/star-wars-crawl-text/
 */

class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.crawlAnimation = false
    this.state = {
      movie: {
      },
    }
  }

  /**
   * Remove the current crawl animation if there is one.
   */
  cancelCrawl() {
    if (this.crawlAnimation) {
      this.crawlAnimation.cancel()
      this.crawlAnimation = false
    }
  }
  /**
   * Start the crawl animation.
   */
  startCrawl() {
    this.crawlAnimation = document.querySelector('.MovieDetail-crawl').animate([{
      top: '40vh',
      transform: 'rotateX(20deg) translateZ(400px)'
    }, {
      top: '-5000px',
      transform: 'rotateX(50deg) translateZ(-3000px)'
    }], 150000)
  }

  componentDidUpdate(prevProps) {
    // Update movie when movie-id changes.
    if (this.props.movieId !== prevProps.movieId) { 
      movieModel.getDetail(this.props.movieId).then(movie => {
        // Clear animation
        this.cancelCrawl()
        return movie
      }).then(movie => {
        // Update state
        if (movie) {
          this.setState({ movie })
          return movie
        }
      }).then(movie => {
        // Reset animation
        this.startCrawl()
        return movie
      })
      .catch(err => console.log({ err, movieId: this.props.movieId }))
    }
  }

  render() {
    // Default movie prompt.
    let movie = (
      <div style={{paddingTop: 15 + 'px'}}>
        <h2>Please select a movie...</h2>
      </div>
    )

    // Movie found: setup details & intro paragraphs.
    if (this.state.movie.title) {
      movie = (
        <div>
          <h3>Released: { this.state.movie.relDate }</h3>
          <h1>{ this.state.movie.title }</h1>
          <div className="MovieDetail-justify"> {
            this.state.movie.crawlLines.map((pg, key) => 
              <p key={key}>{pg}</p>
            )}
          </div>
        </div>
      )
    }

    return (
      <div className="MovieDetail">
        <div className="MovieDetail-fade"></div>
        <div className="MovieDetail-crawl">
        { movie }
        </div>
      </div>
    )
  }
}


export { MovieDetail }