import React from 'react';
import { View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon, Text, Button } from 'native-base';
import * as ProductActions from '../reducers/products';

class MyProfile extends React.Component {
  static navigationOptions = {
    drawerLabel: 'My Profile',
    tabBarIcon: () => <Icon name="person" />,
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ margin: 20 }}>
          <Button>
            <Text>Login</Text>
          </Button>
        </View>
        <Text>or</Text>
        <View style={{ margin: 20 }}>
          <Button>
            <Text>Register</Text>
          </Button>
        </View>
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

export default connect(mapStateToProps, mapStateActionsToProps)(MyProfile);
