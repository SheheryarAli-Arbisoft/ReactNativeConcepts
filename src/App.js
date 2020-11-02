import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { Container } from './components/Container';
import { Text } from './components/Text';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Text h1>Todo App</Text>
          <Input placeholder='Enter todo here' />
          <Button title='Add todo' />
        </Container>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
