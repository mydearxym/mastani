import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-bottom: 8px;
  font-size: 14px;

  ${css.media.mobile`
    font-size: 12px;
    margin-bottom: 4px;
  `}
`

export const holder = 1
