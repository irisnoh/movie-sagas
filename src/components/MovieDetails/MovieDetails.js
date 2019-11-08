import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

class MovieDetails extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <>
    <div>Movie Details</div>
    {/* <Route exact path="/movie:id" component={MovieList}/> */}

     </>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});


export default connect(mapReduxStateToProps)(MovieDetails);





