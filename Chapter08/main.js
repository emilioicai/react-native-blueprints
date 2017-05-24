import React from 'react';
import { TabNavigator } from 'react-navigation';

import ProductsList from './screens/ProductsList.js';
import ProductDetail from './screens/ProductDetail.js';
import Search from './screens/Search.js';
import MyCart from './screens/MyCart.js';

const Navigator = TabNavigator({
  ProductsList: { screen: ProductsList },
  ProductDetail: { screen: ProductDetail },
  Search: { screen: Search },
  MyCart: { screen: MyCart }
});

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <Navigator/>;
  }
}