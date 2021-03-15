import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {
    userSigninReducer,
    userRegisterReducer,
  } from './reducers/userReducers';
import {
  messageReducer,
} from './reducers/messageReducers'

const userInfo = Cookie.getJSON('userInfo') || null


const initialState = {
    userSignin: { userInfo },
    messages: []
};
const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    message: messageReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
