/*
 *
 * CommunityContent
 *
 */

import { FC, memo } from 'react'

import { TThread } from '@/spec'
import { buildLog } from '@/utils'
import CommunityDigest from '@/containers/digest/CommunityDigest'

import ThreadContent from './ThreadContent'
import { Wrapper, InnerWrapper, ContentWrapper } from './styles/classic_view'

/* eslint-disable-next-line */
const log = buildLog('C:CommunityContent:ClassicView')

type TProps = {
  thread?: TThread
}

const ClassicView: FC<TProps> = ({ thread }) => {
  return (
    <Wrapper testid="community-content">
      <CommunityDigest />
      <InnerWrapper>
        <ContentWrapper>
          <ThreadContent thread={thread} />
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(ClassicView)
