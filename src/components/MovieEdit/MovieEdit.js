import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieEdit extends Component {

  handleEditClick=()=> {
    this.props.dispatch({ type: "FIND_MOVIE_ID", payload: this.props.movie.id });
    this.props.dispatch({ type: "FIND_MOVIE", payload: this.props.movie });
    this.props.history.push(`/edit`)
  }
handleCancelButton=()=>{
  console.log('in cancel from edit')
  this.props.history.push(`/details`)
}
  render() {
    return (
      <>
       Edit Page
       <button onClick={this.handleCancelButton}>Cancel</button>
       <button>Save</button>
       <input></input>

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


export default withRouter(connect(mapReduxStateToProps)(MovieEdit));

// const mapReduxStateToProps = reduxState => ({
//   reduxState,
// });