import React from 'react'
import { Box, Button } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { Footer, Header } from '@onextech/material-ui-landing/core'
import { routes } from '../../app/routes'
import { appConfig } from '../../app/config'
import Logo from './Logo'

const headerNavItems = {
  left: [
    { name: 'realtors', title: 'Realtors', href: routes.REALTORS },
    { name: 'salespersons', title: 'SalesPersons', href: routes.AGENTS },
  ],
}

const footerNavItems = [
  {
    title: 'What We Do',
    items: [
      { title: 'Product Design', href: routes.REALTORS },
      { title: 'Pricing', href: routes.REALTORS },
    ],
  },
  {
    title: 'Learn more',
    items: [
      { title: 'Work', href: routes.REALTORS },
      { title: 'About', href: routes.REALTORS },
    ],
  },
  {
    title: 'Support',
    items: [{ title: 'Contact', href: routes.REALTORS }],
  },
]

const Layout: React.FC = (props) => {
  const { children } = props

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        '& > main': { flex: 1 },
      }}
    >
      <Header
        logo={Logo}
        navItems={headerNavItems}
        sx={{
          '& .MuiToolbar-root': {
            pl: 0,
            pr: 0,
          },
        }}
      />
      <main>{children}</main>
      <Footer
        logo={Logo}
        navItems={footerNavItems}
        socialMediaLinks={appConfig.socialMediaLinks}
        companyName={appConfig.companyName}
      />
    </Box>
  )
}

export default Layout
