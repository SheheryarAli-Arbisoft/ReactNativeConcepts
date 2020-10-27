import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello World</Text>
    </SafeAreaView>
  );
};

export default App;
