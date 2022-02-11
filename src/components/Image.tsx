import React, { ImgHTMLAttributes } from 'react'
import { styled } from '@mui/material/styles'

import makeStyles from '@mui/styles/makeStyles'

import clsx from 'clsx'
import { compose, sizing, SizingProps, spacing, SpacingProps, positions, PositionsProps } from '@mui/system'

const Img = styled('img')(compose(positions, spacing, sizing))

const useStyles = makeStyles(() => ({
  stretched: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}))

interface ImageStyleProps extends PositionsProps, SpacingProps, SizingProps {
  height?: number
}

export interface ImageProps extends Omit<ImgHTMLAttributes<any>, 'height' | 'width'>, ImageStyleProps {
  stretched?: boolean
}

const Image: React.FC<ImageProps> = (props) => {
  const { className, stretched, ...rest } = props
  const classes = useStyles()
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Img className={clsx(stretched && classes.stretched, className)} {...rest} />
}

export default Image
