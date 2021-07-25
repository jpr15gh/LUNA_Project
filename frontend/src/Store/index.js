import { createStore } from 'redux';
import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {
    userToken: ''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "auth/login":
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.access,
            };
        case "setToken":
            return {
                ...state, 
                token: action.payload 
            };
        
        case "setRestaurant":
            return {
                ...state, 
                restaurant: action.payload 
            };
        case "setReview":
            return {
                ...state, 
                review: action.payload 
            };

        case "registration_email":
                return { 
                ...state, 
                confirmationEmail: action.payload
            };

        default:
            return state;
    }
}

const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
);

const store = createStore(reducer, enhancer);

export default store;
