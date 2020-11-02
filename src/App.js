import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </Provider>
  );
};

export default App;
