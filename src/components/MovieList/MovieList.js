import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './MovieList.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';




class Movie extends Component {
// shows movies on page load
  componentDidMount() {
    this.getMovies();
  }
// function to get all movies from database, goes to movieSaga
  getMovies() {
    this.props.dispatch({ type: 'GET_MOVIE' })
  }
// function goes to myMovie Reducer, on image click, goes to details page and sends movie object to reduxstate
  handleMovieClick = (movie) => {
    this.props.dispatch({ type: "FIND_MOVIE", payload: movie });
    this.props.history.push(`/details`)
  }

  render() {
    return (
      <>
        <div className="MovieList">
          <header className="MovieList-header">
            <h1>Movie Library</h1>
          </header>

          <Card className="movieCard">        
        
            <CardContent>

              {this.props.reduxState.movies.map((movie, i) => {
                return (
                  <>
                    <div key={i}>
                      <Typography variant="h5" component="h2">{movie.title}</Typography>

                      <img src={movie.poster} alt={movie.title}
                        onClick={() => this.handleMovieClick(movie)} />
                      <p>{movie.description}</p>
                    </div>

                  </>
                )
              })}

            </CardContent>

          </Card>

          {/* <pre>
          {JSON.stringify(this.props.reduxState.movies, null, 2)}
        </pre> */}
        </div>
      </>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});


export default withRouter(connect(mapReduxStateToProps)(Movie));



// const useStyles = makeStyles({
//   card: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export default function SimpleCard() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

