import React, { useState } from 'react';
import { Container } from './src/components/Container';
import { Text } from './src/components/Text';
import { TextInput } from './src/components/TextInput';
import { Button } from './src/components/Button';

const App = () => {
  const [input, setInput] = useState('');

  return (
    <Container>
      <Text variant='heading' marginBottom paddingY fontBold>
        Persisted Value
      </Text>
      <TextInput
        value={input}
        onChangeText={text => setInput(text)}
        placeholder='Enter input here'
      />
      <Button value='Submit' />
    </Container>
  );
};

export default App;
