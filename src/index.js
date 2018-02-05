import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import {compose} from "redux"
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
let store
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        rootReducer,
        applyMiddleware(...middleware)
    );
}else{
    store = createStore(
        rootReducer,
        compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
    );
}

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
