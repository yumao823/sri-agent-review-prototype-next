import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Box, BoxProps } from '@mui/material'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  divider: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}))

const Divider: React.FC<BoxProps> = ({ className, ...rest }) => {
  const classes = useStyles()

  return <Box {...rest} className={clsx(classes.divider, className)} />
}

export default Divider
