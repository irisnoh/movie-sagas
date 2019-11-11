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
    yield takeEvery('GET_DETAILS', getMovieDetailsSaga)
    yield takeEvery('UPDATE_DETAILS', updateDetails)
    yield takeEvery('EDIT_DETAILS', editDetailsSaga)

    ;
}
  function* getMovieDetailsSaga(action) {
    try {
        const movieDetails = yield axios.get(`/movie/${action.payload}`)
        // const movieGenre = yield axios.get(`/movie/genre/${action.payload}`)
        yield put({type: 'SET_DETAILS', payload: [movieDetails.data[0]]})
    }
    catch (error) {
        console.log('error in getMovieDetailsSaga', error);
    }
}
function* updateDetails(action) {
    try {
        console.log(action.payload)
        yield axios.put(`/movie/${action.payload.id}`, {title: action.payload.title, description: action.payload.description});
        yield put ({ type: 'GET_MOVIE', payload: action.payload.id})
    } catch(error) {
        console.log('error fetching edit updates', error)
    }
}
function* editDetailsSaga(action) {
    try {
        yield axios.put(`/movie/${action.payload.id}`, action.payload);
        // yield put({type: 'SEE_INFO', payload: action.payload.id});
        yield put({type: 'GET_MOVIES'})
    } catch(error) {
         console.log('error in editDescriptionSaga', error)
    }
}

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


// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const movieDetails = (state = {}, action) => {
    console.log(action);
  switch (action.type) {
      case "SET_DETAILS": 
    return {details: action.payload[0], genres: action.payload[1]};
 default: 
    return state;
}}
  const myMovie = (state = {}, action) => {
      console.log(action);
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
        myMovie,
        movieDetails
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
