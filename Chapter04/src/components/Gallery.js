import React from 'react';
import { List, ListItem, Text, Icon, Button, Container, Content } from 'native-base';
import { Image, Dimensions, View, Share, ActivityIndicator } from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Gallery extends React.Component {
  _share(image) {
   Share.share({message: image.src, title: 'Image from: ' + image.user.name}) 
  }

  render() {
    return (
      <View>
        <List style={{margin: -15}}>
          {
            this.props.imageList && this.props.imageList.map((image) => {
              return (
                <ListItem key={image.id} style={{borderBottomWidth: 0, flexDirection: 'column', marginBottom: -20}}>
                  <View style={{flexDirection: 'row', alignSelf: 'flex-start', padding: 10}}>
                    <Image source={{uri: image.user.pic}} style={{width: 50, height: 50, resizeMode: 'cover', marginRight: 10, borderRadius: 25}}/>
                    <Text style={{fontWeight: 'bold'}}>{image.user.name}</Text>
                  </View>
                  <Image source={{uri: image.src}} style={{width: width, height: 300, resizeMode: 'cover'}}/>
                  <Button style={{position: 'absolute', right: 15, top: 25}} transparent onPress={this._share.bind(this, image)}>
                    <Icon name='ios-more' style={{fontSize: 20, color: 'black'}}/>
                  </Button>
                </ListItem>
              );
            })
          }
        </List>
        {
          this.props.loading &&
          <View style={{justifyContent: 'center', height: (height - 50)}}>
            <ActivityIndicator/>
          </View>
        }
      </View>
    );
  }
}