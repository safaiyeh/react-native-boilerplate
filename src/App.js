import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Counter from './components/Counter';
import store from './store';

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Counter />
    </View>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('RNBoilerplate', () => App);
export default App;
