import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class DisplayTitle extends Component {
  titlePressed(){
    const { title, photos } = this.props;
    Actions.selectedAlbum({ title, photos });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.titlePressed.bind(this)} style={styles.containerStyle}>
        <Text style={styles.headerTitleStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  },
  headerTitleStyle: {
    paddingLeft: 10,
    fontSize: 30,
  },
};

export default DisplayTitle;
