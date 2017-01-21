import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

class DisplayTitle extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.headerTitleStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1
  },
  headerTitleStyle: {
    paddingLeft: 10,
    fontSize: 30
  }
}

export default DisplayTitle;
