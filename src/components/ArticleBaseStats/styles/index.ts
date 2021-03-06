import styled from 'styled-components'

import type { TTestable } from '@/spec'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-center')};
`
const Icon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  transition: fill 0.25s;
`
export const ViewsIcon = styled(Icon)``

export const CommentWrapper = styled.div`
  ${css.flex('align-center')};
`
export const CommentIcon = styled(Icon)`
  ${CommentWrapper}:hover & {
    cursor: pointer;
    fill: ${theme('thread.articleTitle')};
  }

  transition: fill 0.2s;
`
export const Count = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 15px;
  margin-left: 5px;
`
export const CommentCount = styled(Count)`
  ${CommentWrapper}:hover & {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }
  transition: color 0.2s;
`
