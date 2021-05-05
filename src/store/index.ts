import {applyMiddleware, createStore} from 'redux';
import rootReducer from './modules/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const middleWares = [sagaMiddleWare];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleWare.run(rootSaga);

export default store;