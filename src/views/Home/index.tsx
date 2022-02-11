import React, { FC } from 'react'
import { Stack } from '@mui/material'
import Layout from '../../components/Layout/Layout'
import Review from './Review'
import Informations from './Informations'
import Testimonials from './Testimonials'
import Team from './Team'
import Explore from './Explore'

const Home: FC = () => (
  <Layout>
    <Stack spacing={6}>
      <Review />
      <Informations />
      <Testimonials />
      <Team />
      <Explore />
    </Stack>
  </Layout>
)

export default Home
