import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieEdit extends Component {
state = {
    update: {
    title: '',
    description: ''
    }
}
    handleSaveButton = () => {
        console.log('saving in details edit');
        this.props.dispatch({ type: "UPDATE_DETAILS", payload: this.props.update });
        this.props.history.push(`/details`)
    }


    handleCancelButton = () => {
        console.log('in cancel from edit')
        this.props.history.push(`/details`)
    }

    handleNameChange = (event, property) => {
        console.log('event happended')
        this.setState({
            update: {
                ...this.state.update,
                [property]: event.target.value,
            }
        });
    }
    render() {
        return (
            <>
       <button onClick={this.handleCancelButton}>Cancel</button>
                <button onClick={this.handleSaveButton}>Save</button>
                <input value={this.state.update.title} onChange={ (event) => this.handleNameChange(event, 'title')}></input>
                <input value={this.state.update.description} onChange={ (event) => this.handleNameChange(event, 'description')}></input>


                <pre>
                    {JSON.stringify(this.state, null, 2)}
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