import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Block } from '@onextech/material-ui-landing/core'

interface HeroProps {
  title: string
  media?: any
  handleOpenContactDialog?: () => void
}

const Hero: React.FC<HeroProps> = (props) => {
  const { title, handleOpenContactDialog, media } = props

  return (
    <Block
      bg={{ src: `${media?.[0] || '/images/hero.jpg'}` }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        color: 'white',
        height: 500,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box position="relative" zIndex={1} textAlign="center">
        <Typography variant="overline">SRI Leaders</Typography>
        <Typography variant="h1">{title}</Typography>
        <Typography variant="body1" mt={1}>
          Singapore Realtors Inc (SRI)
        </Typography>

        <Button variant="outlined" sx={{ mt: 6.25 }} onClick={handleOpenContactDialog}>
          Join Now
        </Button>
      </Box>
    </Block>
  )
}

export default Hero
