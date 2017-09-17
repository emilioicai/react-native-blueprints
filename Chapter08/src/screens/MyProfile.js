import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon, Header, Title, Text } from 'native-base';

import * as UserActions from '../reducers/user';
import LoginOrRegister from '../components/LoginOrRegister';

class MyProfile extends React.Component {
  static navigationOptions = {
    drawerLabel: 'My Profile',
    tabBarIcon: () => <Icon name="person" />,
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
        }}
      >
        <Header>
          <Title style={{ paddingTop: 10 }}>My Profile</Title>
        </Header>
        {!this.props.user && (
          <LoginOrRegister
            login={this.props.login}
            register={this.props.register}
          />
        )}
        {this.props.user && <Text>Hello {this.props.user.name}</Text>}
      </View>
    );
  }
}

MyProfile.propTypes = {
  user: PropTypes.any,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user || null,
  };
}
function mapStateActionsToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

export default connect(mapStateToProps, mapStateActionsToProps)(MyProfile);
