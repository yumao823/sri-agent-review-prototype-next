import React from 'react'
import Head from 'next/head'
import config from '../src/config'
import Providers from '../src/app/Providers'
import 'swiper/css/swiper.css'
import 'keen-slider/keen-slider.min.css'
import { CacheProvider } from '@emotion/react'
import { createEmotionCache } from '../src/utils/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // @link: https://github.com/zeit/next.js/tree/master/examples/with-dynamic-app-layout
  const Layout = Component.Layout || React.Fragment

  return (
    <CacheProvider value={emotionCache}>
      <Providers pageProps={pageProps}>
        <Layout>
          <Head>
            <title>{config.seo.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta name="description" content={config.seo.description} />
            <meta itemProp="name" content={config.seo.title} />
            <meta itemProp="description" content={config.seo.description} />
            <meta itemProp="image" content={config.seo.image} />
            <meta property="og:url" content={config.seo.url} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={config.seo.title} />
            <meta property="og:description" content={config.seo.description} />
            <meta property="og:image" content={config.seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={config.seo.title} />
            <meta name="twitter:description" content={config.seo.description} />
            <meta name="twitter:image" content={config.seo.image} />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </CacheProvider>
  )
}

export default App
