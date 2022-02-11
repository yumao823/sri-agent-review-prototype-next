import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link, Card, CardHeader, Stack } from '@mui/material'

// ----------------------------------------------------------------------

export default function ProfileSocialInfo({ profile }) {
  const { facebookLink, instagramLink, linkedinLink, twitterLink } = profile

  const SOCIALS = [
    {
      name: 'Linkedin',
      icon: <LinkedInIcon sx={{ color: '#006097' }} />,
      href: linkedinLink,
    },
    {
      name: 'Twitter',
      icon: <TwitterIcon sx={{ color: '#1C9CEA' }} />,
      href: twitterLink,
    },
    {
      name: 'Instagram',
      icon: <InstagramIcon sx={{ color: '#D7336D' }} />,
      href: instagramLink,
    },
    {
      name: 'Facebook',
      icon: <FacebookIcon sx={{ color: '#1877F2' }} />,
      href: facebookLink,
    },
  ]

  return (
    <Card>
      <CardHeader title="Social" />
      <Stack spacing={2} sx={{ p: 3 }}>
        {SOCIALS.map((link) => (
          <Stack key={link.name} direction="row" alignItems="center" spacing={1}>
            {link.icon}
            <Link component="span" variant="body2" color="text.primary" noWrap>
              {link.href}
            </Link>
          </Stack>
        ))}
      </Stack>
    </Card>
  )
}
