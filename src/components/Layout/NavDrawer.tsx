import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Box, Drawer, DrawerProps, List, ListItem, ListItemText } from '@mui/material'
import Link from 'next/link'
import { NAV_LINKS } from './constants'

const useStyles = makeStyles(() => ({
  navItem: {
    height: 50,
    textAlign: 'right',
  },
}))

interface NavDrawerProps extends DrawerProps {}

const NavDrawer: React.FC<NavDrawerProps> = ({ open, onClose, ...rest }) => {
  const classes = useStyles()

  return (
    <Drawer anchor="right" open={open} onClose={onClose} {...rest}>
      <Box p={2.5} pt={5}>
        <List dense>
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} passHref>
              <ListItem button divider dense className={classes.navItem}>
                <ListItemText primary={<b>{label}</b>} inset />
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default NavDrawer
