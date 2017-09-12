import { get } from '../api';

// Actions
const FETCH = 'products/FETCH';
const FETCH_SUCCESS = 'products/FETCH_SUCCESS';
const FETCH_ERROR = 'products/FETCH_ERROR';
const ADD_TO_CART = 'products/ADD_TO_CART';

// Reducer
const initialState = {
  loading: false,
  cart: [],
  products: [],
};
export default function reducer(state = initialState, action = {}) {
  let product;
  switch (action.type) {
    case FETCH:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, products: action.payload.products, loading: false };
    case FETCH_ERROR:
      return { ...state, error: action.payload.error, loading: false };
    case ADD_TO_CART:
      product = state.cart.find(p => p.id === this.action.payload.product.id);
      if (product) {
        product.quantity += this.action.payload.product.quantity;
        return {
          ...state,
          cart: state.cart.slice(),
        };
      }
      return {
        ...state,
        cart: state.cart.slice().concat([this.action.payload.product]),
      };
    default:
      return state;
  }
}

// Action Creators
export function addProductToCart(product) {
  return { type: ADD_TO_CART, product };
}

export function fetchProducts() {
  return dispatch => {
    dispatch({ type: FETCH });
    get('/products')
      .then(products =>
        dispatch({ type: FETCH_SUCCESS, payload: { products } }),
      )
      .catch(error => dispatch({ type: FETCH_ERROR, payload: { error } }));
  };
}
