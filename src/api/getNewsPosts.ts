import { IPost } from '@src/types'
import { fetch } from './fetch'

export const getNewsPostById = async (postId: number | string | undefined) => {
  const { data } = await fetch(`/item/${postId}.json`)
  return data
}

export const getTopStories = async () => {
  const { data } = await fetch('/topstories.json')
  return data
}

export const getNewsPostsByLimit = async (limit: number, topStories: string[]) => {
  const data: IPost[] = await Promise.all(
    topStories.slice(limit - 10, limit).map(async (postId) => await getNewsPostById(postId)),
  )
  return data
}
