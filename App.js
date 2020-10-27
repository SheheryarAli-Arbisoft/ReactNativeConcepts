import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.5,
  },
  text: {
    fontSize: 30,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('./react-native-logo.png')}
          resizeMode='contain'
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default App;
