import React from 'react';
import {
  View, // Used to render a native view component
  Text, // User to render a native text component
  Button, // User to render a native button component
  StyleSheet, // User to create a style sheet for holding all the styles
} from 'react-native';

// All the styles used are created with the StyleSheet API
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
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Button title='Click Me' onPress={() => alert('Button clicked!')} />
    </View>
  );
};

export default App;
