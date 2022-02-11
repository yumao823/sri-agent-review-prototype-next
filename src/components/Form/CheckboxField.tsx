import React from 'react'
import { CheckboxProps } from '@mui/material/Checkbox'
import { Theme } from '@mui/material/styles'

import makeStyles from '@mui/styles/makeStyles'

import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material'

interface CheckboxFieldProps extends CheckboxProps {
  error?: React.ComponentProps<typeof FormControl>['error']
  label?: React.ReactNode
  helperText?: React.ComponentProps<typeof FormHelperText>['children']
  wrapper?: React.ComponentProps<typeof FormControlLabel>
}

interface CheckboxFieldStyles {
  color: 'primary' | 'secondary' | any
  checked?: boolean
  error?: boolean
}

const useStyles = makeStyles<Theme, CheckboxFieldStyles>((theme) => ({
  root: {
    '& .MuiFormControlLabel-root:not(.Mui-disabled)': {
      '& .MuiSvgIcon-root': {
        color: ({ error, checked, color }) => (error || checked ? theme.palette.error.main : theme.palette.text[color]),
      },
      '& .MuiFormControlLabel-label': {
        color: ({ error, color }) => (error ? theme.palette.error.main : theme.palette.text[color]),
      },
    },
    '& .MuiFormHelperText-root': {
      marginTop: 0,
    },
  },
  checkbox: {
    '&&&:hover': {
      backgroundColor: 'transparent',
    },
  },
}))

const CheckboxField: React.FC<CheckboxFieldProps> = (props) => {
  const { wrapper, helperText, disabled, checked, error, label, color = 'default', ...rest } = props
  const nextColor = !color || color === 'default' ? 'primary' : color
  const classes = useStyles({ checked, error, color: nextColor })

  return (
    <FormControl disabled={disabled} error={error} className={classes.root}>
      <FormControlLabel
        control={<Checkbox className={classes.checkbox} disableRipple color="primary" {...rest} />}
        label={label}
        checked={checked}
        {...wrapper}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default CheckboxField
