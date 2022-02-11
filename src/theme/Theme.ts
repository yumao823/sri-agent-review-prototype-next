import { createTheme, Theme } from '@mui/material/styles'
import * as colors from '@mui/material/colors'
import { ContainerProps, ToolbarProps } from '@mui/material'
import shape from './shape'
import palette from './palette'
import typography from './typography'
import breakpoints from './breakpoints'
import withComponentsOverride from './overrides'
import shadows, { customShadows } from './shadows'

// To fix issue with Type error: Property 'palette' does not exist on type 'DefaultTheme'.
declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export const onepointTheme = createTheme({
  palette: palette.light,
  shape,
  typography,
  breakpoints,
  shadows: shadows.light,
  customShadows: customShadows.light,
})
onepointTheme.components = withComponentsOverride(onepointTheme)
export const onepointDarkTheme = createTheme({
  palette: palette.dark,
  shape,
  typography,
  breakpoints,
  shadows: shadows.dark,
  customShadows: customShadows.dark,
})
onepointDarkTheme.components = withComponentsOverride(onepointDarkTheme)

const headerFontFamily = 'Public Sans, sans-serif'
const headerFontWeight = 700
const SPACER = 8
export const webTheme = createTheme({
  typography: {
    h1: {
      fontSize: '5.5rem',
      fontWeight: headerFontWeight,
      lineHeight: 1.05,
      '&.MuiTypography-gutterBottom': { marginBottom: SPACER * 1.5 },
      fontFamily: headerFontFamily,
    },
    h2: {
      fontWeight: headerFontWeight,
      lineHeight: 1.06,
      '&.MuiTypography-gutterBottom': { marginBottom: SPACER * 1.25 },
      fontFamily: headerFontFamily,
    },
    h3: {
      fontWeight: headerFontWeight,
      '&.MuiTypography-gutterBottom': { marginBottom: SPACER * 1 },
      fontFamily: headerFontFamily,
    },
    h4: {
      fontWeight: headerFontWeight,
      fontFamily: headerFontFamily,
    },
    h5: {
      fontFamily: headerFontFamily,
    },
    subtitle1: {
      fontSize: '1.75rem',
      lineHeight: 1.48,
      letterSpacing: '0.0075em',
    },
    subtitle2: {
      fontSize: '1.5rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    overline: {
      display: 'block',
      fontSize: '1rem',
      fontWeight: headerFontWeight,
      letterSpacing: '.1em',
    },
  },
  palette: palette.light,
  components: {
    MuiButton: {
      styleOverrides: {
        containedSizeLarge: {
          letterSpacing: 1,
          fontWeight: headerFontWeight,
          padding: '12px 48px',
        },
      },
    },
    MuiToolbar: {
      defaultProps: { disableGutters: true, variant: 'dense' as ToolbarProps['variant'] },
    },
  },
})
