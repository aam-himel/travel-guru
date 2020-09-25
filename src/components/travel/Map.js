import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '95%', margin:'0 auto' }}>
          <h1 style={{marginBottom:'2rem'}}>Hotel map</h1>
        <GoogleMapReact
          
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={21.4272}
            lng={92.0058}
            text="Cox's Bazar"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;