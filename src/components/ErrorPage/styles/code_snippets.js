import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-start')};
  color: ${theme('thread.articleTitle')};
  line-height: 24px;
  font-size: 15px;
`
export const Indent = styled.div`
  position: relative;
  margin-left: ${({ errorBg }) => (errorBg ? '0' : '15px')};
  background: ${({ errorBg }) => (errorBg ? '#423431' : 'transparent')};
  padding: ${({ errorBg }) => (errorBg ? '0 8px 0 15px' : '0')};
  border-radius: 5px;
`
export const KeyToken = styled.span`
  color: #3480AA; #9c8f6e;
  font-weight: bold;
`
export const StringToken = styled.span`
  color: #9c8f6e;
`
export const AtomToken = styled.span`
  color: #00959c;
`
