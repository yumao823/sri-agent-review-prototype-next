import React, { FC } from 'react'
import { Box, Grid, Rating, Stack, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { MOCK_AGENT } from './constant'

const MOCK_SOCIALS = [
  { id: 0, icon: <LinkedInIcon /> },
  { id: 1, icon: <FacebookIcon /> },
  { id: 2, icon: <TwitterIcon /> },
  { id: 3, icon: <YouTubeIcon /> },
]

const MOCK_SPECIALISATIONS = [
  { id: 0, title: 'For Sales', label: 'Type' },
  { id: 1, title: 'Condo', label: 'Property' },
  { id: 2, title: 'D11', label: 'District' },
]

const ProfileCard: FC = () => (
  <Stack
    sx={{
      width: '-webkit-fill-available',
      maxWidth: 400,
      minHeight: 500,
      height: 'fit-content',
      bgcolor: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      borderRadius: 1,
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
      pt: 4,
      mt: [3, 3, -20],
      my: 3,
    }}
  >
    <Box
      sx={{
        width: 260,
        height: 260,
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    >
      <img src="/home/human/john.png" width={260} height={260} />
    </Box>
    <Typography variant="h4" mt={2}>
      {MOCK_AGENT.name}
    </Typography>
    <Typography variant="body2" color="#757475">
      Sales Agent
    </Typography>
    <Rating defaultValue={4} readOnly />
    <Box sx={{ display: 'flex', color: '#331657', my: 2 }}>
      {MOCK_SOCIALS.map((item) => (
        <Box
          key={`sc-${item.id}`}
          sx={{
            bgcolor: '#eee',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            cursor: 'pointer',
            p: 1,
            m: 0.5,
          }}
        >
          {item.icon}
        </Box>
      ))}
    </Box>
    <Box sx={{ width: '100%', color: '#56286f', bgcolor: '#f4f0ff', borderBottom: '3px solid #eee' }}>
      <Typography variant="overline">Specialisation</Typography>
    </Box>
    <Grid container>
      {MOCK_SPECIALISATIONS.map((item) => (
        <Grid item xs={4} sx={item.id > 0 ? { borderLeft: '1px solid #eee', py: 2 } : { py: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {item.title}
          </Typography>
          <Typography variant="overline" sx={{ fontSize: 10, color: '#8a8a8a' }}>
            {item.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Stack>
)

export default ProfileCard
