import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import ApiReducer from './apiSlice';
import favoriteReducer from './favoriteSlice';
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
    favorites: favoriteReducer,
    toast: toastReducer,
  },
  middleware
});

sagaMiddleware.run(sagas);
