import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { install } from 'redux-loop';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: { counter: { value: 9 }},
  middleware: [logger],
  enhancers: [install({ ENABLE_THUNK_MIGRATION: true })]
});
