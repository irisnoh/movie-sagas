import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


const mapReduxStateToProps = reduxState => ({
    reduxState
});

class MovieEdit extends Component {
// local state that takes in reduxState of myMovie to edit current movie
    state = {
        movie: this.props.reduxState.myMovie,
    }
// cancel button takes back to details page
    handleCancelButton = () => {
        console.log('in cancel from edit')
        this.props.history.push(`/details`)
    }
// home button takes back to main page on /movie
    backToHome = () => {
        this.props.history.push('/movie')
    }
// function to update new description 
    editDescription = (event) => {
        console.log('in editDescription');
        this.setState({
            ...this.state,
            movie: {
                ...this.state.movie,
                description: event.target.value
            }
        })
    }
// function to update new title 

    editTitle = (event) => {
        this.setState({
            ...this.state,
            movie: {
                ...this.state.movie,
                title: event.target.value
            }
        })
    }

// save button sends new details to editDetailSaga and go back to details page
    saveChanges = () => {
        console.log('in saveChanges');
        this.props.dispatch({ type: 'EDIT_DETAILS', payload: this.state.movie })
        this.props.history.push('/details')
    }

    render() {
        return (
            <>
                <h1>Edit Info for {this.props.reduxState.myMovie.title}</h1>

                <Button variant="outlined" color="secondary" onClick={this.backToHome}>Back to List</Button>

                <Button variant="outlined" color="secondary" onClick={this.handleCancelButton}>Cancel</Button>

                <input value={this.state.movie.title} onChange={this.editTitle}></input>
                <input value={this.state.movie.description} onChange={this.editDescription}></input>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                <Button variant="outlined" color="secondary" onClick={this.saveChanges}>Save</Button>
            
            </>
    
        );
    }
}


export default connect(mapReduxStateToProps)(withRouter(MovieEdit));