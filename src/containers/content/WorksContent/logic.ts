import { useEffect } from 'react'

import { buildLog } from '@/utils'
// import S from './service'

import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:WorksContent')

/**
 * change the view of main content
 * @param {string} activeView works or milestone
 */
export const changeView = (activeView: string): void => {
  store.mark({ activeView })
}

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    // return () => store.reset()
  }, [_store])
}
