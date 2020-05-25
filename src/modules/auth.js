const LOGIN = 'auth/LOGIN';

export const logIn = (shopId, password) => ({ type: LOGIN });

const initialState = {
    loginResult: false
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