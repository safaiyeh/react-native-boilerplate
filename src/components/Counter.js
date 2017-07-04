import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from '../actions';

class Counter extends Component {

  onIncrement = () => {
    this.props.increment(this.props.value);
  }

  onDecrement = () => {
    this.props.decrement(this.props.value);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{this.props.value}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Increment"
            color="#4CAF50"
            onPress={this.onIncrement}
          />
          <Button
            title="Decrement"
            color="#F44336"
            onPress={this.onDecrement}
          />
        </View>
      </View>
    );
  }
}
Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const mapStateToProps = ({ counter }) => {
  const { value } = counter;

  return { value };
};


export default connect(mapStateToProps, {
  increment,
  decrement,
})(Counter);
