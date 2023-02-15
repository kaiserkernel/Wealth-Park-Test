import { useInfiniteQuery } from 'react-query'

import { getNewsPostsByLimit } from '@src/api'

export const useGetNewsPostsByLimit = ({ initialData, limit: pageLimit, topStories }: any) => {
  const { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage } = useInfiniteQuery(
    'getNewsPostsByLimit',
    ({ pageParam = pageLimit }) => getNewsPostsByLimit(pageParam, topStories),
    {
      initialData,
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.flat(2).length + 10
        return lastPage.length !== 0 ? nextPage : undefined
      },
    },
  )

  return { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage }
}
