import { Body, Header, Right, Title } from 'native-base';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HeaderComponent(props) {
  function _renderHeartImage() {
    return (
      <TouchableOpacity hitSlop={{ top: 5, bottom: 5, left: 10, right: 3 }}>
        <Image style={styles.imageColor} source={require('../../../assets/icons/icon-heart.png')} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <Header style={styles.headerStyle} transparent androidStatusBarColor="#1A476E">
        <Body>
          <Title style={{ color: '#146354' }}>{props.title}</Title>
        </Body>
        <Right>{_renderHeartImage()}</Right>
      </Header>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    paddingLeft: 22,
    paddingRight: 22,
  },
  imageColor: {
    tintColor: '#fd8061',
  },
});
