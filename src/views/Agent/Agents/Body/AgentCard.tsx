import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Box, Grid, Rating, Stack, Typography } from '@mui/material'
import { routes } from '../../../../app/routes'

const MOCK_SOCIALS = [
  { id: 0, img: '/agents/sri.png' },
  { id: 2, img: '/agents/pegasus.png' },
  { id: 3, img: '/agents/sold.png' },
]

const MOCK_SPECIALISATIONS = [
  { id: 0, title: 'For Sales', label: 'TYPE' },
  { id: 1, title: 'Condo', label: 'PROPERTY' },
  { id: 2, title: 'D11', label: 'DISTRICT' },
]

interface AgentCardProps {
  data: {
    id: number
    name: string
    role: string
  }
}

const AgentCard: FC<AgentCardProps> = ({ data }) => {
  const router = useRouter()

  return (
    <Stack
      sx={{
        width: '-webkit-fill-available',
        maxWidth: 320,
        height: 'fit-content',
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 1,
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
        cursor: 'pointer',
        my: 2,
        mr: { xs: 'auto', sm: 0 },
        ml: { xs: 'auto', sm: 3 },
      }}
      onClick={() => router.push(`${routes.AGENTS}/${data.id}`)}
    >
      <img src="/agents/card_back.png" width="100%" />
      <Box
        sx={{
          width: 160,
          height: 160,
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
          border: '5px solid white',
          borderRadius: '50%',
          overflow: 'hidden',
          mt: -10,
        }}
      >
        <img src="/home/human/john.png" width={150} height={150} />
      </Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2 }}>
        {data.name}
      </Typography>
      <Typography variant="body2" sx={{ color: (theme) => theme.palette.grey[600] }}>
        {data.role}
      </Typography>
      <Rating defaultValue={4} readOnly />
      <Box sx={{ display: 'flex', color: (theme) => theme.palette.primary.main, my: 2 }}>
        {MOCK_SOCIALS.map((item) => (
          <Box
            key={`sc-${item.id}`}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              cursor: 'pointer',
              m: 0.5,
            }}
          >
            <img src={item.img} width={32} height={32} />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          width: '100%',
          color: (theme) => theme.palette.primary.main,
          bgcolor: (theme) => theme.palette.primary.lighter,
        }}
      >
        <Typography variant="overline">Specialisation</Typography>
      </Box>
      <Grid container>
        {MOCK_SPECIALISATIONS.map((item) => (
          <Grid item xs={4} sx={item.id > 0 ? { borderLeft: '1px solid #eee', py: 2 } : { py: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>
            <Typography variant="caption" sx={{ color: (theme) => theme.palette.grey[600] }}>
              {item.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default AgentCard
