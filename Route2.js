import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

export const Route2 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Route 2</Text>
      <Button
        title='Go to route 1'
        onPress={() => navigation.navigate('Route 1')}
      />
    </SafeAreaView>
  );
};
