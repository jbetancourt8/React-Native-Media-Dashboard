import React, { Component } from 'react';
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';
import MediaDashboard from './containers/MediaDashboard';
import SelectedAlbum from './containers/SelectedAlbum';

class RouterComponent extends Component {
  render() {
    return (
      <Router sceneStyle={styles.sceneStyle}>

        <Scene key="main">

          <Scene
            key="mediadashboard"
            component={MediaDashboard}
            initial
            hideNavBar
          />
          <Scene
            key="selectedAlbum"
            component={SelectedAlbum}
            hideNavBar
          />

        </Scene>

      </Router>
    );
  }
}

const styles = {
  sceneStyle: {
    flex: 1
  }
};

export default RouterComponent;
