import { useEffect } from 'react'

import type { TID, TThread, TUser } from '@/spec'
import { TYPE, EVENT, ERR } from '@/constant'
import { asyncSuit, buildLog, send, errRescue } from '@/utils'

import type { TStore } from './store'

import S from './schema'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = buildLog('L:UserContent')

export const followUser = (userId: TID): void => {
  if (!store.isLogin) return store.authWarning()

  log('followUser: ', userId)
  store.mark({ following: true })
  sr71$.mutate(S.follow, { userId })
}

export const undoFollowUser = (userId: TID): void => {
  if (!store.isLogin) return store.authWarning()

  log('undoFollowUser: ', userId)
  store.mark({ following: true })
  sr71$.mutate(S.undoFollow, { userId })
}

const getUserFollowStates = (): void => {
  const { login } = store.viewingUser

  sr71$.query(S.user, { login, userHasLogin: store.isLogin })
}

export const showFollowings = (user: TUser): void => {
  const type = TYPE.USER_LISTER_FOLLOWINGS
  const data = {
    id: user.id,
    brief: user.nickname,
  }

  send(EVENT.USER_LISTER_OPEN, { type, data })
}

export const showFollowers = (user: TUser): void => {
  const type = TYPE.USER_LISTER_FOLLOWERS
  const data = {
    id: user.id,
    brief: user.nickname,
  }

  send(EVENT.USER_LISTER_OPEN, { type, data })
}

export const tabOnChange = (activeThread: TThread): void => {
  store.mark({ activeThread })
  store.markRoute({ tab: activeThread })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('follow'),
    action: () => getUserFollowStates(),
  },
  {
    match: asyncRes('undoFollow'),
    action: () => getUserFollowStates(),
  },
  {
    match: asyncRes('user'),
    action: ({ user }) => {
      store.updateViewingUser(user)
      store.mark({ following: false })
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      store.mark({ following: false })
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      store.mark({ following: false })
      errRescue({ type: ERR.TIMEOUT, details, path: 'UserContent' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      store.mark({ following: false })
      errRescue({ type: ERR.NETWORK, path: 'UserContent' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      if (!sub$) return
      sub$.unsubscribe()
    }
  }, [_store])
}
