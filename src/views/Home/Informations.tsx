import React, { FC } from 'react'
import { Grid, Typography } from '@mui/material'
import Divider from './Divider'

const MOCK_INFORMATIONS = [
  { id: 0, title: 'Apartment Sold', number: 1204 },
  { id: 1, title: 'Reviews', number: 5209 },
  { id: 2, title: 'Award Winning', number: 515 },
  { id: 3, title: 'Happy Clients', number: 9604 },
]

const Informations: FC = () => (
  <Grid container maxWidth="lg" alignSelf="center" p={4} m="auto">
    {MOCK_INFORMATIONS.map((item) => (
      <Grid
        key={`info-${item.id}`}
        item
        md={3}
        xs={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        mb={3}
        p={1}
      >
        <Typography variant="h4">{item.number}+</Typography>
        <Divider />
        <Typography variant="subtitle2" color="#757475">
          {item.title}
        </Typography>
      </Grid>
    ))}
  </Grid>
)

export default Informations
