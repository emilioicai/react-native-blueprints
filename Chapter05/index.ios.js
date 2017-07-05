import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  Dimensions,
  NativeModules
} from 'react-native';
import { getClosestString } from './src/utils/'

var FrequencyDetector = NativeModules.FrequencyDetector;
var {height, width} = Dimensions.get('window');

export default class guitarTuner extends Component {
  state = {
    delta: null,
    stringNumber: null
  }

  componentWillMount() {
    FrequencyDetector.initialise();
    setInterval(() => {
      FrequencyDetector.getFrequency((res, freq) => {
        let stringData = getClosestString(parseInt(freq));
        if(!stringData) {
          this.setState({
            delta: null,
            stringNumber: null
          });
        } else {
          this.setState({
            delta: stringData.delta,
            stringNumber: stringData.number
          });
        }
      });
    }, 3000);
  }

  render() {
    let xIndicator = (width/2) + (this.state.delta*width/2)/100;
    return (
      <View style={styles.container}>
        <Image source={require('./img/tuner.jpg')} style={styles.tuner}/>
        <Image source={require('./img/indicator.jpg')} style={[styles.indicator, {left: xIndicator}]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tuner: {
    width,
    resizeMode: 'cover'
  },
  indicator: {
    position: 'absolute',
    top: 10
  }
});

AppRegistry.registerComponent('guitarTuner', () => guitarTuner);
