import React from 'react'
import clsx from 'clsx'
import makeStyles from '@mui/styles/makeStyles'
import { Typography } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    flexShrink: 0,
    borderRadius: 2,
    lineHeight: '10px',
    fontSize: '10px',
    height: 20,
    minWidth: 20,
    whiteSpace: 'nowrap',
    padding: theme.spacing(0.5, 1),
  },
  rounded: {
    borderRadius: 10,
    padding: theme.spacing(0.5),
  },
}))

function Label({ className, variant, color, shape, children, style, ...rest }) {
  const classes = useStyles()
  const rootClassName = clsx(
    {
      [classes.root]: true,
      [classes.rounded]: shape === 'rounded',
    },
    className
  )
  const finalStyle = { ...style }

  if (variant === 'contained') {
    finalStyle.backgroundColor = color
    finalStyle.color = '#FFF'
  } else {
    finalStyle.border = `1px solid ${color}`
    finalStyle.color = color
  }

  return (
    <Typography {...rest} className={rootClassName} style={finalStyle} variant="overline">
      {children}
    </Typography>
  )
}

export default Label
