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

export const Route1 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Route 1</Text>
      <Button
        title='Go to route 2'
        onPress={() => navigation.navigate('Route 2')}
      />
    </SafeAreaView>
  );
};
