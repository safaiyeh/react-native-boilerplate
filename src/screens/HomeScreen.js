import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Counter from '../components/Counter';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default HomeScreen;
