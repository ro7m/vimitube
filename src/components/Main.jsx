import React from 'react';

import NavigationBar from './NavigationBar.jsx';
import SearchResult from './SearchResult.jsx';
import Screening from './Screening.jsx';

class Main extends React.Component {
  
  startPlaying (videoId) {
    this.setState({ playing: videoId });
  }

  render () {
    if ( this.props.screening ) return <Screening {...this.props} />;
    return (
      <div>
        <NavigationBar {...this.props} />
        <SearchResult {...this.props} />
      </div>
    );
  }
}

export default Main;
