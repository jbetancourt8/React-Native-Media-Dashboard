import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ConnectData from './ConnectData';

class MediaDashboard extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          button={'Back'}
          title={'Media'}
        />

        <View style={styles.mediaListContainer}>
          <ConnectData />
        </View>

      </View>
    );
  }
}

const styles = {
  mediaListContainer: {
    flex: 1
  }
};

export default MediaDashboard;
