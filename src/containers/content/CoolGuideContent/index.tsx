/*
 *
 * CoolGuideContent
 *
 */

import { FC } from 'react'

import type { TMetric } from '@/spec'
import { pluggedIn, buildLog } from '@/utils'

import FilterBar from './FilterBar'
import Content from './Content'

import type { TStore } from './store'
import { Wrapper, InnerWrapper, ContentWrapper } from './styles'
import { useInit, menuOnSelect } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:CoolGuideContent')

type TProps = {
  coolGuideContent: TStore
  metric: TMetric
  testid?: string
}

const CoolGuideContentContainer: FC<TProps> = ({
  coolGuideContent: store,
  metric,
  testid = 'cool-guide-content',
}) => {
  useInit(store)

  const { topFilter, displayType } = store

  return (
    <Wrapper testid={testid}>
      <InnerWrapper metric={metric}>
        <FilterBar topFilter={topFilter} menuOnSelect={menuOnSelect} />
        <ContentWrapper>
          <Content displayType={displayType} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(CoolGuideContentContainer) as FC<TProps>
