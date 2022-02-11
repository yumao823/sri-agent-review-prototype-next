import React, { FC } from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Divider from './Divider'

const Review: FC = () => (
  <Grid container maxWidth="lg" p={4} m="auto" alignItems="center">
    <Grid item xs={12} md={6} mb={3}>
      <Typography variant="button" color="primary">
        SRI Agent Review
      </Typography>
      <Divider />
      <Typography variant="h3" mb={2}>
        Find the Realtor Specialised to Your Needs
      </Typography>
      <Typography variant="body1" color="#757475">
        Authentic reviews by customers based on their transactions.
      </Typography>
    </Grid>
    <Grid item xs={12} md={6} display="flex" position="relative">
      <Box maxWidth="100%" overflow="hidden" m="auto">
        <img src="/home/human/jason.png" />
      </Box>
      <Grid container position="absolute" display="flex" width="100%">
        <Grid item md={6} xs={12} maxWidth={200} my={8}>
          <Box display="flex">
            <img src="/home/icons/star.png" width={16} height={14} />
            <Typography variant="caption" color="primary" ml={1}>
              Client Review
            </Typography>
          </Box>
          <Typography variant="body2" fontWeight="600">
            Jason Wong left a review.
          </Typography>
          <Typography variant="caption">Jimmy Yew &middot; SRI Sales Agent</Typography>
        </Grid>
        <Grid item md={6} xs={12} display="flex" flexDirection="column" alignItems="flex-end">
          <Stack bgcolor="rgba(255, 255, 255, 0.9)" mb={8} p={2} borderRadius={3}>
            <Typography variant="body2" fontWeight="600" maxWidth={180}>
              Received a Review from Samanta Smith
            </Typography>
          </Stack>
          <Stack maxWidth={320} bgcolor="rgba(255, 255, 255, 0.9)" mb={8} p={2} borderRadius={3}>
            <Box display="flex" alignItems="center" mb={1}>
              <Box borderRadius="50%" overflow="hidden" width={45} height={45}>
                <img src="/home/human/steven.png" width={45} height={45} />
              </Box>
              <Typography variant="body2" fontWeight="600" ml={1}>
                Steven Lim
              </Typography>
            </Box>
            <Typography variant="body2" fontSize={14} color="#757475" mb={1}>
              I received great customer service from the specialists who helped me. I would recommend to anyone who
              wants quality.
            </Typography>
            <Typography variant="caption" color="#757475" textAlign="right">
              Tue. 08:30PM
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export default Review
