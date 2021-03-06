/*
 * ThreadSidebar store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import type { TAccount, TCommunity, TThread, TRootStore } from '@/spec'
import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:ThreadSidebar')

const ThreadSidebar = T.model('ThreadSidebar', {
  descExpand: T.optional(T.boolean, false),
})
  .views((self) => ({
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },

    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return stripMobx(root.viewing.community)
    },

    get curThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.activeThread
    },

    get isCommunityDigestInViewport(): boolean {
      const root = getParent(self) as TRootStore
      return root.communityDigest.inViewport
    },
  }))
  .actions((self) => ({
    authWarning(options = {}): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof ThreadSidebar>

export default ThreadSidebar
