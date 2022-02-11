import React, { FC } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Flag from 'react-world-flags'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined'
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined'

const MOCK_SPECIALISATIONS = [
  { id: 0, label: 'Sales Transaction', icon: <AttachMoneyIcon /> },
  { id: 1, label: 'Condo', icon: <HouseOutlinedIcon /> },
  { id: 2, label: 'D11 - Orchard / River Valley', icon: <AddLocationAltOutlinedIcon /> },
]

const MOCK_LANGUAGES = [
  { id: 0, label: 'English', code: 'gb' },
  { id: 1, label: 'Mandarin', code: 'cn' },
  { id: 2, label: 'Japanese', code: 'jp' },
]

const Bio: FC = () => (
  <>
    <Typography variant="h5">Bio</Typography>
    <Stack spacing={3} sx={{ p: 4, my: 3, border: '1px solid #eee' }}>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        About Me
      </Typography>
      <Typography variant="body2" sx={{ color: '#8a8a8a' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis eu sed elit laoreet. Dictum dignissim mauris
        augue auctor ac, purus. Sit felis in tellus maecenas auctor blandit leo. Ac tempus maecenas ullamcorper dolor
        mauris adipiscing libero in.
      </Typography>
      <hr />
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        Specialisation
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'column', 'row'] }}>
        {MOCK_SPECIALISATIONS.map((item) => (
          <Box
            key={`sp-${item.id}`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              bgcolor: '#f4f1ff',
              color: '#56286f',
              borderRadius: 1,
              mr: [0, 3],
              mb: [1, 1, 1, 0],
              px: 2,
              py: 1,
            }}
          >
            {item.icon}
            <Typography variant="body2" sx={{ ml: 1 }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
      <hr />
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        Language
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: ['column', 'row'] }}>
        {MOCK_LANGUAGES.map((item) => (
          <Box key={`fg-${item.id}`} sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
            <Flag code={item.code} width={24} height={15} />
            <Typography variant="body2" sx={{ color: '#8a8a8a', ml: 1 }}>
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Stack>
  </>
)

export default Bio
