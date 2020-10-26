import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    fontSize: 26,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#c0c0c0',
    padding: 10,
    marginBottom: 20,
  },
});

const App = () => {
  const [textInputValue, setTextInputValue] = useState('Hello world');
  const [numberInputValue, setNumberInputValue] = useState('123456');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Simple Text Input</Text>
      <TextInput
        value={textInputValue}
        onChangeText={text => setTextInputValue(text)}
        style={styles.textInput}
      />

      <Text style={styles.text}>Numeric Text Input</Text>
      <TextInput
        value={numberInputValue}
        onChangeText={text => setNumberInputValue(text)}
        keyboardType='numeric'
        style={styles.textInput}
      />

      <Text style={styles.text}>Password Text Input</Text>
      <TextInput secureTextEntry={true} style={styles.textInput} />
    </View>
  );
};

export default App;
