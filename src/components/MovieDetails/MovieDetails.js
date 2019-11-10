import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Movie from '../MovieList/MovieList'
import { withRouter } from 'react-router-dom';

class MovieDetails extends Component {

  // componentDidMount() {
  //   this.getGenres();
  // }

  // getGenres() {
  //   this.props.dispatch({ type: 'GET_GENRE' })
  // }
  // state =  {
  //   description: this.props.reduxState.myMovie.description}
  // Renders the entire app on the DOM
    // componentDidMount(){
    //   this.state
    //   }

    // getMovies() {
    //   this.props.dispatch({ type: 'GET_MOVIE' })
    // }
  // getDetails =()=>{
  //   this.setState({
  //     description: this.props.reduxState.myMovie.description
  //   })
  // }

  // handleMovieClick=()=> {
  //   this.props.dispatch({ type: "FIND_MOVIE_ID", payload: this.props.movie.id });
  //   this.props.dispatch({ type: "FIND_MOVIE", payload: this.props.movie });
  //   this.props.history.push(`/movie/${this.props.movie.id}`)
  // }
handleBackButton=()=>{
  console.log('in back button from details')
  this.props.history.push(`/movie/`)
}
  render() {
    return (
      <>
        {/* <p onChange={this.getDetails}>{this.state.description}</p> */}
        <div>
          {/* <h1>{this.props.movie.title}</h1>
          <img src={this.props.movie.poster}
            onClick={this.handleMovieClick} />
          <p>{this.props.movie.description}</p>
          <p>{this.props.movie.id}</p> */}
          <p key={this.props.reduxState.myMovie.id}>{this.props.reduxState.myMovie.description}</p>
          <button onClick={this.handleBackButton}>Back</button>

          <p>Genre: {this.props.reduxState.myMovie.name}</p>

        </div>

        {/* <pre>
          {JSON.stringify(this.props.movie, null, 2)}
        </pre> */}
         <pre>
          {JSON.stringify(this.props.reduxState.myMovie, null, 2)}
        </pre>
      </>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});


export default withRouter(connect(mapReduxStateToProps)(MovieDetails));

// const mapReduxStateToProps = reduxState => ({
//   reduxState,
// });


// const Movie = (props) => (
//   <>
//   <div className="indivMovie">
//       {/* <h1>{props.myMovie}</h1>  */}
//   </div>

//     <pre>{JSON.stringify(props.myMovie)}</pre>
//     {/* <pre>{JSON.stringify(reduxState)}</pre> */}


//     movieDescription
//   </>
// );

// export default connect(mapReduxStateToProps)(Movie);




