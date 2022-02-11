import React, { FC } from 'react'
import { Block } from '@onextech/material-ui-landing/core'
import { Button, Typography } from '@mui/material'

const Explore: FC = () => (
  <Block bg={{ src: '/home/explore.png' }} textAlign="center" color="white">
    <Typography variant="h3" mb={3} p={2}>
      Find Your Perfect Realtor
    </Typography>
    <Button variant="outlined" color="inherit" sx={{ borderRadius: 0, padding: '15px 30px' }}>
      Explore Now
    </Button>
  </Block>
)

export default Explore
