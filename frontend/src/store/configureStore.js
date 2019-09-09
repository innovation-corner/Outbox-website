import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import logger from "redux-logger"; 
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { rootReducer } from './reducers/index';

export const history = createBrowserHistory();

function configureStore(preloadedState) {
    const store = createStore(
        rootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
                logger
            ),
        ),
    )
  
    return store
}

export default configureStore;