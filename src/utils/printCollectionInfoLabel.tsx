import startCase from 'lodash/startCase'
import { Moment } from 'moment'
import printDate from './printDate'

type PrintCollectionInfoLabel = (args: {
  collectionDate: string | Moment
  collectionType?: string
  collectionStartTime?: string
  collectionEndTime?: string
  withDay?: boolean
  withYear?: boolean
  withLineBreak?: boolean
}) => string

/**
 * Prints collection date time label
 * @example
 * // returns 'Sat, 11 Apr 2020'
 * printCollectionInfoLabel({ collectionDate: '11 Apr 2020' })
 * @example
 * // returns 'Self-collection on Sun, 12 Apr 2020'
 * printCollectionInfoLabel({ collectionDate: '12 Apr 2020', collectionType: 'Self-collection' })
 * @example
 * // returns 'Delivery on Mon, 13 Apr 2020 13:00'
 * printCollectionInfoLabel({
 *  collectionDate: '13 Apr 2020',
 *  collectionType: 'Delivery'
 *  collectionStartTime: '13:00',
 * })
 * @example
 * // returns 'Tue, 14 Apr 2020 13:00 - 15:00'
 * printCollectionInfoLabel({
 *  collectionDate: '13 Apr 2020',
 *  collectionStartTime: '13:00',
 *  collectionEndTime: '15:00',
 * })
 * @example
 * // returns 'Self-collection on Wed, 15 Apr 2020 13:00 - 15:00'
 * printCollectionInfoLabel({
 *  collectionType: 'Self-collection',
 *  collectionDate: '15 Apr 2020',
 *  collectionStartTime: '13:00',
 *  collectionEndTime: '15:00',
 * })
 * @example
 * // returns `Delivery on 15 Apr 13:00 - 15:00`
 * printCollectionInfoLabel({
 *  collectionType: 'Delivery',
 *  collectionDate: '15 Apr 2020',
 *  collectionStartTime: '13:00',
 *  collectionEndTime: '15:00',
 *  withDay: false,
 *  withYear: false,
 * })
 * @param {string} collectionDate
 * @param {string} collectionType
 * @param {string} collectionStartTime
 * @param {string} collectionEndTime
 * @param {boolean} withDay
 * @param {boolean} withYear
 */
const printCollectionInfoLabel: PrintCollectionInfoLabel = ({
  collectionDate,
  collectionType,
  collectionStartTime,
  collectionEndTime,
  withDay = true,
  withYear = true,
}) => {
  if (collectionDate) {
    return [
      collectionType && startCase(collectionType),
      collectionType && collectionDate && 'on',
      printDate(collectionDate, { withDay, withYear }),
      collectionStartTime,
      collectionStartTime && collectionEndTime && '-',
      collectionEndTime,
    ]
      .filter(Boolean)
      .join(' ')
  }
  return ''
}

export default printCollectionInfoLabel
