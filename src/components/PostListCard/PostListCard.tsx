import { FC } from 'react'

import { FaCalendar } from 'react-icons/fa'
import { format } from 'date-fns'
import { IPost } from '@src/types'

interface Props {
  post: IPost
}

const PostListCard: FC<Props> = ({ post }) => {
  return (
    <a
      target="_blank"
      href={post.url}
      className="flex flex-col rounded overflow-hidden border mb-4"
      data-testid="post-list-card"
      rel="noreferrer"
    >
      <div className="flex flex-row items-center p-2">
        <FaCalendar />
        <p className="ml-2">{format(new Date(post.time * 1000), 'MM/dd/yyyy')}</p>
        <p className="font-bold text-center p-2">{post.title}</p>
      </div>
      {/* <p className="p-2">{post.text}</p> */}
    </a>
  )
}

export default PostListCard
