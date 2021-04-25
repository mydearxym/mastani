//

/*
 *
 * AbuseReport
 *
 */

import React from 'react'

import { pluggedIn, buildLog } from '@/utils'

import Modal from '@/components/Modal'

import Header from './Header'
import ArticleReport from './ArticleReport'

import type { TStore } from './store'
import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:AbuseReport')

type TProps = {
  abuseReport?: TStore
  testid: string
}

const AbuseReportContainer: React.FC<TProps> = ({
  abuseReport: store,
  testid,
}) => {
  useInit(store)

  return (
    <Modal width="500px" show showCloseBtn onClose={() => console.log('close')}>
      <Wrapper testid={testid}>
        <Header />
        <ArticleReport />
      </Wrapper>
    </Modal>
  )
}

export default pluggedIn(AbuseReportContainer)
