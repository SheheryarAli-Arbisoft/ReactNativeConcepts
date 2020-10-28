import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Keyboard,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    flex: 1,
    paddingTop: 200,
    paddingBottom: 500,
  },
  text: {
    fontSize: 30,
  },
  textInput: {
    fontSize: 30,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#cecece',
    width: '100%',
  },
});

const App = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => {
      setScrollEnabled(true);
    });

    const hideListener = Keyboard.addListener('keyboardDidHide', () => {
      setScrollEnabled(false);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: '100%' }} scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <Text style={styles.text}>First Input</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.text}>Second Input</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.text}>Third Input</Text>
          <TextInput style={styles.textInput} />
          <Text style={styles.text}>Fourth Input</Text>
          <TextInput style={styles.textInput} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
