import Router from 'next/router'
import config from '../config'

// https://developers.facebook.com/docs/facebook-pixel
export const initFP = async () => {
  if (!config?.analytics?.fp?.pixelId) return

  // https://github.com/zsajjad/react-facebook-pixel/issues/53#issuecomment-672541479
  const { default: ReactPixel } = await import('react-facebook-pixel')
  ReactPixel.init(config.analytics.fp.pixelId)

  // Track initial route
  ReactPixel.pageView()
  // Track on route change
  Router.events.on('routeChangeComplete', () => {
    ReactPixel.pageView()
  })
}

export default { initFP }
