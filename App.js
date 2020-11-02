import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container } from './src/components/Container';
import { Text } from './src/components/Text';
import { TextInput } from './src/components/TextInput';
import { Button } from './src/components/Button';

const App = () => {
  const [input, setInput] = useState('');
  const [persistedValue, setPersistedValue] = useState('');

  const handleSubmit = () => {
    if (input === '') {
      Alert.alert('Error occurred', 'Please enter some input');
    } else {
      AsyncStorage.setItem('input', input)
        .then(() => {
          setInput('');
          return AsyncStorage.getItem('input');
        })
        .then(value => {
          setPersistedValue(value);
        });
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('input').then(value => {
      setPersistedValue(value);
    });
  }, []);

  return (
    <Container>
      <Text variant='heading' marginBottom paddingY fontBold>
        {persistedValue}
      </Text>
      <TextInput
        value={input}
        onChangeText={text => setInput(text)}
        placeholder='Enter input here'
      />
      <Button value='Submit' onPress={handleSubmit} />
    </Container>
  );
};

export default App;
