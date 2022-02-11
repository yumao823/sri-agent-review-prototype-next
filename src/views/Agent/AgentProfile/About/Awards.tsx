import React, { FC, useState } from 'react'
import { Box, Grid, Stack, Tabs, Tab, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Monthly: FC = () => (
  <Grid container>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
      <Grid
        key={`m-${item}`}
        item
        sx={{ width: 72, height: 72, borderRadius: '50%', backgroundColor: '#f5f5f5', m: 1 }}
      />
    ))}
  </Grid>
)

const Yearly: FC = () => (
  <Grid container>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => (
      <Grid
        key={`y-${item}`}
        item
        sx={{ width: 72, height: 72, borderRadius: '50%', backgroundColor: '#f4f1ff', m: 1 }}
      />
    ))}
  </Grid>
)

const TABS = [
  {
    value: 'monthly',
    component: <Monthly />,
  },
  {
    value: 'Yearly',
    component: <Yearly />,
  },
]

interface StyledTabsProps {
  value: string
  label: string
}

const AntTab = styled((props: StyledTabsProps) => <Tab {...props} />)(() => ({
  color: '#717171',
  backgroundColor: '#f5f5f5',
  padding: '0px 30px',
  minHeight: 48,
  '&.Mui-selected': {
    backgroundColor: 'white',
    color: '#56286f',
    border: '1px solid #f5f5f5',
  },
}))

const Awards: FC = () => {
  const [tab, setTab] = useState<string>(TABS[0].value)

  return (
    <>
      <Typography variant="h5" mb={3}>
        Awards
      </Typography>
      <Tabs value={tab} TabIndicatorProps={{ style: { display: 'none' } }} onChange={(e, t) => setTab(t)}>
        {TABS.map((item) => (
          <AntTab value={item.value} label={item.value} />
        ))}
      </Tabs>
      <Stack spacing={3} sx={{ p: 3, border: '1px solid #eee' }}>
        {TABS.map((item) => item.value === tab && <Box key={item.value}>{item.component}</Box>)}
      </Stack>
    </>
  )
}

export default Awards
