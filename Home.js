import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Route1 } from './Route1';
import { Route2 } from './Route2';

const Stack = createStackNavigator();

export const Home = () => {
  return (
    <Stack.Navigator initialRouteName='Route 1'>
      <Stack.Screen name='Route 1' component={Route1} />
      <Stack.Screen name='Route 2' component={Route2} />
    </Stack.Navigator>
  );
};
