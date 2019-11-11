// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

// class MovieEdit extends Component {

//     state = {
//         // mode: true,
//         details: {
//             id: '',
//             title: '',
//             description: '',
//         }
//     }

//     handleClick = (prop) => {
//         if (prop === 'edit') {
//             this.setState({
//                 details: {
//                     // id: this.props.movie.details.id,
//                     // title: this.props.movieDetails.details.title,
//                     // description: this.props.movieDetails.details.description,
//                 }
//             })
//         }
//         this.setState({
//             mode: !this.state.mode
//         })
//     }

//     handleSaveClick = () => {
//         console.log('in save click');
//         this.props.dispatch({ type: 'UPDATE_DETAILS', payload: this.state.details });
//         this.setState({
//             mode: !this.state.mode
//         })
//     }
//     // handleSaveButton = () => {
//     //     console.log('saving in details edit');
//     //     this.props.dispatch({ type: "UPDATE_DETAILS", payload: this.props.update });
//     //     this.props.history.push(`/details`)
//     // }

//     handleCancelButton = () => {
//         console.log('in cancel from edit')
//         this.props.history.push(`/details`)
//     }
//     backToHome = () => {
//         this.props.history.push('/movie')
//     }

//     handleChange = (prop) => (event) => {
//         this.setState({
//             details: {
//                 ...this.state.details,
//                 [prop]: event.target.value
//             }
//         })
//     }
//     render() {
//         return (
//             <>
//                 <button onClick={this.backToHome}>Back to List</button>

//                 <button onClick={this.handleCancelButton}>Cancel</button>
//                 <button onClick={this.handleSaveClick}>Save</button>

//                 <input value={this.state.details.title} onChange={this.handleChange('title')}></input>
//                 <input value={this.state.details.description} onChange={this.handleChange('description')}></input>

//                         <pre>{JSON.stringify(this.state, null, 2)}</pre>
//                         {JSON.stringify(this.props.reduxState.myMovie, null, 2)}
//             </>
//         );
//     }
// }
// const mapReduxStateToProps = reduxState => ({
//     reduxState,
// });

// export default withRouter(connect(mapReduxStateToProps)(MovieEdit));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



const mapReduxStateToProps = reduxState => ({
    reduxState
});

class MovieEdit extends Component {

    state = {
        // movieGenres: this.props.reduxState.myMovie,
        movie: this.props.reduxState.myMovie,
    }
    handleCancelButton = () => {
        console.log('in cancel from edit')
        this.props.history.push(`/details`)
    }
    backToHome = () => {
        this.props.history.push('/movie')
    }


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

    editTitle = (event) => {
        this.setState({
            ...this.state,
            movie: {
                ...this.state.movie,
                title: event.target.value
            }
        })
    }

    handleSaveButton = () => {
        console.log('saving in details edit');
        this.props.dispatch({ type: "EDIT_DETAILS", payload: this.props.movie });
        this.props.history.push(`/details`)
    }
    saveChanges = () => {
        console.log('in saveChanges');
        this.props.dispatch({ type: 'EDIT_DETAILS', payload: this.state.movie })
        // this.props.dispatch({ type: 'EDIT_GENRES', payload: this.props.reduxState.genreChanges })
        this.props.history.push('/details')
    }

    render() {
        return (
            <>
                <h1>Edit Info for {this.props.reduxState.myMovie.title}</h1>

                <button onClick={this.backToHome}>Back to List</button>

                <button onClick={this.handleCancelButton}>Cancel</button>
                <button onClick={this.saveChanges}>Save</button>

                <input value={this.state.movie.title} onChange={this.editTitle}></input>
                <input value={this.state.movie.description} onChange={this.editDescription}></input>
                {/* onChange={this.handleChange('description')} */}
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                {/* {JSON.stringify(this.props.reduxState.myMovie, null, 2)} */}
            </>
            //   <div className="MovieDescription">
            //     <Input placeholder="title" fullWidth={true} value={this.state.movie.title} onChange={this.editTitle}/>
            //     <TextField placeholder="description" multiline={true} fullWidth={true} value={this.state.movie.description} onChange={this.editDescription}/>
            //     <GenreList movie={this.state.movie}/>
            //   </div>
        );
    }
}


export default connect(mapReduxStateToProps)(withRouter(MovieEdit));