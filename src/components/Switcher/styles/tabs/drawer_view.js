import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.nav.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flex('align-center')};
  position: relative;
  overflow: hidden;
  width: 100%;
`
// #093542
export const TabItem = styled.div`
  ${css.flex('justify-center')};
  padding-top: 4px;
  padding-bottom: 4px;
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  background: ${({ active }) => (active ? '#0f4150' : '#093542')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  font-size: 12px;
  flex-grow: 1;
  cursor: pointer;

  :first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  :last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`
