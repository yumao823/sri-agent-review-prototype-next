import React, { ReactElement, ReactNode } from 'react'
import { last, isString } from 'lodash'
import { Box, Typography, Link, Breadcrumbs, BreadcrumbsProps } from '@mui/material'

// ----------------------------------------------------------------------
import NextLink from 'next/link'

// ----------------------------------------------------------------------

const Separator = (
  <Box
    component="span"
    sx={{
      width: 4,
      height: 4,
      borderRadius: '50%',
      bgcolor: 'text.disabled',
    }}
  />
)

type TLink = {
  href?: string
  name: string
  icon?: ReactElement
}

function LinkItem({ link }: { link: TLink }) {
  const { href, name, icon } = link
  return (
    <NextLink key={name} href={href || '#'} passHref>
      <Link
        variant="body2"
        sx={{
          lineHeight: 2,
          display: 'flex',
          alignItems: 'center',
          color: 'text.primary',
          '& > div': { display: 'inherit' },
        }}
      >
        {icon && (
          <Box
            sx={{
              mr: 1,
              '& svg': { width: 20, height: 20 },
            }}
          >
            {icon}
          </Box>
        )}
        {name}
      </Link>
    </NextLink>
  )
}

interface MBreadcrumbsProps extends BreadcrumbsProps {
  links: TLink[]
  activeLast?: boolean
}

function MBreadcrumbs({ links, activeLast = false, ...other }: MBreadcrumbsProps) {
  const currentLink = last(links)?.name

  const listDefault = links.map((link) => <LinkItem key={link.name} link={link} />)
  const listActiveLast = links.map((link) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography
          variant="body2"
          sx={{
            maxWidth: 260,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: 'text.disabled',
            textOverflow: 'ellipsis',
          }}
        >
          {currentLink}
        </Typography>
      )}
    </div>
  ))

  return (
    <Breadcrumbs separator={Separator} {...other}>
      {activeLast ? listDefault : listActiveLast}
    </Breadcrumbs>
  )
}

interface HeaderBreadcrumbsProps extends MBreadcrumbsProps {
  action?: ReactNode
  heading?: string
  moreLink?: string | string[]
}

export default function HeaderBreadcrumbs({
  links,
  action,
  heading,
  moreLink = '' || [],
  sx,
  ...other
}: HeaderBreadcrumbsProps) {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          {heading && (
            <Typography variant="h4" gutterBottom>
              {heading}
            </Typography>
          )}

          <MBreadcrumbs links={links} {...other} />
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Box>

      {Boolean(moreLink?.length) && (
        <Box sx={{ mt: 2 }}>
          {isString(moreLink) ? (
            <Link href={moreLink} target="_blank" variant="body2">
              {moreLink}
            </Link>
          ) : (
            moreLink.map((href) => (
              <Link noWrap key={href} href={href} variant="body2" target="_blank" sx={{ display: 'table' }}>
                {href}
              </Link>
            ))
          )}
        </Box>
      )}
    </Box>
  )
}
