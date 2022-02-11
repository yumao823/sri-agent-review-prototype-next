import { capitalize } from 'lodash'
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { styled, ThemeProvider } from '@mui/material/styles'
import { Tab, Box, Card, Tabs, Container } from '@mui/material'
import { onepointTheme } from '../../theme/Theme'
import mockData from '../../utils/mock-data'
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs'
import { Profile, ProfileCover, ProfileFriends, ProfileGallery, ProfileFollowers } from './profile'
import Layout from '../../components/Layout/Layout'
import { routes } from '../../app/routes'

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3),
  },
}))

const { myProfile, posts, followers, friends, gallery } = {
  myProfile: {
    id: mockData.id(1),
    cover: mockData.image.cover(1),
    position: 'UI Designer',
    follower: 41925,
    following: 96849,
    quote: 'Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..',
    country: mockData.address.country(1),
    email: mockData.email(1),
    company: mockData.company(1),
    school: mockData.company(2),
    role: 'Manager',
    facebookLink: `https://www.facebook.com/caitlyn.kerluke`,
    instagramLink: `https://www.instagram.com/caitlyn.kerluke`,
    linkedinLink: `https://www.linkedin.com/in/caitlyn.kerluke`,
    twitterLink: `https://www.twitter.com/caitlyn.kerluke`,
  },
  posts: [...Array(3)].map((_, index) => ({
    id: mockData.id(index),
    author: {
      id: mockData.id(8),
      avatarUrl: mockData.image.avatar(1),
      name: 'Caitlyn Kerluke',
    },
    isLiked: true,
    createdAt: mockData.time(index),
    media: mockData.image.feed(index),
    message: mockData.text.sentence(index),
    personLikes: [...Array(36)].map((_, index) => ({
      name: mockData.name.fullName(index),
      avatarUrl: mockData.image.avatar(index + 2),
    })),
    comments: (index === 2 && []) || [
      {
        id: mockData.id(7),
        author: {
          id: mockData.id(8),
          avatarUrl: mockData.image.avatar(2),
          name: mockData.name.fullName(index + 5),
        },
        createdAt: mockData.time(2),
        message: 'Praesent venenatis metus at',
      },
      {
        id: mockData.id(9),
        author: {
          id: mockData.id(10),
          avatarUrl: mockData.image.avatar(7),
          name: mockData.name.fullName(index + 6),
        },
        createdAt: mockData.time(3),
        message:
          'Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.',
      },
    ],
  })),
  followers: [...Array(18)].map((_, index) => ({
    id: mockData.id(index),
    avatarUrl: mockData.image.avatar(index),
    name: mockData.name.fullName(index),
    country: mockData.address.country(index),
    isFollowed: mockData.boolean(index),
  })),
  friends: [...Array(18)].map((_, index) => ({
    id: mockData.id(index),
    avatarUrl: mockData.image.avatar(index),
    name: mockData.name.fullName(index),
    role: mockData.role(index),
  })),
  gallery: [...Array(18)].map((_, index) => ({
    id: mockData.id(index),
    title: mockData.text.title(index),
    postAt: mockData.time(index),
    imageUrl: mockData.image.cover(index),
  })),
}

const Realtor = () => {
  const user = { displayName: 'Hi' }

  const [currentTab, setCurrentTab] = useState('profile')
  const [findFriends, setFindFriends] = useState('')

  const handleChangeTab = (newValue: string) => {
    setCurrentTab(newValue)
  }

  const handleToggleFollow = (followerId: string) => {}

  const handleFindFriends = (value: string) => {
    setFindFriends(value)
  }

  if (!myProfile) {
    return null
  }

  const PROFILE_TABS = [
    {
      value: 'profile',
      icon: <AccountBoxIcon width={20} height={20} />,
      component: <Profile myProfile={myProfile} posts={posts} />,
    },
    {
      value: 'followers',
      icon: <FavoriteIcon width={20} height={20} />,
      component: <ProfileFollowers followers={followers} onToggleFollow={handleToggleFollow} />,
    },
    {
      value: 'friends',
      icon: <PeopleAltIcon width={20} height={20} />,
      component: <ProfileFriends friends={friends} findFriends={findFriends} onFindFriends={handleFindFriends} />,
    },
    {
      value: 'gallery',
      icon: <PermMediaIcon width={20} height={20} />,
      component: <ProfileGallery gallery={gallery} />,
    },
  ]

  return (
    <Layout>
      <ThemeProvider theme={onepointTheme}>
        <Container>
          <Box mt={2} mb={1}>
            <HeaderBreadcrumbs
              links={[
                { name: 'Home', href: routes.HOME },
                { name: 'Realtors', href: routes.REALTORS },
                { name: user?.displayName || '' },
              ]}
            />
          </Box>

          <Card
            sx={{
              mb: 3,
              height: 280,
              position: 'relative',
            }}
          >
            <ProfileCover myProfile={myProfile} />

            <TabsWrapperStyle>
              <Tabs
                value={currentTab}
                scrollButtons="auto"
                variant="scrollable"
                allowScrollButtonsMobile
                onChange={(e, value) => handleChangeTab(value)}
              >
                {PROFILE_TABS.map((tab) => (
                  <Tab disableRipple key={tab.value} value={tab.value} icon={tab.icon} label={capitalize(tab.value)} />
                ))}
              </Tabs>
            </TabsWrapperStyle>
          </Card>

          {PROFILE_TABS.map((tab) => {
            const isMatched = tab.value === currentTab
            return isMatched && <Box key={tab.value}>{tab.component}</Box>
          })}
        </Container>
      </ThemeProvider>
    </Layout>
  )
}

export default Realtor
