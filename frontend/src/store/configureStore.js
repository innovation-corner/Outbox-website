import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger"; 
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';

const configureStore = data => {
    const finalCreateStore = 
        process.env.NODE_ENV === "development"
            ? applyMiddleware(thunk, logger)(createStore) 
            : applyMiddleware(thunk)(createStore); 
    
    const store = finalCreateStore(rootReducer, data); 

    return store;
};

export default configureStore;