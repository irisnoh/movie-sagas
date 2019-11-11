import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Movie extends Component {

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    this.props.dispatch({ type: 'GET_MOVIE' })
  }

  // handleMovieClick=(id)=>{
  //   this.props.dispatch({ type: "GET_DETAILS", payload: id });
  //   this.props.history.push(`/details`)
  // }

  handleMovieClick=(movie)=>{
    this.props.dispatch({ type: "FIND_MOVIE", payload: movie });
    this.props.history.push(`/details`)
  }

  render() {
    return (
      <>
        {this.props.reduxState.movies.map((movie, i) =>
        {
          return (
            <>
             <div key={i}> <h1>{movie.title} </h1>
              <img src={movie.poster} alt={movie.title}
                onClick={() => this.handleMovieClick(movie)} />
              <p>{movie.description}</p>
              </div>

            </>
          )
        })}

        <pre>
          {JSON.stringify(this.props.reduxState.movies, null, 2)}
        </pre>
      </>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});


export default withRouter(connect(mapReduxStateToProps)(Movie));





