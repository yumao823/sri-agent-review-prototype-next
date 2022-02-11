import React from 'react'
import { ReactSVG } from 'react-svg'
import { Theme } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import clsx from 'clsx'

type SvgFontSize = 'small' | 'large' | 'default' | 'initial' | string | number
type SvgColor = 'default' | 'action' | 'disabled' | 'error' | 'inherit' | 'primary' | 'secondary' | string

interface SvgProps {
  src: string
  className?: string
  isStatic?: boolean
  isStaticAsset?: boolean
  fontSize?: SvgFontSize
  color?: SvgColor
  icon?: boolean
}

const getFontSize = (theme: Theme, fontSize: SvgFontSize = 'default') => {
  // Font Size follows MuiSvgIcon's implementation @link: https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/SvgIcon/SvgIcon.js
  switch (fontSize) {
    case 'small':
      return theme.typography.pxToRem(20)
    case 'large':
      return theme.typography.pxToRem(35)
    default:
      if (fontSize === 'default') {
        return theme.typography.pxToRem(24)
      }
      if (typeof fontSize === 'number') {
        return theme.typography.pxToRem(fontSize)
      }
      return fontSize
  }
}

const getColor = (theme: Theme, color: SvgColor = 'inherit') => {
  // Color follows MuiSvgIcon's implementation @link: https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/SvgIcon/SvgIcon.js
  switch (color) {
    case 'primary':
      return theme.palette.primary.main
    case 'secondary':
      return theme.palette.secondary.main
    case 'error':
      return theme.palette.error.main
    case 'action':
      return theme.palette.action.active
    case 'disabled':
      return theme.palette.action.disabled
    case 'inherit':
      return 'inherit'
    default:
      return color
  }
}

interface SvgStyles {
  color?: SvgColor
  fontSize?: SvgFontSize
  icon?: boolean
}

const useStyles = makeStyles<Theme, SvgStyles>((theme) => ({
  wrapper: {
    '& > div': {
      // Target inner wrapping div
      display: 'flex', // Ensure that icon is always in the center of the given space
    },
  },
  svg: {
    // Following .MuiSvgIcon-root
    width: ({ icon }) => (icon ? '1em' : 'unset'),
    height: ({ icon }) => (icon ? '1em' : 'unset'),
    display: 'inline-block',
    fontSize: ({ fontSize }) => getFontSize(theme, fontSize),
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    flexShrink: 0,
    userSelect: 'none',
  },
  svgColor: {
    // Following .MuiSvgIcon-root
    fill: 'currentColor',
    color: ({ color }) => getColor(theme, color),
    '& path': {
      fill: 'currentColor',
    },
  },
}))

const Svg: React.FunctionComponent<SvgProps> = (props) => {
  const { fontSize, color = 'default', icon, ...rest } = props

  const classes = useStyles({ fontSize, color, icon })

  return (
    <ReactSVG
      beforeInjection={(svg) => {
        const classNamesSplit = clsx(classes.svg, color !== 'default' && classes.svgColor).split(' ')
        classNamesSplit.forEach((className) => {
          svg.classList.add(className)
        })
      }}
      className={classes.wrapper}
      {...rest}
    />
  )
}

export default Svg
