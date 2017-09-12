import React from 'react';
import { View, Text } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import * as ProductActions from '../reducers/products';

class MyCart extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    tabBarIcon: () => <Icon name="cart" />,
  };

  render() {
    return (
      <View>
        <Text>My Cart</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
  };
}
function mapStateActionsToProps(dispatch) {
  return bindActionCreators(ProductActions, dispatch);
}

export default connect(mapStateToProps, mapStateActionsToProps)(MyCart);
