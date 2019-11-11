import React, {Component} from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieEdit from '../MovieEdit/MovieEdit'


class App extends Component {


  render() {
    return (
      <>
      <div className="App-header">
       <Router >
          <div>
            <Route exact path="/movie" component={MovieList} />
            <Route exact path='/details' component={MovieDetails} />
            <Route exact path='/edit' component={MovieEdit} />

          </div>

        </Router>
        </div>
      </>

    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState,
});
export default connect(mapReduxStateToProps)(App);
