import styled from 'styled-components'

import Img from '@/components/Img'
import { cs } from '@/utils'

export const Wrapper = styled.div`
  ${cs.flex('align-center')};
`
export const Logo = styled(Img)`
  width: 12px;
  height: 12px;
  margin-top: -1px;
  display: block;
`
export const Title = styled.div`
  color: #a0bebf;
  font-size: 12px;
  margin-left: 8px;
`
