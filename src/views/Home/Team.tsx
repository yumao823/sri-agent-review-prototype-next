import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Stack, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useKeenSlider } from 'keen-slider/react'
import Divider from './Divider'
import { routes } from '../../app/routes'

const MOCK_MEMBERS = [
  { id: 0, name: 'John Doe', avatar: '/home/human/john.png', role: 'SRI Sales Agent' },
  { id: 1, name: 'Ben Koh', avatar: '/home/human/ben.png', role: 'SRI Sales Executive' },
  { id: 2, name: 'Amy Tan', avatar: '/home/human/amy.png', role: 'SRI Sales Executive' },
  { id: 3, name: 'Ben Koh', avatar: '/home/human/ben.png', role: 'SRI Sales Executive' },
  { id: 4, name: 'Amy Tan', avatar: '/home/human/amy.png', role: 'SRI Sales Executive' },
]

interface CardProps {
  id: number
  active: boolean
  side: boolean
  name: string
  avatar: string
  role: string
}

const ProfileCard: FC<CardProps> = ({ id, active, side, name, avatar, role }) => {
  const router = useRouter()

  return (
    <Stack
      maxWidth={300}
      minHeight={350}
      alignItems="center"
      boxShadow={active && '0 5px 20px rgba(0, 0, 0, 0.08)'}
      mx={active && 1}
      my={1}
      py={1}
      onClick={() => router.push(`${routes.REALTORS}/${id}`)}
    >
      <img src={avatar} width="100%" />
      {!side && (
        <>
          <Typography variant="h5" mt={2} color={active && 'primary'}>
            {name}
          </Typography>
          <Typography variant="body2" color="#757475">
            {role}
          </Typography>
          <LinkedInIcon color={active ? 'primary' : 'inherit'} />
        </>
      )}
    </Stack>
  )
}

const Slider: FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const [width, setWidth] = useState<number>(undefined)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      origin: 'center',
      perView: width ? width / 300 : 5,
    },
    slideChanged(slider) {
      setCurrent(slider.track.details.rel)
    },
  })

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <Box ml="auto" mr={15}>
        <ArrowBackIcon onClick={() => instanceRef.current?.prev()} />
        <ArrowForwardIcon onClick={() => instanceRef.current?.next()} />
      </Box>
      <Box ref={sliderRef} className="keen-slider" alignItems="center">
        {MOCK_MEMBERS.map((item) => (
          <Box key={`pc-${item.id}`} className="keen-slider__slide">
            <ProfileCard
              id={item.id}
              active={current === item.id}
              side={
                item.id === current + 2 || item.id === current + 3 || item.id === current - 2 || item.id === current - 3
              }
              name={item.name}
              avatar={item.avatar}
              role={item.role}
            />
          </Box>
        ))}
      </Box>
    </>
  )
}

const Team: FC = () => (
  <Stack
    direction="column"
    alignItems="center"
    textAlign="center"
    alignSelf="center"
    width="-webkit-fill-available"
    maxWidth="lg"
    p={4}
    m="auto"
  >
    <Typography variant="button" color="primary">
      Our Team
    </Typography>
    <Divider />
    <Typography variant="h4" mb={2}>
      More Like A Family
    </Typography>
    <Typography variant="body1" color="#757475" maxWidth={600} mb={5}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices adipiscing purus posuere sem quis non sed
      suspendisse. Diam diam egestas nec tellus. Vel vitae sit turpis faucibus.
    </Typography>
    <Slider />
  </Stack>
)

export default Team
