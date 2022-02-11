import RoomIcon from '@mui/icons-material/Room'
import EmailIcon from '@mui/icons-material/Email'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import { Link, Card, Typography, CardHeader, Stack } from '@mui/material'

export default function ProfileAbout({ profile }) {
  const { quote, country, email, role, company, school } = profile

  return (
    <Card>
      <CardHeader title="About" />

      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="body2">{quote}</Typography>

        <Stack direction="row" spacing={1}>
          <RoomIcon />
          <Typography variant="body2">
            Live at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {country}
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <EmailIcon />
          <Typography variant="body2">{email}</Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <BusinessCenterIcon />
          <Typography variant="body2">
            {role} at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {company}
            </Link>
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <BusinessCenterIcon />
          <Typography variant="body2">
            Studied at &nbsp;
            <Link component="span" variant="subtitle2" color="text.primary">
              {school}
            </Link>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  )
}
