import React from 'react';
import { TabNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/products';

import ProductsList from './screens/ProductsList.js';
import ProductDetail from './screens/ProductDetail.js';
import Search from './screens/Search.js';
import MyCart from './screens/MyCart.js';

const Navigator = TabNavigator({
  ProductsList: { screen: ProductsList },
  Search: { screen: Search },
  MyCart: { screen: MyCart }
});

let store = createStore(combineReducers({ productsReducer }), applyMiddleware(thunk));

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    )
  }
}