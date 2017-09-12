import React from 'react';
import {
  DrawerNavigator,
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import { Platform } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/app';
import productsReducer from './reducers/products';
import userReducer from './reducers/user';

import ProductList from './screens/ProductList';
import ProductDetail from './screens/ProductDetail';
import MyCart from './screens/MyCart';
import MyProfile from './screens/MyProfile';
import Sales from './screens/Sales';

const NestedNavigator = StackNavigator({
  ProductList: { screen: ProductList },
  ProductDetail: { screen: ProductDetail },
});

let Navigator;
if (Platform.OS === 'ios') {
  Navigator = TabNavigator(
    {
      Home: { screen: NestedNavigator },
      MyCart: { screen: MyCart },
      MyProfile: { screen: MyProfile },
      Sales: { screen: Sales },
    },
    {
      tabBarOptions: {
        inactiveTintColor: '#aaa',
        activeTintColor: '#000',
        showLabel: true,
      },
    },
  );
} else {
  Navigator = DrawerNavigator({
    Home: { screen: NestedNavigator },
    MyCart: { screen: MyCart },
    MyProfile: { screen: MyProfile },
    Sales: { screen: Sales },
  });
}

const store = createStore(
  combineReducers({ appReducer, productsReducer, userReducer }),
  applyMiddleware(thunk),
);

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
