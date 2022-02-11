import React, { FC, useState } from 'react'
import { Box, Button, Grid, InputAdornment, Tabs, Tab, TextField, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'
import { styled } from '@mui/material/styles'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'

const TABS = [
  {
    value: 'name',
    label: 'Find By Name',
  },
  {
    value: 'category',
    label: 'Find By Category',
  },
]

interface StyledTabsProps {
  value: string
  label: string
}

const AntTab = styled((props: StyledTabsProps) => <Tab {...props} />)(() => ({
  minHeight: 48,
  '&.Mui-selected': {
    backgroundColor: 'white',
    color: 'primary',
  },
}))

const Header: FC = () => {
  const [tab, setTab] = useState<string>(TABS[0].value)

  return (
    <Block bg={{ src: '/agents/back.png' }} sx={{ color: 'white' }}>
      <Box sx={{ maxWidth: 'lg', width: '100%', m: 'auto', p: 3 }}>
        <Grid container>
          <Grid item lg={7} md={9}>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Find the Realtor Specialised to Your Needs
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Authentic reviews by customers based on their transactions.
            </Typography>
          </Grid>
        </Grid>
        <Tabs
          value={tab}
          TabIndicatorProps={{ style: { display: 'none' } }}
          sx={{ width: { xs: '100%', sm: 'fit-content' }, borderRadius: 1, pb: 1 }}
          onChange={(e, t) => setTab(t)}
        >
          {TABS.map((item) => (
            <AntTab
              value={item.value}
              label={item.label}
              sx={{
                px: { xs: 1, sm: 3 },
                width: { xs: '50%', sm: 'auto' },
                color: (theme) => theme.palette.grey[600],
                bgcolor: (theme) => theme.palette.grey[100],
              }}
            />
          ))}
        </Tabs>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <Box sx={{ display: 'flex', mr: 1 }}>
                  {tab === 'name' ? (
                    <PermIdentityOutlinedIcon color="primary" />
                  ) : (
                    <CategoryOutlinedIcon color="primary" />
                  )}
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: (theme) => theme.palette.grey[600] }}>
                    Sri Agent
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'black', fontWeight: 'bold' }}>
                    Search by {tab === 'name' ? 'Name' : 'Category'}
                  </Typography>
                </Box>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" size="large" sx={{ mr: { xs: -1, sm: 0 } }}>
                  Search
                </Button>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          sx={{ width: '100%', bgcolor: 'white', borderRadius: 1, borderTopLeftRadius: 0, mt: -1 }}
        />
      </Box>
    </Block>
  )
}

export default Header
