const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';

export const logIn = (isAuthenticated) => ({ type: LOGIN, isAuthenticated });
export const logOut = () => ({ type: LOGOUT });

const initialState = {
    isAuthenticated: false
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated : action.isAuthenticated
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state;
    }
}