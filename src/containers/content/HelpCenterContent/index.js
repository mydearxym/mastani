//

/*
 *
 * HelpCenterContent
 *
 */

import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { METRIC } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import Cover from './Cover'
import Detail from './Detail'
import Digest from './Digest'

import { VIEW } from './constant'

import { Wrapper, ContentWrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HelpCenterContent')

const HelpCenterContentContainer = ({
  helpCenterContent: store,
  testid,
  metric,
}) => {
  useInit(store)
  const { view, curCommunity } = store

  return (
    <Wrapper testid={testid}>
      <Digest metric={metric} community={curCommunity} />
      <ContentWrapper metric={metric}>
        {view === VIEW.COVER ? <Cover /> : <Detail />}
      </ContentWrapper>
    </Wrapper>
  )
}

HelpCenterContentContainer.propTypes = {
  helpCenterContent: T.any.isRequired,
  testid: T.string,
  metric: T.oneOf(values(METRIC)),
}

HelpCenterContentContainer.defaultProps = {
  testid: 'help-center-content',
  metric: METRIC.HELP_CENTER,
}

export default pluggedIn(HelpCenterContentContainer)
