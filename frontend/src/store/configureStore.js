import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger"; 
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers/index';
import rootSaga from './sagas/index';

const configureStore = data => {
    const sagaMiddleware = createSagaMiddleware();
    const finalCreateStore = 
        process.env.NODE_ENV === "development"
            ? applyMiddleware(sagaMiddleware, logger)(createStore) 
            : applyMiddleware(sagaMiddleware)(createStore); 
    
    const store = finalCreateStore(rootReducer, data); 
    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;