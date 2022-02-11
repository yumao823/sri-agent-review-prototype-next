import React, { FC } from 'react'
import { Box, Rating, Typography } from '@mui/material'

const MOCK_REVIEWS = [
  { id: 0, label: 'Communication', rate: 3 },
  { id: 1, label: 'Dedication', rate: 3 },
  { id: 2, label: 'Reliability', rate: 3 },
  { id: 3, label: 'Presentation', rate: 3 },
  { id: 4, label: 'Friendliness', rate: 3 },
]

const GlobeReview: FC = () => (
  <Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
      <Typography variant="body2" fontWeight="600">
        Globe Review
      </Typography>
      <Rating name="size-medium" defaultValue={4} readOnly />
    </Box>
    {MOCK_REVIEWS.map((item) => (
      <Box key={`rv-${item.id}`} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" sx={{ color: '#8a8a8a' }}>
          {item.label}
        </Typography>
        <Rating size="small" defaultValue={item.rate} readOnly />
      </Box>
    ))}
  </Box>
)

export default GlobeReview
