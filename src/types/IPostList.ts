import { InfiniteData } from 'react-query'
import { IPost } from '@src/types'

export interface IPostList {
  data: InfiniteData<IPost[]>
}
