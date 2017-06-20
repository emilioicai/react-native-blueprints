export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export function fetchProducts() {
  return dispatch => {
    dispatch({ type: FETCH_PRODUCTS });
    setTimeout(() => {
      dispatch({ 
        type: FETCH_PRODUCTS_SUCCESS,
        products: [{id: 1, price: 28, name: 'Test prod 1', image: 'http://abc.com/logo.png'}]
      });
    }, 1000);
  };
}
