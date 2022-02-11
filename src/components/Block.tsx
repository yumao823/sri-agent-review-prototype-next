import React from 'react'
import clsx from 'clsx'
import { Box, BoxProps, Container, Theme } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles<Theme, BlockStyleProps>((theme) => ({
  root: {
    color: ({ dark }) => (dark ? theme.palette.common.white : 'inherit'),
  },
  background: {
    backgroundRepeat: 'no-repeat',
    backgroundImage: ({ background = {} }) =>
      [background.overlay, background.src && `url(${background.src})`].filter(Boolean).join(', '),
    backgroundPosition: ({ background = {} }) => background.position || 'center',
    backgroundSize: ({ background = {} }) => background.size || 'cover',
    backgroundColor: ({ background = {} }) => background.color || '',
  },
}))

interface BlockStyleProps {
  dark?: boolean
  background?: {
    src?: string
    size?: string
    position?: string
    overlay?: string
    color?: string
  }
}

export interface BlockProps extends BoxProps, BlockStyleProps {
  container?: boolean | Partial<React.ComponentProps<typeof Container>>
}

const Block: React.FC<BlockProps> = (props) => {
  const { container, background, children, className, dark, ...rest } = props
  const classes = useStyles({ background, dark })

  const wrapperProps = {
    sx: {
      px: { xs: 0.75, md: 0 },
    },
    className: clsx(classes.root, background && classes.background, className),
    ...rest,
  }

  const content = container ? (
    <Container {...container}>
      <>{children}</>
    </Container>
  ) : (
    children
  )

  return <Box {...wrapperProps}>{content}</Box>
}

export default Block
