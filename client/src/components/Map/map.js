import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./map.css";
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
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
      <div style={{ height: '45vh', width: '45%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDA18Xi0CP_7PZrX8NQd76lngn6VrhOgZQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={35.7796}
            lng={78.6382}
            text={'Raleigh, NC'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;