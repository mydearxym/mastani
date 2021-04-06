import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn()};
  width: 100%;
  margin-bottom: 28px;
  margin-top: 8px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  font-weight: bold;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
