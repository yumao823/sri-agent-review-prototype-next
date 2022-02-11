import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { CircularProgress } from '@mui/material'

const useStyles = makeStyles({
  loader: {
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'absolute',
    zIndex: 200,
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.8)',
  },
  wrapper: {
    position: 'relative',
  },
})

interface CircularLoaderProps {
  loading?: boolean
}

const CircularLoader: React.FC<CircularLoaderProps> = (props) => {
  const { loading = false, children } = props
  const classes = useStyles(props)

  return (
    <div className={classes.wrapper}>
      {children}
      {loading && (
        <div className={classes.loader}>
          <CircularProgress color="secondary" />
        </div>
      )}
    </div>
  )
}

export default CircularLoader
