import React from 'react';
import { View, Button, Linking, Alert, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 20,
  },
});

const App = () => {
  const openLink = url => {
    Linking.openURL(url).catch(() =>
      Alert.alert('Error occurred', 'Please try again later')
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title='Open Link 1'
          onPress={() => openLink('https://google.com')}
          style={styles.button}
        />
      </View>

      <View style={styles.button}>
        <Button
          title='Open Link 2'
          onPress={() => openLink('fksdjfdslkfjds')}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default App;
