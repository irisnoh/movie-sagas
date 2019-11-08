import React, { Component } from 'react';
import { HashRouter as Link, Route, Router} from 'react-router-dom';
import { connect } from 'react-redux';
import MovieDetails from '../MovieDetails/MovieDetails'

class Movie extends Component {
  // Renders the entire app on the DOM

  getMovie() {
    this.props.dispatch({ type: 'GET_MOVIE' })
}
  render() {
    return (
      <>
    <div>Movie Page:</div>
    {/* {this.props.reduxState.movies.map((movie, i) => {
                        return (<li key={i}>{movie.name}  */}
                        {/* <DeleteForeverIcon color='secondary' size='small' variant='outlined' 
                            onClick={()=>this.deletePlant(plant.id)}>DELETE
                        </DeleteForeverIcon>
                        <LocalFloristSharpIcon color="secondary" fontSize="small" onClick={()=>this.handlePlantClick(plant)}/> */}
                        {/* </li>)
                    })} */}

 <pre>
          {JSON.stringify(this.props.reduxState, null, 2)}
        </pre>
     </>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});


export default connect(mapReduxStateToProps)(Movie);





