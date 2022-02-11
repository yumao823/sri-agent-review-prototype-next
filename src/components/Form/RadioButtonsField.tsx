import React, { useCallback, useEffect, useState } from 'react'
import isEqual from 'lodash/isEqual'
import kebabCase from 'lodash/kebabCase'
import clsx from 'clsx'
import { FormControlLabelProps } from '@mui/material/FormControlLabel'
import { Theme } from '@mui/material/styles'

import makeStyles from '@mui/styles/makeStyles'

import { Button, FormControl, FormControlProps, FormHelperText, FormLabel } from '@mui/material'

interface RadioButtonOption {
  value: any
  label: React.ReactNode
  disabled?: boolean
  key?: string // for options with complex values that cannot be stringified
}

interface RadioButtonsFieldProps extends React.ComponentProps<typeof Button> {
  error?: FormControlProps['error']
  label?: FormControlLabelProps['label']
  helperText?: React.ComponentProps<typeof FormHelperText>['children']
  wrapper?: FormControlProps
  disabled?: boolean
  options?: RadioButtonOption[]
  onChange?: (value: any) => void
  value?: any
}

interface RadioButtonsFieldStyles {
  error?: boolean
}

const useStyles = makeStyles<Theme, RadioButtonsFieldStyles>((theme) => ({
  root: {
    display: 'inline',
  },
  radioBtn: {
    border: `0.5px solid ${theme.palette.divider}`,
    margin: theme.spacing(0.75),
    '&:first-child': {
      marginTop: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
  },
  checked: {
    color: theme.palette.primary.main,
    '&&': {
      borderWidth: 1.5,
      borderColor: theme.palette.primary.main,
    },
  },
}))

const RadioButtonsField: React.FC<RadioButtonsFieldProps> = (props) => {
  const {
    value: controlledValue,
    wrapper,
    helperText,
    onChange,
    disabled,
    error,
    label,
    options,
    className,
    ...rest
  } = props
  const classes = useStyles({ error })

  const [value, setValue] = useState(controlledValue)

  const handleClick = (option: RadioButtonOption) => {
    const nextValue = option.value
    setValue(nextValue)
    if (onChange) {
      onChange(nextValue)
    }
  }

  const isOptionChecked = useCallback((option) => isEqual(value, option.value), [value])

  useEffect(() => {
    if (value !== controlledValue) {
      setValue(controlledValue)
    }
  }, [controlledValue])

  return (
    <FormControl
      {...wrapper}
      fullWidth
      disabled={disabled}
      error={error}
      className={clsx(classes.root, wrapper && wrapper.className)}
    >
      {label && <FormLabel>label</FormLabel>}
      {options.map((option) => (
        <Button
          key={option.key || kebabCase(option.value)}
          className={clsx(classes.radioBtn, className, isOptionChecked(option) && classes.checked)}
          disabled={disabled || option.disabled}
          variant="outlined"
          onClick={() => handleClick(option)}
          disableElevation
          {...rest}
        >
          {option.label}
        </Button>
      ))}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default RadioButtonsField
