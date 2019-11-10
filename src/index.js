import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'; 

import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIE', movieSaga)
    yield takeEvery('FIND_MOVIE', movieDescriptionSaga);
    // yield takeEvery('GET_GENRE', movieGenreSaga);

    ;
}
function* movieDescriptionSaga() {
    try {
        const movieResponse = yield axios.get('/movie');
        yield put ({ type: 'GET_MOVIE', payload: movieResponse.data})
    } catch(error) {
        console.log('error fetching movie', error)
    }
  }
//   function* movieGenreSaga() {
//     try {
//         const genreResponse = yield axios.get('/movie/:id');
//         yield put ({ type: 'SET_GENRES', payload: genreResponse.data})
//     } catch(error) {
//         console.log('error fetching genre', error)
//     }
//   }

function* movieSaga() {
    try {
        const movieResponse = yield axios.get('/movie');
        yield put ({ type: 'SET_MOVIES', payload: movieResponse.data})
    } catch(error) {
        console.log('error fetching movie', error)
    }
  }
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}
const moviesDescription = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES_DESCRIPTION':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}



const myMovieId = (state = '', action) => {
    if(action.type === "FIND_MOVIE_ID"){
      return {...state, myMovieId: action.payload}
    } else {
      return state;
    }
  }
  
  const myMovie = (state = {}, action) => {
    if(action.type === "FIND_MOVIE"){
      return action.payload
    } else {
      return state;
    }
  }

  // Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        myMovieId, 
        myMovie,
        moviesDescription
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
