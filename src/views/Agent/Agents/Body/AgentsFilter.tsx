import React, { FC, useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Input,
  Rating,
  Stack,
  Typography,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { MOCK_RANKING, MOCK_TYPE, MOCK_CATEGORY, MOCK_RATING, MOCK_DISTRICT } from './constant'

interface RatingItemProps {
  data: {
    id: number
    label: string
    value: string
    rate: number
  }
  register: any
}

const RatingItem: FC<RatingItemProps> = ({ data, register }) => {
  const [rate, setRate] = useState<number>(data.rate)

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
      <Input sx={{ display: 'none' }} value={rate} inputRef={register} name={`rating[${data.value}]`} />
      <Rating value={rate} onChange={(_, e) => setRate(e)} />
      <Typography sx={{ color: (theme) => theme.palette.grey[600], ml: 2 }}>{data.label}</Typography>
    </Box>
  )
}

const AgentsFilter: FC = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log('FormData: ', data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Ranking
        </Typography>
        <FormControl size="small" variant="outlined" sx={{ color: (theme) => theme.palette.grey[600], pl: 1 }}>
          {MOCK_RANKING.map((item: any) => (
            <FormControlLabel
              key={`rk-${item.id}`}
              value={item.temp}
              control={<Checkbox />}
              label={item.label}
              name={`ranking[${item.value}]`}
              inputRef={register}
              sx={{ mb: 2 }}
            />
          ))}
        </FormControl>
        <Divider variant="inset" />

        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Type
        </Typography>
        <FormControl size="small" variant="outlined" sx={{ color: (theme) => theme.palette.grey[600], pl: 1 }}>
          {MOCK_TYPE.map((item: any) => (
            <FormControlLabel
              key={`tp-${item.id}`}
              value={item.temp}
              control={<Checkbox />}
              label={item.label}
              name={`type[${item.value}]`}
              inputRef={register}
              sx={{ mb: 2 }}
            />
          ))}
        </FormControl>
        <Divider variant="inset" />

        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Category
        </Typography>
        <FormControl size="small" variant="outlined" sx={{ color: (theme) => theme.palette.grey[600], pl: 1 }}>
          {MOCK_CATEGORY.map((item: any) => (
            <FormControlLabel
              key={`cg-${item.id}`}
              value={item.temp}
              control={<Checkbox />}
              label={item.label}
              name={`category[${item.value}]`}
              inputRef={register}
              sx={{ mb: 2 }}
            />
          ))}
        </FormControl>
        <Divider variant="inset" />

        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          Rating
        </Typography>
        <Stack spacing={2}>
          {MOCK_RATING.map((item: any) => (
            <RatingItem key={`rt-${item.id}`} data={item} register={register} />
          ))}
        </Stack>
        <Divider variant="inset" />

        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          District
        </Typography>
        <FormControl size="small" variant="outlined" sx={{ color: (theme) => theme.palette.grey[600], pl: 1 }}>
          {MOCK_DISTRICT.map((item: any) => (
            <FormControlLabel
              key={`dt-${item.id}`}
              value={item.temp}
              control={<Checkbox />}
              label={item.label}
              name={`district[${item.value}]`}
              inputRef={register}
              sx={{ mb: 2 }}
            />
          ))}
        </FormControl>
        <Button size="small" sx={{ width: 'fit-content' }}>
          View More
        </Button>
        <Divider variant="inset" />
        <Button type="submit" variant="contained">
          Filter
        </Button>
      </Stack>
    </form>
  )
}

export default AgentsFilter
