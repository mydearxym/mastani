/*
 *
 * Sidebar
 *
 */

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import { connectStore, buildLog } from '@/utils'

import LoadingBlocks from './LoadingBlocks'
import PullButton from './PullButton'

import { Wrapper } from './styles'
import { useInit, togglePulled } from './logic'

let RealSidebar = null

/* eslint-disable-next-line */
const log = buildLog('C:Sidebar:index')

const SidebarContainer = ({ sidebar: store }) => {
  useInit(store)
  const [loaded, setLoaded] = useState(false)
  const { isPulled } = store

  useEffect(() => {
    const loadSidebar = async () => {
      if (isPulled && !RealSidebar) {
        RealSidebar = await dynamic(() => import('./RealSidebar'), {
          /* eslint-disable react/display-name */
          loading: () => <LoadingBlocks />,
          ssr: false,
        })
        setLoaded(true)
      }
    }
    loadSidebar()
  }, [isPulled])

  return (
    <Wrapper isPulled={isPulled}>
      <PullButton onClick={togglePulled} isPulled={isPulled} />
      {loaded && <RealSidebar />}
    </Wrapper>
  )
}

export default connectStore(SidebarContainer)
