import styled from 'styled-components'

import { TTestable, TSpace } from '@/spec'
import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & TSpace>`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;

  padding-top: ${({ top }) => `${top}px`};
  padding-bottom: ${({ bottom }) => `${bottom}px`};
  padding-left: ${({ left }) => `${left}px`};
  padding-right: ${({ right }) => `${right}px`};

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: color 0.2s;
`
export const PreviewWrapper = styled.div`
  display: inline-flex;
  opacity: 0;
  margin-left: 8px;
  align-items: center;

  ${Wrapper}:hover & {
    opacity: 0.6;
  }
  transition: opacity 0.25s;
`
export const PreviewIcon = styled(Img)`
  fill: ${theme('thread.extraInfo')};
  ${css.size(14)};
  transform: rotate(180deg);
`
export const PreviewText = styled.span`
  color: ${theme('thread.extraInfo')};
  font-size: 12px;
  margin-right: 5px;
`
