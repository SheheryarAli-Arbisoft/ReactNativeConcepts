import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

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

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
    </SafeAreaView>
  );
};
