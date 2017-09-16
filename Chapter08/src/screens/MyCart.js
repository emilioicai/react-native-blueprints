import React from 'react';
import { ScrollView, View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListItem, Thumbnail, Text, Icon, Button, Badge } from 'native-base';

import * as ProductActions from '../reducers/products';

class MyCart extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    tabBarIcon: () => <Icon name="cart" />,
  };

  onTrashPress(product) {
    this.props.removeProductFromCart(product);
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 20 }}>
        {this.props.cart.map((p, i) => (
          <ListItem key={i} style={{ justifyContent: 'space-between' }}>
            <Badge primary>
              <Text>{p.quantity}</Text>
            </Badge>
            <Text> {p.name}</Text>
            <Button
              icon
              danger
              small
              light
              onPress={() => this.onTrashPress(p)}
            >
              <Icon name="trash" />
            </Button>
          </ListItem>
        ))}
        {this.props.cart.length > 0 && (
          <View>
            <Text style={{ alignSelf: 'flex-end', margin: 10 }}>
              Total: ${this.props.cart.reduce(
                (sum, p) => sum + p.price * p.quantity,
                0,
              )}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Button
                style={{ margin: 10 }}
                onPress={() => this.props.navigation.navigate('Home')}
              >
                <Text>Keep buying</Text>
              </Button>
              <Button style={{ margin: 10 }}>
                <Text>Confirm purchase</Text>
              </Button>
            </View>
          </View>
        )}
        {this.props.cart.length == 0 && (
          <Text style={{ alignSelf: 'center', margin: 30 }}>
            There are no producs in the cart
          </Text>
        )}
      </ScrollView>
    );
  }
}

MyCart.propTypes = {
  cart: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    cart: state.productsReducer.cart || [],
  };
}
function mapStateActionsToProps(dispatch) {
  return bindActionCreators(ProductActions, dispatch);
}

export default connect(mapStateToProps, mapStateActionsToProps)(MyCart);
