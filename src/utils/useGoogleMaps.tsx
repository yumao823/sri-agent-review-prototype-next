import config from '../config'
import useScript from './useScript'

const useGoogleMaps = (locations) => {
  // initScript
  useScript(
    'map-init-script',
    null,
    `function initMaps() {
      function initMap(title, lat, lng, zoom) {
        const location = { lat, lng };
        const map = new google.maps.Map(document.getElementById(title), {
          center: location,
          zoom,
        });
        const marker = new google.maps.Marker({ position: location, map });
      }

      ${locations
        .map(({ title, latitude, longitude, zoom = 15 }) => `initMap('${title}', ${latitude}, ${longitude}, ${zoom});`)
        .join('\n')}
    }`
  )
  // apiScript
  useScript(
    'map-api-script',
    `https://maps.googleapis.com/maps/api/js?key=${config.google.maps.key}&callback=initMaps`,
    null,
    {
      async: true,
      defer: true,
    }
  )
}

export default useGoogleMaps
