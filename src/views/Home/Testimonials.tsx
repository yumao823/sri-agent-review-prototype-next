import React, { FC, useEffect, useState } from 'react'
import { Box, Rating, Stack, Typography } from '@mui/material'
import { useKeenSlider } from 'keen-slider/react'
import Divider from './Divider'

const MOCK_FEEDS = [
  { id: 0, name: 'Steven Lim', avatar: '/home/human/steven.png' },
  { id: 1, name: 'James Roger', avatar: '/home/human/james.png' },
  { id: 2, name: 'Steven Lim', avatar: '/home/human/steven.png' },
  { id: 3, name: 'Lily Amy', avatar: '/home/human/lily.png' },
]

interface CardProps {
  name: string
  avatar: string
}

const Card: FC<CardProps> = ({ name, avatar }) => (
  <Stack maxWidth={368} minHeight={430} alignItems="center" boxShadow="0 5px 20px rgba(0, 0, 0, 0.08)" m={2} p={3}>
    <Box borderRadius="50%" width={150} height={150} overflow="hidden" mb="auto">
      <img src={avatar} width={150} height={150} />
    </Box>
    <img src="/home/icons/quote-left.png" width={32} height={32} />
    <Typography variant="body2" color="#757475" mt="auto" mb={2}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in etiam et amet ac aliquam.
    </Typography>
    <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
      <Typography variant="body1" fontWeight="bold">
        {name}
      </Typography>
      <Rating size="medium" defaultValue={4} readOnly />
    </Box>
  </Stack>
)

const Slider: FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const [width, setWidth] = useState<number>(undefined)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slides: {
      perView: width ? Math.floor(width / 400) || 1 : 3,
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
      <Box ref={sliderRef} className="keen-slider">
        {MOCK_FEEDS.map((item) => (
          <Box key={`pc-${item.id}`} className="keen-slider__slide" display="flex" justifyContent="center">
            <Card name={item.name} avatar={item.avatar} />
          </Box>
        ))}
      </Box>
      <Box display="flex">
        {MOCK_FEEDS.map((item) => (
          <Box
            key={`bt-${item.id}`}
            width={12}
            height={12}
            borderRadius="50%"
            bgcolor={current === item.id ? 'primary.main' : '#E0E0E0'}
            m={1}
            onClick={() => instanceRef.current?.moveToIdx(item.id)}
          />
        ))}
      </Box>
    </>
  )
}

const Testimonials: FC = () => (
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
      Testimonials
    </Typography>
    <Divider />
    <Typography variant="h4" mb={2}>
      What Our Clients Say
    </Typography>
    <Typography variant="body1" color="#757475" maxWidth={600} mb={3}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit, eleifend in neque nibh sollicitudin in pharetra.
    </Typography>
    <Slider />
  </Stack>
)

export default Testimonials
