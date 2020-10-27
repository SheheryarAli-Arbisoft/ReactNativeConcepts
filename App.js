import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#cccccc',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />

        <Text style={styles.text}>Hello World</Text>
        <View style={styles.divider} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
