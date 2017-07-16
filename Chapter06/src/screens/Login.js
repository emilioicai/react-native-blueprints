import React, { PropTypes } from 'react'
import {
  ScrollView,
  TextInput,
  Button,
  Text,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import { observer, inject } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

@inject('users') @observer
class Login extends React.Component {
  state= {
    loginEmail: '',
    loginPassword: '',
    registerEmail: '',
    registerPassword: '',
    registerName: ''
  }

  onPressLogin() {
    this.props.users.login(this.state.loginEmail, this.state.loginPassword);
  }

  onPressRegister() {
    this.props.users.register(this.state.registerEmail, this.state.registerPassword, this.state.registerName);
  }

  render() {
    return (
      <KeyboardAwareScrollView style={{padding: 20, marginTop: 20, backgroundColor: '#eee'}}>
        <Icon name="comments" size={60} color='#ccc' style={{alignSelf: 'center', paddingBottom: 20}}/>
        <View style={{alignItems: 'center', marginBottom: 20}}>
          <Text>- please, login to continue -</Text>
        </View>
        {/*** Login form ***/}
        <View style={{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
          {
            this.props.users.loggingError &&
            <View style={{backgroundColor: '#fcc', borderRadius: 5, alignItems: 'center', marginBottom: 10}}>
              <Text>{this.props.users.loggingError}</Text>
            </View>
          }
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            returnKeyType='next'
            style={{height: 40}}
            onChangeText={(loginEmail) => this.setState({loginEmail})}
            value={this.state.loginEmail}
            placeholder='email'
            onSubmitEditing={(event) => {
              this.refs.loginPassword.focus();
            }}
          />
          <TextInput
            ref='loginPassword'
            style={{height: 40}}
            onChangeText={(loginPassword) => this.setState({loginPassword})}
            value={this.state.loginPassword}
            secureTextEntry={true}
            placeholder='password'
          />
          {
            this.props.users.loggingIn ?
            <ActivityIndicator/>
            :
            <Button
              onPress={this.onPressLogin.bind(this)}
              title='Login'
            />
          }
        </View>
        <View style={{alignItems: 'center', marginTop: 20, marginBottom: 20}}>
          <Text>- or register -</Text>
        </View>
        {/*** Registration form ***/}
        <View style={{backgroundColor: 'white', padding: 15, borderRadius: 10}}>
          {
            this.props.users.registeringError &&
            <View style={{backgroundColor: '#fcc', borderRadius: 5, alignItems: 'center', marginBottom: 10}}>
              <Text>{this.props.users.registeringError}</Text>
            </View>
          }
          <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            returnKeyType='next'
            style={{height: 40}}
            onChangeText={(registerEmail) => this.setState({registerEmail})}
            value={this.state.registerEmail}
            placeholder='email'
            onSubmitEditing={(event) => {
              this.refs.registerName.focus();
            }}
          />
          <TextInput
            ref='registerName'
            style={{height: 40}}
            onChangeText={(registerName) => this.setState({registerName})}
            returnKeyType='next'
            value={this.state.registerName}
            placeholder='name'
            onSubmitEditing={(event) => {
              this.refs.registerPassword.focus();
            }}
          />
          <TextInput
            ref='registerPassword'
            style={{height: 40}}
            onChangeText={(registerPassword) => this.setState({registerPassword})}
            value={this.state.registerPassword}
            secureTextEntry={true}
            placeholder='password'
          />
          {
            this.props.users.registering ?
            <ActivityIndicator/>
            :
            <Button
              onPress={this.onPressRegister.bind(this)}
              title='Register'
            />
          }
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default Login;
