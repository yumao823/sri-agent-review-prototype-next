import React from 'react'
import { Box, Link } from '@mui/material'
import RouterLink from 'next/link'
import { routes } from '../../app/routes'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const getScale = (size): number => {
  switch (size) {
    case 'lg':
      return 1.2
    case 'sm':
      return 0.9
    default:
      return 1
  }
}

const Logo: React.FC<LogoProps> = (props) => {
  const { size = 'md' } = props

  const scale = getScale(size)

  return (
    <RouterLink href={routes.HOME} passHref>
      <Link underline="none" color="inherit">
        {/* Mobile */}
        <Box sx={{ maxHeight: scale * 24, display: { xs: 'flex', md: 'none' } }}>
          <img src="/logo.png" width={80} height={24} />
        </Box>

        {/* Desktop */}
        <Box sx={{ maxWidth: scale * 152, display: { xs: 'none', md: 'flex' } }}>
          <img src="/logo.png" width={80} height={24} />
        </Box>
      </Link>
    </RouterLink>
  )
}

export default Logo
