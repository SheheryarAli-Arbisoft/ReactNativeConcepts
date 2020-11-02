import 'react-native-get-random-values';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { Container } from './components/Container';
import { Home } from './screens';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Home />
      </Container>
    </Provider>
  );
};

export default App;
