import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import FlashCardScreen from '../screens/FlashCardScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});


const HomeStackTabBarIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
  />
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: HomeStackTabBarIcon,
};

const SectionStack = createStackNavigator(
  {
    Section: SectionScreen,
    FlashCard: FlashCardScreen,
  },
  {
    initialRouteName: 'Section',
  },
);

const SectionStackTabBarIcon = ({ focused }) => (
  <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? 'ios-planet' : 'md-planet'}
  />
);

SectionStack.navigationOptions = {
  tabBarLabel: 'Sections',
  tabBarIcon: SectionStackTabBarIcon,
};

HomeStackTabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

SectionStackTabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

export default createBottomTabNavigator({
  HomeStack,
  SectionStack,
});
