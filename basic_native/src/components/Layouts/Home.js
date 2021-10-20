import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import CarouselComponent from '../common/CarouselComponent';
import HeaderComponent from '../common/HeaderComponent';

export default class Home extends Component {
  render() {
    return (
      <>
        <HeaderComponent title="Home"></HeaderComponent>
        {/* <SafeAreaView> */}
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
          }}
          automaticallyAdjustContentInsets={true}
        >
          <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View>
              <CarouselComponent></CarouselComponent>
            </View>
            <View>
              <View style={{ width: 20, height: 20, backgroundColor: 'red' }}></View>
            </View>
            <View>
              <View style={{ width: 20, height: 20, backgroundColor: 'red' }}></View>
            </View>
            <View>
              <View style={{ width: 20, height: 40, backgroundColor: 'red' }}></View>
            </View>
            <View>
              <View style={{ width: 20, height: 40, backgroundColor: 'red' }}></View>
            </View>
            <View>
              <View style={{ width: 20, height: 70, backgroundColor: 'blue' }}></View>
            </View>
          </View>
        </ScrollView>
        {/* </SafeAreaView> */}
      </>
    );
  }
}
