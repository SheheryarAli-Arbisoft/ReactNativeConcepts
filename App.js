import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './Home';
import { Details } from './Details';

const Stack = createStackNavigator();

const App = () => {
  const linking = {
    prefixes: ['rnapp://'],
    config: {
      screens: {
        Home: {
          screen: Home,
          path: 'home',
        },
        Details: {
          screen: Details,
          path: 'details/:id',
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
