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
    yield takeEvery('EDIT_DETAILS', editDetailsSaga);
}
 // takes in new title and description and goes to server and run PUT
function* editDetailsSaga(action) {
    try {
        yield axios.put(`/movie/${action.payload.id}`, action.payload);
        yield put({type: 'GET_MOVIES'})
    } catch(error) {
         console.log('error in editDescriptionSaga', error)
    }
}
// gets movieSaga movies from server to reducer
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

// Used to store movies and genre returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}
// movie that was clicked on
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
        myMovie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
