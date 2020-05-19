const LOGIN = 'auth/LOGIN';

export const logIn = () => ({ type: LOGIN });

const initialState = {
    loginResult: true
}

export default function auth(state = initialState, action) {
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