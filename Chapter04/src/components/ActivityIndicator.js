import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

export default class CustomActivityIndicator extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'center', padding: 10, backgroundColor: '#f0f0f0'}}>
        <ActivityIndicator style={{marginRight: 10}}/>
        <Text>{this.props.message}</Text>
      </View>
    );
  }
}