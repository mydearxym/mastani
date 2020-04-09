import styled from 'styled-components'

import { cs, theme } from '@utils'

export const Wrapper = styled.div`
  ${cs.flexColumn()};
  width: 140px;
  margin-right: 25px;
`
export const FilterWrapper = styled.div`
  border: 1px solid #0a4253;
  border-radius: 5px;
`
export const Title = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleTitle')};
  font-weight: bolder;
  margin-bottom: 15px;
  text-align: left;
  margin-left: 6px;
`
