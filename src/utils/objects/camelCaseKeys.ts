import { camelCase } from 'lodash'

const camelCaseKeys = (object: Record<string, unknown>): Record<string, unknown> =>
  Object.entries(object).reduce((acc, [key, value]) => ({ ...acc, [camelCase(key)]: value }), {})

export default camelCaseKeys
