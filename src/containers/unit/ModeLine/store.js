/*
 * ModeLine store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { TYPE } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:ModeLine')

const ModeLine = T.model('ModeLine', {
  showTop: T.optional(T.boolean, false),
  activeMenu: T.optional(
    T.enumeration([
      TYPE.MM_TYPE.GLOBAL_MENU,
      TYPE.MM_TYPE.COMMUNITY,
      TYPE.MM_TYPE.FILTER,
      TYPE.MM_TYPE.DISCOVER,
      TYPE.MM_TYPE.PUBLISH,
      TYPE.MM_TYPE.MORE,
      '',
    ]),
    '',
  ),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get viewing() {
      return stripMobx(self.root.viewing)
    },
    get leftOffset() {
      const curSidebarPin = self.root.sidebar.pin
      if (
        (!curSidebarPin && !self.preSidebarPin && !self.fixed) ||
        (!curSidebarPin && !self.preSidebarPin) ||
        (curSidebarPin && !self.preSidebarPin && !self.fixed) ||
        (curSidebarPin && self.preSidebarPin && self.fixed) ||
        (curSidebarPin && self.preSidebarPin && !self.fixed) ||
        (!curSidebarPin && self.preSidebarPin && !self.fixed)
      ) {
        return 0
      }

      // 特殊情况： 当 sidebar 打开时下滑页面， 需要一个 preSidebarPin 的中间状态
      if (!curSidebarPin && self.preSidebarPin && self.fixed) {
        return '-180px'
      }

      // isPin && !self.preSidebarPin && self.fixed
      return '180px'
    },
    get isMenuActive() {
      return self.activeMenu !== ''
    },
  }))
  .actions((self) => ({
    showTopBar(bool) {
      self.showTop = bool
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ModeLine
