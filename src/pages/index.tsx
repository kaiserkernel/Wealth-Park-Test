import { useRef } from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

import { PostList, Loading } from '@src/components'
import { useGetNewsPostsByLimit, useIntersectionObserver } from '@src/hooks'
import { getNewsPostById, getTopStories } from '@src/api/getNewsPosts'
import { IPost } from '@src/types'

interface Props {
  initialData: IPost[],
  topStories: number[]
}

const Home: NextPage<Props> = (props) => {
  const { initialData, topStories } = props
  const { data, hasNextPage, fetchNextPage, isError, isFetchingNextPage } = useGetNewsPostsByLimit({
    initialData,
    limit: 10,
    topStories: topStories.slice(0, 100),
  })

  const loadMoreRef = useRef<HTMLHeadingElement>(null)

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  })

  return (
    <>
      <Head>
        <title>Hacker news</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="container mx-auto p-3 md:p-6 space-y-5">
        {data && <PostList data={data} />}
        {isError ? (
          <div className="text-red-500 font-bold"> You may not request more than 100 items. </div>
        ) : (
          <div ref={loadMoreRef} className={`${!hasNextPage ? 'hidden' : ''}`}>
            {isFetchingNextPage && <Loading loadingText="Loading more..." />}
          </div>
        )}
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const topStories: string[] = await getTopStories()
  const initialData = await Promise.all(topStories.slice(0, 10).map(async (postId) => await getNewsPostById(postId)))
  return { props: { initialData, topStories } }
}
