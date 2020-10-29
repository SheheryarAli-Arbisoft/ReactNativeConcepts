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

export const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Details screen</Text>
    </SafeAreaView>
  );
};
