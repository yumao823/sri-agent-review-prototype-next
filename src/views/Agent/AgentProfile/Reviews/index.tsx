import React, { FC, useState } from 'react'
import { Box, Pagination, Stack, Typography } from '@mui/material'
import GlobeReview from './GlobeReview'
import Review from './Review'

const MOCK_REVIEWS = [
  { id: 0, rate: 3, review: 'Most helpful as always!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 1, rate: 3, review: 'Prompt Response!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 2, rate: 3, review: 'John is great!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 3, rate: 3, review: 'Excellent Service from John!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 4, rate: 3, review: 'John is great!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 5, rate: 3, review: 'Excellent Service from John!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 6, rate: 3, review: 'Most helpful as always!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 7, rate: 3, review: 'Prompt Response!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 8, rate: 3, review: 'Most helpful as always!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 9, rate: 3, review: 'Prompt Response!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 10, rate: 3, review: 'Most helpful as always!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 11, rate: 3, review: 'Excellent Service from John!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 12, rate: 3, review: 'Excellent Service from John!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 13, rate: 3, review: 'Most helpful as always!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 14, rate: 3, review: 'Prompt Response!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 15, rate: 3, review: 'Most helpful as always!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 16, rate: 3, review: 'Prompt Response!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 17, rate: 3, review: 'Excellent Service from John!', name: 'Jane Teo', date: '03 Mar 2021' },
  { id: 18, rate: 3, review: 'Prompt Response!', name: 'Jane Teo', date: '03 Mar 2021' },
]

const Reviews: FC = () => {
  const [current, setCurrent] = useState<number>(1)

  return (
    <Stack spacing={3} sx={{ p: 3, mt: 3, border: '1px solid #eee' }}>
      <Typography variant="h6">Reviews</Typography>
      <GlobeReview />
      {MOCK_REVIEWS.map(
        (item, index) =>
          index >= (current - 1) * 4 &&
          index < current * 4 && (
            <Box key={`rvs-${item.id}`}>
              <Review data={item} />
              <hr />
            </Box>
          )
      )}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={Math.ceil(MOCK_REVIEWS.length / 4)}
          page={current}
          shape="rounded"
          onChange={(e, p) => setCurrent(p)}
        />
      </Box>
    </Stack>
  )
}

export default Reviews
