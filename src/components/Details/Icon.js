import L from 'leaflet';
import location from './location.svg'

const IconLocation = new L.Icon({
    iconUrl: location,
    iconRetinaUrl: location,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 40),
    className: 'leaflet-div-icon'
});

export default IconLocation;