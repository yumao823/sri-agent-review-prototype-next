import { Theme } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function ToggleButton(theme: Theme) {
  const isLight = theme.palette.mode === 'light'

  return {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          '&.MuiToggleButtonGroup-root': {
            backgroundColor: theme.palette.grey[isLight ? 200 : 0],
            padding: theme.spacing(0.25),
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&.MuiToggleButton-root': {
            minWidth: 80,
            padding: theme.spacing(0.75),
            border: 0,
            color: theme.palette.text.secondary,
            '&:hover': { backgroundColor: theme.palette.action.hover },
          },
          '&.MuiToggleButton-sizeSmall': {
            minWidth: 64,
          },

          '&&.Mui-selected': {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.common.white,
            border: `1px solid ${theme.palette.divider}`,
            borderTopRightRadius: theme.spacing(1),
            borderBottomRightRadius: theme.spacing(1),
            borderTopLeftRadius: theme.spacing(1),
            borderBottomLeftRadius: theme.spacing(1),
            boxShadow: theme.customShadows.z1,
          },
        },
      },
    },
  }
}
