import React, { FC } from 'react'
import { Box, Grid, Typography } from '@mui/material'

const Divider: FC = () => <Box sx={{ width: 40, height: 2, bgcolor: '#f19416', mx: 'auto', my: 1 }} />

const ReviewCard: FC = () => (
  <Box
    sx={{
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
      width: '-webkit-fill-available',
      maxWidth: 400,
      borderRadius: 1,
      p: 2,
      mb: 3,
    }}
  >
    <Grid container sx={{ borderBottom: '1px solid #eee' }}>
      <Grid item xs={6} sx={{ textAlign: 'center', borderRight: '1px solid #eee' }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mt: 1 }}>
          1538
        </Typography>
        <Divider />
        <Typography variant="overline" sx={{ fontSize: 14, color: '#8a8a8a', lineHeight: 'inherit', mb: 2 }}>
          Reviews
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mt: 1 }}>
          10
        </Typography>
        <Divider />
        <Typography variant="overline" sx={{ fontSize: 14, color: '#8a8a8a', lineHeight: 'inherit', mb: 2 }}>
          Experience (Years)
        </Typography>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={6} sx={{ textAlign: 'center', borderRight: '1px solid #eee' }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
          45
        </Typography>
        <Divider />
        <Typography variant="overline" sx={{ fontSize: 14, color: '#8a8a8a', lineHeight: 'inherit', mb: 1 }}>
          Property Sold
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mt: 2 }}>
          5
        </Typography>
        <Divider />
        <Typography variant="overline" sx={{ fontSize: 14, color: '#8a8a8a', lineHeight: 'inherit', mb: 1 }}>
          Awards
        </Typography>
      </Grid>
    </Grid>
  </Box>
)

export default ReviewCard
