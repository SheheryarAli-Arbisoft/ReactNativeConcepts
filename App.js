import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './Home';
import { Details } from './Details';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Home screen' }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{ title: 'Details screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
