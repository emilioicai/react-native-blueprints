import { post } from '../api';

// Actions
const LOGIN = 'user/LOGIN';
const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGIN_ERROR = 'user/LOGIN_ERROR';
const REGISTER = 'user/REGISTER';
const REGISTER_SUCCESS = 'user/REGISTER_SUCCESS';
const REGISTER_ERROR = 'user/REGISTER_ERROR';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: null, loading: true, error: null };
    case LOGIN_SUCCESS:
      console.log('--->', action);
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

// Action Creators
export function login({ email, password }) {
  console.log(email, password);
  return dispatch => {
    dispatch({ type: LOGIN });
    post('/login', { email, password })
      .then(user => dispatch({ type: LOGIN_SUCCESS, payload: { user } }))
      .catch(error => dispatch({ type: LOGIN_ERROR, payload: { error } }));
  };
}

export function register({
  email,
  name,
  password,
  address,
  postalCode,
  userAddress,
  city,
}) {
  return dispatch => {
    dispatch({ type: REGISTER });
    post('/register', {
      email,
      name,
      password,
      address,
      postalCode,
      userAddress,
      city,
    })
      .then(user => dispatch({ type: REGISTER_SUCCESS, payload: { user } }))
      .catch(error => dispatch({ type: REGISTER_ERROR, payload: { error } }));
  };
}
