import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers' //rootReducer trae lo que está exportando index.js de los reducers, es decir, combineReducer

const estadoInicial = {} //Este estado inicial* es el del combineReducer
const middleware = [thunk];

const store = createStore( //Pasar los argumentos de create store, funcionReducer, el estado inicial, funcionMiddleware
    rootReducer, //Este es el combine reducer
    estadoInicial,//Este estado inicial es el estado inicial del combineReducer que apenas se carga está en estado inicial *
    applyMiddleware(...middleware)
)

export default store