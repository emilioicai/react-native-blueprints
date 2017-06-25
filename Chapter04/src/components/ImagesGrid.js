import React from 'react';
import { Image, TouchableOpacity, ScrollView, Dimensions, View } from 'react-native';

var {height, width} = Dimensions.get('window');

export default class ImagesGrid extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={{flexDirection: 'row', width, alignItems: 'flex-start',flexWrap: 'wrap'}}>
          {
            this.props.images && 
            this.props.images.map(img => {
              return (<Image style={{width: (width/3 - 2), margin: 1, height: (width/3 - 2), resizeMode: 'cover'}} key={img.id} source={{uri: img.src}}/>);
            })
          }
        </View>
      </ScrollView>
    );
  }
}