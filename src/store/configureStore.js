import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import logger from "redux-logger"; 
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer } from './reducers/index';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './services/localStorageHelper'; 

export const history = createBrowserHistory();
const persistedState = loadState(); 

export default function configureStore() {
    const store = createStore(
        rootReducer(history),
        persistedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
                logger
            ),
        ),
    );

    store.subscribe(throttle(() => { 
        saveState(store.getState()); 
    }, 1000)); 
  
    return store
};
