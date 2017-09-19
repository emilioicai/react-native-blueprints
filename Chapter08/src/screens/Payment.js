import React from 'react';
import { View } from 'react-native';

import { CreditCardInput } from 'react-native-credit-card-input';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon, Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import * as PaymentsActions from '../reducers/payments';
import LoginOrRegister from '../components/LoginOrRegister';

class Payment extends React.Component {
  static navigationOptions = {
    drawerLabel: 'MyCart',
    tabBarIcon: () => <Icon name="cart" />,
  };

  onCardInputChange(creditCardForm) {
    this.setState({
      validCardDetails: creditCardForm.valid,
      cardDetails: creditCardForm.values,
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          paddingTop: 10,
        }}
      >
        {!this.props.user && (
          <LoginOrRegister
            login={this.props.login}
            register={this.props.register}
            logout={this.props.logout}
            loading={this.props.loading}
            error={this.props.error}
          />
        )}
        {this.props.user && (
          <View>
            <CreditCardInput onChange={this.onCardInputChange} />
            <Button
              block
              style={{ margin: 20 }}
              onPress={() =>
                this.props.pay(
                  this.props.user,
                  this.props.cart,
                  this.statecardDetails,
                )}
              disabled={!this.state.validCardDetails}
            >
              <Text>Register</Text>
            </Button>
          </View>
        )}
      </View>
    );
  }
}

Payment.propTypes = {
  user: PropTypes.object,
  cart: PropTypes.array,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  pay: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    cart: state.productsReducer.cart,
  };
}
function mapStateActionsToProps(dispatch) {
  return bindActionCreators(PaymentsActions, dispatch);
}

export default connect(mapStateToProps, mapStateActionsToProps)(Payment);
