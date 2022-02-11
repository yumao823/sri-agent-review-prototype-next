import { filter } from 'lodash'
import RouterLink from 'next/link'
import SearchIcon from '@mui/icons-material/Search'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { styled } from '@mui/material/styles'
import {
  Box,
  Grid,
  Card,
  Link,
  Avatar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment,
} from '@mui/material'

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: 'Facebook',
    icon: <FacebookIcon width={20} height={20} sx={{ color: '#1877F2' }} />,
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon width={20} height={20} sx={{ color: '#D7336D' }} />,
  },
  {
    name: 'Linkedin',
    icon: <LinkedInIcon width={20} height={20} sx={{ color: '#006097' }} />,
  },
  {
    name: 'Twitter',
    icon: <TwitterIcon width={20} height={20} sx={{ color: '#1C9CEA' }} />,
  },
]

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  marginBottom: theme.spacing(5),
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': {
    width: 320,
    boxShadow: theme.shadows[8],
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}))

// ----------------------------------------------------------------------

function applyFilter(array: any[], query: string) {
  let arr = array
  if (query) {
    arr = filter(array, (_friend) => _friend.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }
  return arr
}

function FriendCard({ friend }) {
  const { name, role, avatarUrl } = friend

  return (
    <Card
      sx={{
        py: 5,
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Avatar alt={name} src={avatarUrl} sx={{ width: 64, height: 64, mb: 3 }} />
      <RouterLink href="#">
        <Link variant="subtitle1" color="text.primary">
          {name}
        </Link>
      </RouterLink>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {role}
      </Typography>
      <Box sx={{ display: 'flex', mt: 1 }}>
        {SOCIALS.map((social) => (
          <Tooltip key={social.name} title={social.name}>
            <IconButton>{social.icon}</IconButton>
          </Tooltip>
        ))}
      </Box>
      <IconButton
        sx={{
          top: 8,
          right: 8,
          position: 'absolute',
        }}
      >
        <MoreVertIcon width={20} height={20} />
      </IconButton>
    </Card>
  )
}

type ProfileFriendsProps = {
  friends: any[]
  findFriends: string
  onFindFriends: (value: string) => void
}

export default function ProfileFriends({ friends, findFriends, onFindFriends }: ProfileFriendsProps) {
  const friendFiltered = applyFilter(friends, findFriends)
  const isNotFound = friendFiltered.length === 0

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Friends
      </Typography>

      <SearchStyle
        value={findFriends}
        onChange={(e) => onFindFriends(e.target.value)}
        placeholder="Find friends..."
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon sx={{ color: 'text.disabled' }} />
          </InputAdornment>
        }
      />

      <Grid container spacing={3}>
        {friendFiltered.map((friend) => (
          <Grid key={friend.id} item xs={12} md={4}>
            <FriendCard friend={friend} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
