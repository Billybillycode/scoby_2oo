import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';



const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYmlsbHlub24iLCJhIjoiY2tqc21hcWx0MmppNjJ0bWoxM3M1bnlubSJ9.3XNp0htxBcOFRql0o0g8Hw'
});

render () {
  return {
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

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlsbHlub24iLCJhIjoiY2tqc200eW9xMmp3MzJzbWpicTB0NjFjNyJ9.ygH7xs2mAUYKExk1cICMXQ';
var map = new mapboxgl.Map({
  container: 'mapp',
  style: 'mapbox://styles/mapbox/streets-v11'
});
}