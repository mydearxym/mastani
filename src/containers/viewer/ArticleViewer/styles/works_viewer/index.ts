import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div`
  padding: 0 8px;
`
export const BodyWrapper = styled.div`
  ${css.flexColumn()};
  padding: 20px;
  min-height: 400px;
  margin-top: 5px;
  margin-left: 4%;
  margin-right: 4%;
  border-radius: 3px;
`
export const ArticleBody = styled.article`
  font-size: 1.2em;
  line-height: 2em;
  flex-grow: 1;
`
