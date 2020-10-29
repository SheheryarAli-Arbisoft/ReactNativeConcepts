import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

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
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen {route.params.id}</Text>
    </View>
  );
};
