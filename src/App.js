import 'react-native-get-random-values';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Container } from './components/Container';
import { Home } from './screens';
import { store, persistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Container>
          <Home />
        </Container>
      </PersistGate>
    </Provider>
  );
};

export default App;
