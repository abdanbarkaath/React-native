import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Login from './src/components/Auth/Login';
import Signup from './src/components/Auth/Signup';
import About from './src/components/Layouts/About';
import Home from './src/components/Layouts/Home';
import Discover from './src/components/Layouts/Discover';

export default function App() {
  const RenderIcon = ({ imgSource, isActive, name }) => {
    return <Image source={imgSource} style={[styles.img, isActive && styles.imgOrange]} />;
  };
  const getLabel = (focused, title) => <Text style={[styles.footerLabel, focused && styles.activeTab]}></Text>;

  const Icons = {
    home: require('./assets/icons/icon-book.png'),
    search: require('./assets/icons/icon-search.png'),
    profile: require('./assets/icons/icon-user.png'),
  };

  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} hideNavBar={true} initial={true}></Scene>
        <Scene key="signup" component={Signup} hideNavBar={true}></Scene>
        <Scene hideNavBar key="TabBar" showLabel={false} tabs hideNavBar gesturesEnabled={false} tabBarStyle={styles.tabStyles} labelStyle={styles.footerLabel}>
          <Scene key="discover" icon={({ focused }) => <RenderIcon imgSource={Icons.search} isActive={focused} name={'home'} />}>
            <Scene key="discoverPage" component={() => <Discover disableScroll={() => false} />} hideNavBar={true} />
          </Scene>
          <Scene key="home" tabBarLabel={({ focused }) => getLabel(focused, 'home')} icon={({ focused }) => <RenderIcon imgSource={Icons.home} isActive={focused} name={'home'} />}>
            <Scene key="homePage" component={() => <Home disableScroll={() => false} />} hideNavBar={true} />
          </Scene>
          <Scene key="about" tabBarLabel={({ focused }) => getLabel(focused, 'profile')} icon={({ focused }) => <RenderIcon imgSource={Icons.profile} isActive={focused} name={'about'} />}>
            <Scene key="aboutPage" component={() => <About disableScroll={() => false} />} hideNavBar={true} />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabStyles: {
    backgroundColor: '#fff',
    borderTopColor: 'transparent',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 56,
  },
  footerLabel: {
    fontSize: 18,
    paddingLeft: 0,
    paddingRight: 0,
    position: 'absolute',
    top: 10,
  },
  img: {
    resizeMode: 'cover',
    height: 25,
    width: 25,
    tintColor: '#fd8061',
  },
  imgOrange: {
    tintColor: '#146354',
  },
  activeTab: {
    color: '#40BFFF',
  },
});
