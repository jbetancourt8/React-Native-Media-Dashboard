import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  ListView,
} from 'react-native';

const { width } = Dimensions.get('window');
const DEFAULT_ITEM_MARGIN = 2;
const DEFAULT_ITEMS_PER_ROW = 4;
const imageSize = Math.floor(width / DEFAULT_ITEMS_PER_ROW);

class DisplayMedia extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds. cloneWithRows(this.props.photos);
  }

  renderRow(rowData) {
    const { uri } = rowData;

    return (
      <View style={styles.rowStyle}>
        <Image style={styles.imageSize} source={{ uri: uri }} />
      </View>
    );
  }

  render() {
    return (
      <View>
        <ListView
          contentContainerStyle={styles.containerStyle}
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  rowStyle: {
    padding: 1,
    alignSelf: 'flex-start'
  },
  imageSize: {
    width: imageSize - DEFAULT_ITEM_MARGIN,
    height: imageSize - DEFAULT_ITEM_MARGIN
  }
};

export default DisplayMedia;
