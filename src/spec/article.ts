import type { TCommunity } from './index'
import type { TUser } from './account'

export type TArticle = {
  id: string
  title: string
  body: string
  author: {
    id: string
    login: string
    nickname: string
    avatar: string
  }
  origialCommunity?: TCommunity
  commentsParticipators?: TUser
  insertedAt?: string
  // ...
}

export type TJob = {
  id: string
  title: string
  body: string
  author: {
    id: string
    login: string
    nickname: string
    avatar: string
  }
}

export type TPagedJobs = {
  entries: TJob[]
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages: number
}

export type TComment = {
  id: string
  body: string
  floor?: number
  insertedAt?: string
  updatedAt?: string
  author?: TUser
  repliesCount?: number
  replies?: TComment[]
  replyTo?: TComment
  likesCount?: number
  viewerHasLiked?: boolean
}

export type TPagedComments = {
  entries: TComment[]
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages: number
}
