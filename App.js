import React, { useState } from 'react';
import { Container } from './src/components/Container';
import { TextInput } from './src/components/TextInput';

const App = () => {
  const [input, setInput] = useState('');

  return (
    <Container>
      <TextInput
        value={input}
        onChangeText={text => setInput(text)}
        placeholder='Enter input here'
      />
    </Container>
  );
};

export default App;
