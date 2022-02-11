import { ApolloClient, FetchPolicy, QueryOptions } from '@apollo/client'

const handleFetch = async (
  client: ApolloClient<any>,
  queryOptions: QueryOptions,
  key: string,
  isFetchAll: boolean = false
): Promise<Array<Record<string, unknown>>> => {
  const onQuery = await client.query(queryOptions)
  const { items = [], nextToken } = onQuery.data?.[key] || {}

  if (isFetchAll && nextToken) {
    const nextQueryOptions = {
      ...queryOptions,
      variables: {
        ...(queryOptions?.variables || {}),
        nextToken,
      },
      fetchPolicy: 'no-cache' as FetchPolicy,
    }

    const nextItems = await handleFetch(client, nextQueryOptions, key, isFetchAll)
    return items.concat(nextItems)
  }

  return items
}

export default handleFetch
