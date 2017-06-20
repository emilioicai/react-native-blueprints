import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from '../actions';

const initialState = {
  products: null,
  error: null
}

export default function (state = initialState, action) {
  switch(action.type){
    case FETCH_PRODUCTS: 
      return Object.assign({}, state, {
        products: null,
        error: null
      });
    case FETCH_PRODUCTS_SUCCESS: 
      return Object.assign({}, state, {
        products: action.products,
        error: null
      });
    case FETCH_PRODUCTS_ERROR: 
      return Object.assign({}, state, {
        products: null,
        error: action.error
      });
    default:
      return state;
  }
}