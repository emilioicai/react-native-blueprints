import React from 'react';
import { View, Button as LinkButton } from 'react-native';
import { Form, Item, Input, Content, Button, Text } from 'native-base';
import PropTypes from 'prop-types';

const Register = props => (
  <View style={{ flex: 1 }}>
    <Content>
      <Form>
        <Item>
          <Input placeholder="e-mail" keyboardType={'email-address'} />
        </Item>
        <Item>
          <Input placeholder="repeat e-mail" />
        </Item>
        <Item>
          <Input placeholder="name" />
        </Item>
        <Item>
          <Input placeholder="password" secureTextEntry />
        </Item>
        <Item>
          <Input placeholder="address" />
        </Item>
        <Item>
          <Input placeholder="postal code" />
        </Item>
        <Item>
          <Input placeholder="city" />
        </Item>
        <Button block style={{ margin: 20 }} onPress={() => props.register()}>
          <Text>Register</Text>
        </Button>
      </Form>
      <LinkButton title={'or Login'} onPress={() => props.changeToLogin()} />
    </Content>
  </View>
);

Register.propTypes = {
  register: PropTypes.func.isRequired,
  changeToLogin: PropTypes.func.isRequired,
};

export default Register;
