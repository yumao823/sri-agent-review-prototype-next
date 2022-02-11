import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Slider(theme: Theme) {
  const isLight = theme.palette.mode === 'light'

  return {
    MuiSlider: {
      defaultProps: {
        size: 'small',
      },

      styleOverrides: {
        root: {
          height: theme.spacing(0.75),
          '& .MuiSlider-thumb': {
            width: theme.spacing(2.5),
            height: theme.spacing(2.5),
            backgroundColor: theme.palette.common.white,
            border: '1px solid currentColor',
          },
          '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 12,
            fontWeight: 'bold',
            backgroundColor: theme.palette.primary.main,
          },
        },
      },
    },
  }
}
