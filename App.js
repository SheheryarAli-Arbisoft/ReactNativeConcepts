import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Button Clicked!')}
      >
        <Text style={styles.text}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
