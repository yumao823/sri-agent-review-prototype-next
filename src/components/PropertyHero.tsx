import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Typography } from '@mui/material'
import Block, { BlockProps } from './Block'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 597,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Lora',
    letterSpacing: theme.typography.pxToRem(-1.5),
    margin: theme.spacing(1, 0),
  },
}))

interface PropertyHeroProps extends BlockProps {
  title: string
  subtitle: string
}

const PropertyHero: React.FC<PropertyHeroProps> = ({ title, subtitle, background, ...rest }) => {
  const classes = useStyles()

  return (
    <Block
      {...rest}
      background={background}
      dark
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className={classes.root}
    >
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
    </Block>
  )
}

export default PropertyHero
