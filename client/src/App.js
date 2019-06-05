import React from 'react';
import './App.css';
import Sherlock from './assets/sherlock2.png';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 51.509283, lng: -0.127698 }}
  >
    <Marker
      position={{ lat: 51.509283, lng: -0.127698 }}
    />
  </GoogleMap>
));



function App() {
  return (
    <div className="App">
      <MapWithAMarker
      googleMapURL= 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBdf4RIrlAQ1io81BPgnZEhJD98l9Qu_AI&v=3.exp&libraries=geometry,drawing,places'
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />

      <h1> Sherlock Holmes: Democratising UK Police Data</h1>
      <img src={Sherlock} alt="app icon"/>
      <button>View the UK crime map</button>
      <button>Track trends in crime</button>
      <button>Update individual crimes</button>
    </div>
  );
}

export default App;
