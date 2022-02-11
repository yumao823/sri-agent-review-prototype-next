import config from '../config'

const useAutowebPageConfig = ({ pathname, user }) => {
  const { agentProfile } = user || {}
  const { autowebs } = agentProfile || {}
  const { pages: initialPages } = autowebs?.find(({ autowebID }) => autowebID === config.autoweb.autowebID) || {}

  const pages = initialPages?.map(({ sections, ...rest }) => ({ ...rest, sections: JSON.parse(sections ?? 'null') }))
  const page = pages?.find((page) => page.pathname === pathname)

  return {
    pages,
    ...page,
  }
}

export default useAutowebPageConfig
