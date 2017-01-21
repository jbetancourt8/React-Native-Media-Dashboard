import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  buttonStyle: {
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    margin: 5
  },
  textStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#007aff',
    fontSize: 20,
    fontWeight: 'bold',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
