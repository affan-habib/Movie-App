import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import ApiReducer from './apiSlice';
import confirmReducer from './confirmSlice';
import toastReducer from './toastSlice';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware(),
  sagaMiddleware
];

export default configureStore({
  reducer: {
    api: ApiReducer,
    confirm: confirmReducer,
    toast: toastReducer,
  },
  middleware
});

sagaMiddleware.run(sagas);
