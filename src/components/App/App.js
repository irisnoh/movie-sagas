import React from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieEdit from '../MovieEdit/MovieEdit'
const mapReduxStateToProps = reduxState => ({
  reduxState,
});

const App = props => (
  <Router >
    <div>
      <Route exact path="/movie" component={MovieList} />
      <Route exact path='/details' component={MovieDetails}/>
      <Route exact path='/edit' component={MovieEdit}/>

    </div>
    <pre>{JSON.stringify(props.myMovie)}</pre>

  </Router>

);




export default connect(mapReduxStateToProps)(App);






