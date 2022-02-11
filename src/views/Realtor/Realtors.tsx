import { random } from 'lodash'
import { Box, Container, Grid, Skeleton } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { onepointTheme } from '../../theme/Theme'
import { routes } from '../../app/routes'
import RealtorCard from './RealtorCard'
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs'
import mockData from '../../utils/mock-data'
import Layout from '../../components/Layout/Layout'

const SkeletonLoad = (
  <>
    {[...Array(8)].map((_, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '115%', borderRadius: 2 }} />
      </Grid>
    ))}
  </>
)

const users = [...Array(24)].map((_, index) => ({
  id: mockData.id(index),
  avatarUrl: mockData.image.avatar(index),
  cover: mockData.image.cover(index),
  name: mockData.name.fullName(index),
  follower: random(9999),
  following: random(9999),
  totalPost: random(9999),
  position: mockData.role(index),
}))

export default function Realtors() {
  return (
    <Layout>
      <ThemeProvider theme={onepointTheme}>
        <Container>
          <Box mt={2} mb={1}>
            <HeaderBreadcrumbs heading="Realtors" links={[{ name: 'Home', href: routes.HOME }, { name: 'Realtors' }]} />
          </Box>

          <Grid container spacing={3}>
            {users.map((user) => (
              <Grid key={user.id} item xs={12} sm={6} md={4}>
                <RealtorCard user={user} />
              </Grid>
            ))}

            {!users.length && SkeletonLoad}
          </Grid>
        </Container>
      </ThemeProvider>
    </Layout>
  )
}
