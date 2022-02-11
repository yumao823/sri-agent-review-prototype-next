import React from 'react'
import clsx from 'clsx'
import { Box, Divider, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Block, { BlockProps } from './Block'

// Omitting `title` from BlockProps to prevent conflicting `title` type
interface HeroProps extends Omit<BlockProps, 'title'> {
  title?: React.ReactNode
  tagline?: React.ReactNode
  content?: React.ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '60vh',
    minHeight: 300,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '75vh',
    },
  },
  content: {
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      textAlign: 'center',
    },
    '& > :not(:first-child)': {
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      whiteSpace: 'pre-line',
    },
  },
  divider: {
    backgroundColor: theme.palette.common.white,
    width: 80,
    height: 2,
  },
}))

const Hero: React.FC<HeroProps> = (props) => {
  const { children, tagline, title, content, className, ...rest } = props
  const classes = useStyles(props)

  return (
    <Block className={clsx(classes.root, className)} container bgcolor="white" px={0} {...rest}>
      <Box sx={{ px: { xs: 0.75, md: 0 } }}>
        {/* TODO: Add Fade effect */}
        {(tagline || title || content) && (
          <Box className={classes.content}>
            {(tagline || title) && (
              <>
                <Box>
                  {tagline && (
                    <Typography variant="h4" color="inherit">
                      {tagline}
                    </Typography>
                  )}
                  {title && (
                    <Typography variant="h3" color="inherit" component="h1">
                      {title}
                    </Typography>
                  )}
                </Box>
                {content && <Divider className={classes.divider} />}
              </>
            )}
            {content && <Typography>{content}</Typography>}
          </Box>
        )}
        {children}
      </Box>
    </Block>
  )
}

export default Hero
