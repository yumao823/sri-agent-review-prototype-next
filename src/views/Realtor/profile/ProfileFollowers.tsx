import RoomIcon from '@mui/icons-material/Room'
import CheckIcon from '@mui/icons-material/Check'
import { Box, Grid, Card, Button, Avatar, Typography } from '@mui/material'

// ----------------------------------------------------------------------

type FollowerCardProps = {
  follower: any
  onToggle: VoidFunction
}

function FollowerCard({ follower, onToggle }: FollowerCardProps) {
  const { name, country, avatarUrl, isFollowed } = follower

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
      <Avatar alt={name} src={avatarUrl} sx={{ width: 48, height: 48 }} />
      <Box sx={{ flexGrow: 1, minWidth: 0, pl: 2, pr: 1 }}>
        <Typography variant="subtitle2" noWrap>
          {name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <RoomIcon sx={{ width: 16, height: 16, mr: 0.5, flexShrink: 0 }} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {country}
          </Typography>
        </Box>
      </Box>
      <Button
        size="small"
        onClick={onToggle}
        variant={isFollowed ? 'text' : 'outlined'}
        color={isFollowed ? 'primary' : 'inherit'}
        startIcon={isFollowed && <CheckIcon />}
      >
        {isFollowed ? 'Followed' : 'Follow'}
      </Button>
    </Card>
  )
}

type ProfileFollowersProps = {
  followers: any[]
  onToggleFollow: (id: string) => void
}

export default function ProfileFollowers({ followers, onToggleFollow }: ProfileFollowersProps) {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Followers
      </Typography>

      <Grid container spacing={3}>
        {followers.map((follower) => (
          <Grid key={follower.id} item xs={12} md={4}>
            <FollowerCard follower={follower} onToggle={() => onToggleFollow(follower.id)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
