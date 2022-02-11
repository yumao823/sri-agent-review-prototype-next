import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Box, Container, Link, Grid, Stack, Theme, Typography } from '@mui/material'
import RouterLink from 'next/link'
import Svg from '../Svg'
import formatMobileNumber from '../../utils/formatMobileNumber'
import config from '../../config'

interface FooterStyles {
  color?: 'primary' | 'default'
}

const useStyles = makeStyles<Theme, FooterStyles>((theme) => ({
  logoWrapper: {
    alignItems: 'flex-start',
    [theme.breakpoints.only('xs')]: {
      alignItems: 'center',
      marginTop: theme.spacing(2.1),
    },
  },
  facebookIcon: {
    margin: theme.spacing(0, 3),
  },
  navHeader: {
    fontWeight: 600,
  },
  avatar: {
    width: 52,
    height: 52,
  },
  whatsappIcon: {
    marginLeft: theme.spacing(1.8),
    width: 16,
    height: 16,
  },
  agentDetailWrapper: {
    [theme.breakpoints.only('xs')]: {
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.only('sm')]: {
      marginBottom: theme.spacing(2.5),
    },
  },
}))

interface FooterProps {
  color?: 'primary' | 'default'
  user: any
}

const Footer: React.FC<FooterProps> = ({ user, color = 'primary' }) => {
  const classes = useStyles({ color })

  const { name, email, media } = user
  const mobile = formatMobileNumber(user?.mobile)

  return (
    <Box sx={{ py: { xs: 3, md: 6 } }}>
      <Container>
        <Grid container component="footer" spacing={3} alignItems="flex-start">
          <Grid item xs={12} container direction="column" className={classes.logoWrapper}>
            <Stack
              width="100%"
              justifyContent={{ xs: 'flex-start', md: 'space-between' }}
              alignItems={{ xs: 'center', md: 'flex-start' }}
              textAlign={{ xs: 'center', md: 'left' }}
              direction={{ xs: 'column', md: 'row' }}
            >
              <div>
                <img src="/logo.png" width={80} height={24} />
                <Typography variant="caption" component="p" color="textSecondary" mt={2}>
                  © 2021 {config.app.companyName}. All Rights Reserved.
                </Typography>
              </div>

              <Stack direction="row" spacing={3} sx={{ mt: { xs: 2, md: 0 } }}>
                <RouterLink href={config.socialProfileLinks.facebook} passHref>
                  <Link target="_blank">
                    <Svg src="/icons/facebook.svg" />
                  </Link>
                </RouterLink>

                <RouterLink href={config.socialProfileLinks.linkedin} passHref>
                  <Link target="_blank">
                    <Svg src="/icons/linked_in.svg" />
                  </Link>
                </RouterLink>

                <RouterLink href={config.socialProfileLinks.youtube} passHref>
                  <Link target="_blank">
                    <Svg src="/icons/youtube.svg" />
                  </Link>
                </RouterLink>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
