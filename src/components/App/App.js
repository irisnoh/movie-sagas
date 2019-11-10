import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieEdit from '../MovieEdit/MovieEdit'

import Header from '../Header/Header';

// class App extends Component {
//   // Renders the entire app on the DOM
//   render() {
//     return (
//       <>
//         <div className="App">
//         </div>
//         <Router >
//           <div>
//             <Header />
//             <Route exact path="/movie" component={Movie} />
//             {/* <Route exact path="/details" component={MovieDetails}/> */}
//             <Route exact path='/movie/:id' render={() => <MovieDetails myMovie={reduxState.myMovie} />} />

//             {/* <Route exact path='/movie/:id' render = {() => <Plant myPlant={props.reduxState.myPlant}/>} /> */}
//           </div>
//           {/* <Link to= "/details">Details</Link> */}

//         </Router>
//         <pre>{JSON.stringify(props.myMovie)}</pre>

//       </>
//     );
//   }
// }
// const mapReduxStateToProps = reduxState => ({
//   reduxState,
// });


// export default connect(mapReduxStateToProps)(App);


const mapReduxStateToProps = reduxState => ({
  reduxState,
});

const App = props => (
  <Router >
    <div>
      {/* <Header /> */}
      <Route exact path="/movie" component={MovieList} />
      {/* <Route exact path="/details" component={MovieDetails}/> */}
      <Route exact path='/details' component={MovieDetails}/>
      <Route exact path='/edit' component={MovieEdit}/>

    </div>
    <pre>{JSON.stringify(props.myMovie)}</pre>

  </Router>

);




export default connect(mapReduxStateToProps)(App);






