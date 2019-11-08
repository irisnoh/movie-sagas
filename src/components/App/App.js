import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Movie from '../Movie/Movie';
import MovieDetails from '../MovieDetails/MovieDetails'

import Header from '../Header/Header';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <>
      <div className="App">
      </div>
       <Router >
       <div>
       <Header/>
          <Route exact path="/movie" component={Movie}/>
          <Route exact path="/details" component={MovieDetails}/>

         {/* <Route exact path='/movie/:id' render = {() => <Plant myPlant={props.reduxState.myPlant}/>} /> */}
       </div>
       <Link to= "/details">Details</Link>

     </Router>
     </>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});


export default connect(mapReduxStateToProps)(App);








