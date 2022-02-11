import React, { FC, useState } from 'react'
import { Grid, Pagination } from '@mui/material'
import AgentCard from './AgentCard'
import { MOCK_USERS } from './constant'

const AgentsGrid: FC = () => {
  const [current, setCurrent] = useState<number>(1)

  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
      {MOCK_USERS.map((item) => (
        <Grid item key={`ac-${item.id}`} xs={12} md={6} lg={4}>
          <AgentCard data={item} />
        </Grid>
      ))}
      <Pagination count={4} page={current} shape="rounded" onChange={(e, p) => setCurrent(p)} />
    </Grid>
  )
}

export default AgentsGrid
