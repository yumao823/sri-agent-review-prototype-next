import React, { FC, useState } from 'react'
import { Box, Button, Grid, Tabs, Tab } from '@mui/material'
import { styled } from '@mui/material/styles'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import CommentIcon from '@mui/icons-material/Comment'
import Layout from '../../../components/Layout/Layout'
import About from './About'
import Reviews from './Reviews'
import ProfileCard from './ProfileCard'
import ReviewCard from './ReviewCard'
import Contact from './Contact'

const TABS = [
  {
    value: 'about',
    icon: <PermIdentityIcon width={20} height={20} />,
    component: <About />,
  },
  {
    value: 'reviews',
    icon: <CommentIcon width={20} height={20} />,
    component: <Reviews />,
  },
]

interface StyledTabsProps {
  value: string
  icon: any
  label: string
  iconPosition: any
}

const AntTab = styled((props: StyledTabsProps) => <Tab {...props} />)(() => ({
  color: 'white',
  backgroundColor: '#56286F',
  padding: '0px 30px',
  minHeight: 62,
  '&.Mui-selected': {
    backgroundColor: '#461163',
    color: 'white',
    '& > svg': {
      color: '#FFC474',
    },
  },
}))

const AgentProfile: FC = () => {
  const [tab, setTab] = useState<string>(TABS[0].value)

  return (
    <Layout>
      <Box lineHeight={0} sx={{ width: ['300%', '150%', '100%'] }}>
        <img src="/profile/head_back.png" width="100%" />
      </Box>
      <Grid container>
        <Grid
          item
          md={4}
          xs={12}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: ['center', 'center', 'flex-end'], p: [2, 0] }}
        >
          <Box sx={{ width: '100%', bgcolor: '#56286F', height: 62, display: ['none', 'none', 'block'] }} />
          <ProfileCard />
          <ReviewCard />
          <Button variant="contained" size="large" sx={{ width: '-webkit-fill-available', maxWidth: 400, mb: 3 }}>
            VIEW AGENT WEBSITE
          </Button>
          <Contact />
        </Grid>
        <Grid item md={8} xs={12}>
          <Tabs value={tab} sx={{ bgcolor: '#56286F', paddingLeft: 2 }} onChange={(e, t) => setTab(t)}>
            {TABS.map((item) => (
              <AntTab icon={item.icon} value={item.value} iconPosition="start" label={item.value} />
            ))}
          </Tabs>
          {TABS.map(
            (item) =>
              item.value === tab && (
                <Box key={item.value} py={3} px={2}>
                  {item.component}
                </Box>
              )
          )}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default AgentProfile
