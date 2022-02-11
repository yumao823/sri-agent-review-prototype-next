import orderBy from 'lodash/orderBy'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import FaceIcon from '@mui/icons-material/Face'
import MoodBadIcon from '@mui/icons-material/MoodBad'

// TODO: Replace icons with assets
export const RATE_OPTIONS = [
  { icon: MoodBadIcon, value: 1 },
  { icon: SentimentDissatisfiedIcon, value: 2 },
  { icon: FaceIcon, value: 3 },
  { icon: SentimentSatisfiedIcon, value: 4 },
  { icon: SentimentVerySatisfiedIcon, value: 5 },
]

export const MIN_RATE_VALUE = orderBy(RATE_OPTIONS, ['value'], ['asc'])[0].value
export const MAX_RATE_VALUE = orderBy(RATE_OPTIONS, ['value'], ['desc'])[0].value

export const INITIAL_RATE_VALUE = MIN_RATE_VALUE - 1
export const INITIAL_SELECT_VALUE = ''
export const INITIAL_RADIO_VALUE = ''
