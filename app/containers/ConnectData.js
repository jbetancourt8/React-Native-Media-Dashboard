import React, { Component } from 'react';
import {
  View,
  ListView,
} from 'react-native';
import { connect } from 'react-redux';
import DisplayTitle from './DisplayTitle';
import DisplayMedia from './DisplayMedia';

class ConnectData extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.media);
  }

  renderRow(rowData) {
    const { title, photos } = rowData;
    return (
      <View>
        <DisplayTitle title={title} photos={photos} />
        <DisplayMedia photos={photos} />
      </View>
    );
  }
  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    media: state.media.animal,
  };
};

export default connect(mapStateToProps)(ConnectData);
