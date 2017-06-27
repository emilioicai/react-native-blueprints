import React from 'react';
import { View, Image } from 'react-native';
import { Icon, Button } from 'native-base';
import { Platform } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={{paddingTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' , borderBottomWidth: 1, borderBottomColor: '#ccc'}}>
        {
          Platform.OS === 'android' &&
          <Button transparent onPress={this.props.onMenuButtonPress}>
            <Icon ios='ios-menu' android='md-menu' style={{fontSize: 30, color: 'black'}}/>
          </Button>
        }
        <Image source={require('../../img/logo.png')} style={{height: 25, resizeMode: 'contain', margin: 10}} />
        {
          Platform.OS === 'android' &&
          <Button onPress={this.props.onCameraButtonPress} transparent>
            <Icon name='camera' style={{fontSize: 30, color: 'black'}}/>
          </Button>
        }
      </View>
    );
  }
}