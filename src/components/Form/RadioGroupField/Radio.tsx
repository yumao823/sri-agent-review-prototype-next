import React, { useMemo } from 'react'
import clsx from 'clsx'
import { FormControlLabel, Radio as MuiRadio, Theme } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

// `control` is passed in within this component
interface RadioProps extends Omit<React.ComponentProps<typeof FormControlLabel>, 'control' | 'color'> {
  color?: 'default' | 'primary' | 'secondary'
  error?: boolean
  radio?: React.ComponentProps<typeof MuiRadio>
}

interface RadioStyles {
  color: 'primary' | 'secondary'
  error?: boolean
}

const useStyles = makeStyles<Theme, RadioStyles>((theme) => ({
  root: {
    color: ({ color, error }) => (error ? theme.palette.error.main : theme.palette.text[color]),
    '& .MuiRadio-root, & .MuiFormControlLabel-label': {
      '&:not(.Mui-disabled)': {
        color: 'inherit',
      },
    },
    '&.MuiFormControlLabel-labelPlacementTop > .MuiRadio-root': {
      paddingTop: theme.spacing(0.375),
    },
    '&:hover': {
      '&, & .MuiTypography-root': {
        color: theme.palette.primary.main,
      },
    },
  },
  radio: {
    '&&:hover': {
      backgroundColor: 'transparent',
    },
  },
}))

const Radio: React.FC<RadioProps> = (props) => {
  const { className, radio, error, color, ...rest } = props
  const nextColor = useMemo(() => (color === 'default' || !color ? 'secondary' : color), [color])
  const classes = useStyles({ error, color: nextColor })

  const { className: radioClassName = '', ...nextRadio } = radio || {}

  return (
    <FormControlLabel
      control={<MuiRadio size="small" disableRipple className={clsx(classes.radio, radioClassName)} {...nextRadio} />}
      className={clsx(classes.root, className)}
      {...rest}
    />
  )
}

export default Radio
