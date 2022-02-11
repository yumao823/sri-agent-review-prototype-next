import React, { FC } from 'react'
import { Box, Button, Grid } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'

const Contact: FC = () => (
  <Box sx={{ width: '-webkit-fill-available', maxWidth: 400, mb: 3 }}>
    <Grid container>
      <Grid item lg={4} xs={0} />
      <Grid item lg={4} xs={8}>
        <Button variant="contained" sx={{ bgcolor: '#000', py: 1.5 }}>
          CONTACT ME!
        </Button>
      </Grid>
      <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            p: 0,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#1BD741',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          <WhatsAppIcon sx={{ width: 36, height: 36 }} />
        </Box>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#039BE5',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          <TelegramIcon sx={{ width: 32, height: 32, mr: 0.5 }} />
        </Box>
      </Grid>
    </Grid>
  </Box>
)

export default Contact
