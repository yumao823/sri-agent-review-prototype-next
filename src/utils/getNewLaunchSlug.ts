import { kebabCase } from 'lodash'

const getNewLaunchSlug = (projectName: string): string => kebabCase(projectName)

export default getNewLaunchSlug
