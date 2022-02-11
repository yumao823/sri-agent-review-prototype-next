import React, { useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import makeStyles from '@mui/styles/makeStyles'
import { AppBar, AppBarProps, Button, Hidden, Link, Theme, Toolbar, useScrollTrigger, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/material/styles'
import { NAV_LINKS } from './constants'
import NavDrawer from './NavDrawer'
import { routes } from '../../app/routes'

interface NavBarStyles {
  isTransparent?: boolean
}

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  [theme.breakpoints.only('xs')]: {
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
  },
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(1.625),
    paddingRight: theme.spacing(1.625),
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(11.25),
    paddingRight: theme.spacing(11.25),
  },
}))

const useStyles = makeStyles<Theme, NavBarStyles>((theme) => ({
  navBtnSpacing: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(2),
    },
  },
  homeBtn: {
    marginRight: 'auto',
    padding: theme.spacing(1, 4),
  },
  menuBtn: {
    color: ({ isTransparent }) => (isTransparent ? theme.palette.primary.contrastText : theme.palette.text.primary),
  },
}))

interface NavBarProps extends AppBarProps {
  isDefaultTransparent?: boolean
  NavDrawerProps?: React.ComponentProps<typeof NavDrawer>
  user: any
}

const NavBar: React.FC<NavBarProps> = ({ isDefaultTransparent, NavDrawerProps, user }) => {
  const router = useRouter()

  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  const handleOpenDrawer = () => setIsDrawerVisible(true)
  const handleCloseDrawer = () => setIsDrawerVisible(false)

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 })
  const isTransparent = isDefaultTransparent && !trigger

  const classes = useStyles({ isTransparent })

  const { name, mobile } = user

  return (
    <AppBar position="fixed" color={isTransparent ? 'transparent' : 'default'} sx={{ boxShadow: 'none' }}>
      <StyledToolBar disableGutters variant="dense">
        <Button
          variant="text"
          sx={{ color: isTransparent ? 'white' : 'primary' }}
          onClick={() => router.push(routes.HOME)}
          className={classes.homeBtn}
        >
          {name} Division
        </Button>

        <Hidden mdDown>
          {NAV_LINKS.map(({ label, href }, i) => (
            <Button
              key={label}
              variant="text"
              color={isTransparent ? 'secondary' : 'primary'}
              onClick={() => router.push(href)}
              className={clsx(classes.navBtnLabel, i > 0 && classes.navBtnSpacing)}
            >
              {label}
            </Button>
          ))}
        </Hidden>

        {NAV_LINKS.length > 0 && (
          <>
            <Hidden smUp>
              <IconButton
                aria-label="open navigation menu"
                className={classes.menuBtn}
                onClick={handleOpenDrawer}
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

            <NavDrawer open={isDrawerVisible} onClose={handleCloseDrawer} {...NavDrawerProps} />
          </>
        )}
      </StyledToolBar>
    </AppBar>
  )
}

export default NavBar
