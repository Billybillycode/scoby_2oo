import React, { Component } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYmlsbHlub24iLCJhIjoiY2tqc200eW9xMmp3MzJzbWpicTB0NjFjNyJ9.ygH7xs2mAUYKExk1cICMXQ",
});
export default class Home extends Component {


  render() {
    return (
      <div id='map'>
      <Map
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100vh',
    width: '100vw'
  }}
>
  <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
  </Layer>
</Map>;
      <h1>mapBox MAP HERE</h1>
      <p>On home /</p>
    </div>
    )
  }
}
