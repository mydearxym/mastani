import styled from 'styled-components'

import { css, theme } from '@/utils'
import Img from '@/Img'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const CopyedHintIcon = styled(Img)`
  fill: ${theme('baseColor.green')};
  ${css.size(20)};
  margin-right: 3px;
`
