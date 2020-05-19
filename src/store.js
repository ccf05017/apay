import { createStore } from 'redux';

const initialState = {
    loginResult: false
}

//Action type
const LOGIN = 'LOGIN';

//Action function
const logIn = () => {
    return {
        type: LOGIN
    };
}

//Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loginResult: true
            }
        default:
            return state;
    }
}

//Store
const store = createStore(reducer);

//Listener
const listener = () => {
    const state = store.getState();
}

const unsubscribe = store.subscribe(listener);

store.dispatch(logIn());