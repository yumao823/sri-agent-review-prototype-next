import moment, { Moment } from 'moment'

const dayStringFormat = 'ddd'
const dateStringFormat = 'DD MMM'
const yearStringFormat = 'YYYY'

const printDate = (dateTime: Moment | string, args: { withDay?: boolean; withYear?: boolean } = {}) => {
  const { withDay, withYear = true } = args

  const dateFormat = [withDay && `${dayStringFormat}, `, dateStringFormat, withYear && yearStringFormat]
    .filter(Boolean)
    .join(' ')
  return moment(dateTime).format(dateFormat)
}

export default printDate
