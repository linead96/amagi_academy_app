import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import FlashCardScreen from '../screens/FlashCardScreen';
import AnswerKeyScreen from '../screens/AnswerKeyScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
};

const SectionStack = createStackNavigator(
  {
    Section: SectionScreen,
    FlashCard: FlashCardScreen,
    AnswerKey: AnswerKeyScreen
  },
  {
    initialRouteName: 'Section'
  }
  );

SectionStack.navigationOptions = {
  tabBarLabel: 'Sections',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-planet' : 'md-planet'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  SectionStack,
});
