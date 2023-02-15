/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { FC } from 'react'

import { IPostList } from '@src/types'
import Post from '../PostListCard/PostListCard'

const PostList: FC<IPostList> = ({ data }) => {
  if (!data?.pages?.length || data?.pages?.length === 0) {
    return null
  }
  return (
    <div data-testid="post-list" className="flex flex-col justify-center">
      {data.pages.map((results) => results.map((post) => <Post key={post.id} post={post} />))}
    </div>
  )
}

export default PostList
