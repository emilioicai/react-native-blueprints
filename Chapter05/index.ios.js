import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  Dimensions,
  NativeModules,
  Animated,
  Easing,
  Text
} from 'react-native';
import { getClosestString } from './src/utils/'

var FrequencyDetector = NativeModules.FrequencyDetector;
var {height, width} = Dimensions.get('window');
const stringNotes = ['E','A','D','G','B','E'];

export default class guitarTuner extends Component {
  state = {
    delta: null,
    stringNumber: null,
    xIndicator:  new Animated.Value(width/2)
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
          Animated.timing(
            this.state.xIndicator,
            {
              toValue: (width/2) + (stringData.delta*width/2)/100,
              duration: 500,
              easing: Easing.elastic(2)
            }
          ).start();
          this.setState({
            delta: stringData.delta,
            stringNumber: stringData.number,
          });
        }
      });
    }, 500);
  }

  render() {
    let { xIndicator } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.tunerContainer}>
          <Image source={require('./img/tuner.jpg')} style={styles.tuner}/>
          <Animated.Image source={require('./img/indicator.jpg')} style={[styles.indicator, {left: xIndicator}]}/>
        </View>
        <View style={styles.stringsContainer}>
          {
            stringNotes.map((note, i) => {
              return (
                <View key={i} style={styles.stringContainer}>
                  <Image source={require('./img/string.jpg')} style={styles.string}/>
                  <View style={[styles.noteContainer, {borderColor: (this.state.stringNumber === (i+1)) ? '#3bd78b' : '#f3c556'}]}>
                    <Text style={styles.note}>
                      {note}
                    </Text>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f2025',
    flex: 1
  },
  tunerContainer: {
    flex: 1,
    backgroundColor: '#1f2025',
    marginTop: height * 0.05
  },
  tuner: {
    width,
    resizeMode: 'contain'
  },
  indicator: {
    position: 'absolute',
    top: 10
  },
  stringsContainer: {
    borderTopColor: '#3bd78b',
    borderTopWidth: 5,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  stringContainer: {
    alignItems: 'center'
  },
  note: {
    color: 'white',
    fontSize: 19,
    textAlign: 'center'
  },
  noteContainer: {
    top: 50,
    height: 50,
    width: 50,
    position: 'absolute',
    padding: 10,
    borderColor: '#f3c556',
    borderWidth: 3,
    borderRadius: 25,
    backgroundColor: '#1f2025'
  }
});

AppRegistry.registerComponent('guitarTuner', () => guitarTuner);
