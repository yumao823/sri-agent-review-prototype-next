import React, { FC } from 'react'
import { Box, Rating, Typography } from '@mui/material'

interface ReviewProps {
  data: {
    id: number
    rate: number
    review: string
    name: string
    date: string
  }
}

const Review: FC<ReviewProps> = ({ data }) => (
  <Box mb={4}>
    <Typography variant="h6" mb={1}>
      {`"${data.review}"`}
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: ['column', 'row'], alignItems: ['flex-end', 'center'] }}>
      <Rating defaultValue={data.rate} size="medium" readOnly />
      <Typography sx={{ fontSize: 14, fontWeight: 600, mx: 1 }}>{data.name}</Typography>
      <Typography variant="caption" sx={{ color: '#8a8a8a' }}>
        {data.date}
      </Typography>
    </Box>
    <Typography variant="body2" sx={{ color: '#8a8a8a' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis eu sed elit laoreet. Dictum dignissim mauris
      augue auctor ac, purus. Sit felis in tellus maecenas auctor blandit leo. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
    </Typography>
  </Box>
)

export default Review
