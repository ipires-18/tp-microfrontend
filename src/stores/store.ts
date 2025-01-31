import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watchFetchItems } from './sagas/item-saga';
import itemsReducer from './slice/item-slice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchItems);

export default store;
