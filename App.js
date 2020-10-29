import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home';
import { Details } from './Details';

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 20,
    color: '#888888',
  },
});

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name='Home'
          component={Home}
          options={{
            title: () => (
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>Home</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name='Details'
          component={Details}
          options={{
            title: () => (
              <View style={styles.tabContainer}>
                <Text style={styles.tabText}>Details</Text>
              </View>
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
