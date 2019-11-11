import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

class MovieDetails extends Component {
  // go to /edit page
  handleEditClick = () => {
    this.props.history.push(`/edit`)
  }
  // go back to /movie page
  handleBackButton = () => {
    console.log('in back button from details')
    this.props.history.push(`/movie/`)
  }
  render() {
    return (
      <>
        <div>
          <p> {this.props.reduxState.myMovie.description}</p>
          <p>Genre: {this.props.reduxState.myMovie.name}</p>
          <Button variant="outlined" color="secondary" onClick={this.handleBackButton}>Back</Button>
          <Fab color="secondary" aria-label="edit" onClick={this.handleEditClick} >
            <EditIcon />
          </Fab>
        </div>

        {/* <pre>
          {JSON.stringify(this.props.reduxState.myMovie, null, 2)}
        </pre> */}

      </>
    );
  }
}
const mapReduxStateToProps = reduxState => ({
  reduxState,
});


export default withRouter(connect(mapReduxStateToProps)(MovieDetails));


