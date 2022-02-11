import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import { alpha, styled } from '@mui/material/styles'
import { Box, Card, CardActionArea, Grid, Avatar, Tooltip, Divider, Typography, IconButton } from '@mui/material'
import RouterLink from 'next/link'
import { routes } from '../../app/routes'

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

const CardMediaStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  paddingTop: 'calc(100% * 9 / 16)',
  '&:before': {
    top: 0,
    zIndex: 9,
    content: "''",
    width: '100%',
    height: '100%',
    position: 'absolute',
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(3px)', // Fix on Mobile
    borderTopLeftRadius: theme.shape.borderRadiusMd,
    borderTopRightRadius: theme.shape.borderRadiusMd,
    backgroundColor: theme.palette.primary.main,
  },
}))

const CoverImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  zIndex: 8,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
}))

// ----------------------------------------------------------------------

function InfoItem(number: number) {
  return (
    <Grid item xs={4} sx={{ textAlign: 'center' }}>
      <Typography variant="caption" sx={{ mb: 0.5, color: 'text.secondary', display: 'block' }}>
        Follower
      </Typography>
      <Typography variant="subtitle1">{number}</Typography>
    </Grid>
  )
}

type UserCardProps = {
  user: any
}

export default function RealtorCard({ user }: UserCardProps) {
  const { name, cover, position, follower, totalPost, avatarUrl, following } = user

  return (
    <RouterLink href={`${routes.REALTORS}/1`} passHref>
      <Card>
        <CardActionArea>
          <CardMediaStyle>
            <Avatar
              alt={name}
              src={avatarUrl}
              sx={{
                width: 64,
                height: 64,
                zIndex: 11,
                position: 'absolute',
                transform: 'translateY(-50%)',
              }}
            />
            <CoverImgStyle alt="cover" src={cover} />
          </CardMediaStyle>

          <Typography variant="subtitle1" align="center" sx={{ mt: 6 }}>
            {name}
          </Typography>
          <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
            {position}
          </Typography>

          <Box sx={{ textAlign: 'center', mt: 2, mb: 2.5 }}>
            {SOCIALS.map((social) => (
              <Tooltip key={social.name} title={social.name}>
                <IconButton>{social.icon}</IconButton>
              </Tooltip>
            ))}
          </Box>

          <Divider />

          <Grid container sx={{ py: 3 }}>
            {InfoItem(follower)}
            {InfoItem(following)}
            {InfoItem(totalPost)}
          </Grid>
        </CardActionArea>
      </Card>
    </RouterLink>
  )
}
