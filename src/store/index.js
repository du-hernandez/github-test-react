import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const middlewar = [sagaMiddleware]

export const store = createStore(
    rootReducer, applyMiddleware(...middlewar)
);

sagaMiddleware.run(rootSaga);
