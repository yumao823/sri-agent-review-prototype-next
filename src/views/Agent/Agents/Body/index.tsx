import React, { FC } from 'react'
import { Divider, Grid, Stack, Typography } from '@mui/material'
import AgentsFilter from './AgentsFilter'
import AgentsGrid from './AgentsGrid'

const Body: FC = () => (
  <Stack spacing={3} sx={{ p: { xs: 3, sm: 7 } }}>
    <Typography variant="h6">FILTERS</Typography>
    <Divider variant="inset" />
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AgentsFilter />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={9}>
        <AgentsGrid />
      </Grid>
    </Grid>
  </Stack>
)

export default Body
