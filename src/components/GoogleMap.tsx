import React from 'react'
import clsx from 'clsx'
import makeStyles from '@mui/styles/makeStyles'
import config from '../config'
import useScript from '../utils/useScript'

interface GoogleMapProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string // kebabcase
  latitude: number
  longitude: number
  /*
  approx zoom levels
  1: World
  5: Landmass/continent
  10: City
  15: Streets
  20: Buildings
  */
  zoom?: number
  marker?: string
}

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
  },
})

const GoogleMap: React.FC<GoogleMapProps> = (props) => {
  const { name, latitude, longitude, zoom = 15, marker = '', className, ...rest } = props
  const classes = useStyles()

  // initScript
  useScript(
    'map-init-script',
    null,
    `function initMap() {
      const location = { lat: ${latitude}, lng: ${longitude} }
      const element = document.getElementById('${name}')

      if (element) {
        const map = new google.maps.Map(element, {
          center: location,
          zoom: ${zoom}
        });
        const marker = new google.maps.Marker({position: location, map: map, icon: "${marker}"});
      }
    }`
  )
  // apiScript
  useScript(
    'map-api-script',
    `https://maps.googleapis.com/maps/api/js?key=${config.google.maps.key}&callback=initMap`,
    null,
    {
      async: true,
      defer: true,
    }
  )
  return <div id={name} className={clsx(classes.root, className)} {...rest} />
}

export default GoogleMap
