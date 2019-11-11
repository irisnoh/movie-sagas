import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieDetails extends Component {



  handleEditClick = () => {
    this.props.history.push(`/edit`)
  }
  handleBackButton = () => {
    console.log('in back button from details')
    this.props.history.push(`/movie/`)
  }
  render() {
    return (
      <>
        <div>

          <p key={this.props.reduxState.myMovie.id}>{this.props.reduxState.myMovie.description}</p>
          <button onClick={this.handleBackButton}>Back</button>
          <button onClick={this.handleEditClick}>Edit</button>

          <p>Genre: {this.props.reduxState.myMovie.name}</p>

        </div>
        <pre>
          {JSON.stringify(this.props.reduxState.myMovie, null, 2)}
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




