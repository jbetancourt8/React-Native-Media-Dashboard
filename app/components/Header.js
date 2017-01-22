import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Button from './Button';

class Header extends Component {
  render() {
    return(
      <View style={styles.headerStyle}>

        <View style={styles.leftButtonStyle}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Text>{this.props.button}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.titleStyle}>
          <Text style={styles.textStyle}>{this.props.title}</Text>
        </View>

        <View style={styles.rightButtonStyle} />

      </View>
    );
  }
}

const styles = {
  headerStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row'
  },
  leftButtonStyle: {
    flex: 1,
    paddingLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  titleStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightButtonStyle: {
    flex: 1,
    paddingRight: 10,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 26,
    fontWeight: 'bold'
  }
}

export default Header;
