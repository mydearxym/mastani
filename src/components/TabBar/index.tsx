/*
 * TabBar
 */

import React from 'react'

import { VIEW } from '@/constant'
import { useDevice } from '@/hooks'
import { buildLog } from '@/utils'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

/* eslint-disable-next-line */
const log = buildLog('c:TabBar:index')

const TabBar = (props) => {
  const { view } = props
  const { isMobile } = useDevice()

  const curMedia = isMobile ? VIEW.MOBILE : VIEW.DESKTOP
  const curView = view === 'auto' ? curMedia : view

  switch (curView) {
    case VIEW.DESKTOP: {
      return <DesktopView {...props} />
    }

    default: {
      // for those mobile, modeline etc ..
      return <MobileView {...props} />
    }
  }
}

export default React.memo(TabBar)