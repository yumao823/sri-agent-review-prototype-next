import React, { useCallback } from 'react'
import clsx from 'clsx'
import kebabCase from 'lodash/kebabCase'
import { Box, FormControl, FormHelperText, FormLabel, RadioGroup, RadioGroupProps, Theme } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import Radio from './Radio'

interface RadioGroupFieldProps extends RadioGroupProps {
  options?: Array<{ label: React.ReactNode; value: string }> // either children or options must be passed in
  disabled?: boolean
  error?: boolean
  onChange?: (value: any) => void
  orientation?: 'horizontal' | 'vertical'
  radioOrientation?: 'horizontal' | 'vertical'
  helperText?: React.ComponentProps<typeof FormHelperText>['children']
  label?: React.ComponentProps<typeof FormLabel>['children']
  radio?: React.ComponentProps<typeof Radio>
  wrapper?: React.ComponentProps<typeof FormControl>
}

enum Orientation {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

interface RadioGroupFieldStyles {
  orientation: Orientation
  radioOrientation: Orientation
}

const useStyles = makeStyles<Theme, RadioGroupFieldStyles>((theme) => ({
  fieldWrapper: {
    [theme.breakpoints.up('md')]: {
      display: ({ orientation }) => (orientation === Orientation.Horizontal ? 'flex' : 'inline-flex'),
      flexDirection: ({ orientation }) => (orientation === Orientation.Horizontal ? 'row' : 'column'),
      alignItems: ({ orientation }) => (orientation === Orientation.Horizontal ? 'center' : 'initial'),
      justifyContent: ({ orientation }) => (orientation === Orientation.Horizontal ? 'space-between' : 'initial'),
      '& .MuiFormGroup-root': {
        flexDirection: ({ orientation }) => (orientation === Orientation.Horizontal ? 'row' : 'column'),
      },
    },
  },
  radioGroup: {
    flexDirection: ({ radioOrientation }) => (radioOrientation === Orientation.Horizontal ? 'row' : 'column'),
    '& > :not(:first-child)': {
      marginLeft: ({ orientation }) =>
        orientation === Orientation.Horizontal ? theme.spacing(1.5) : theme.spacing(-1.375),
      marginTop: ({ orientation }) => (orientation === Orientation.Vertical ? theme.spacing(1.5) : 0),
    },
  },
}))

const RadioGroupField: React.FC<RadioGroupFieldProps> = (props) => {
  const {
    label,
    disabled,
    error,
    options,
    helperText,
    onChange,
    radio,
    orientation = Orientation.Vertical,
    radioOrientation = Orientation.Vertical,
    wrapper,
    className: radioGroupClassName,
    children,
    ...radioGroup
  } = props
  const classes = useStyles({ orientation: Orientation[orientation], radioOrientation: Orientation[radioOrientation] })

  const nextOnChange = useCallback(
    (event, value) => {
      onChange(value)
    },
    [onChange]
  )

  return (
    <FormControl disabled={disabled} error={error} {...wrapper}>
      <>
        <Box className={classes.fieldWrapper}>
          <FormLabel>{label}</FormLabel>
          <RadioGroup
            onChange={onChange ? nextOnChange : undefined}
            className={clsx(classes.radioGroup, radioGroupClassName)}
            {...radioGroup}
          >
            {children ||
              (options &&
                options.map(({ label, value }) => (
                  <Radio
                    value={value}
                    label={label}
                    key={kebabCase(value)}
                    disabled={disabled}
                    error={error}
                    {...radio}
                  />
                )))}
          </RadioGroup>
        </Box>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </>
    </FormControl>
  )
}

export default RadioGroupField
