import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flexColumn('justify-center')};
  width: 100%;
  margin-top: 30px;
  margin-bottom: 40px;
`
const Block = styled.div`
  ${css.flex('align-center')};
  border-radius: 3px;
  height: 70px;
  width: 100%;
  padding: 10px 13px;
`
export const HomeBlock = styled(Block)`
  height: 20px;
  padding: 0;
  padding-left: 8px;
  margin-bottom: 18px;
`
export const JoinLink = styled.div`
  ${css.flex('align-center', 'justify-end')};
  color: ${theme('thread.articleDigest')};
  font-size: 11px;
  width: 100px;
  &:active {
    color: #0d969e;
  }
`
export const ArrowIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};
  transform: rotate(180deg);
  margin-left: 5px;
  &:active {
    fill: #0d969e;
  }
`
export const NaviBlock = styled(Block)`
  height: 60px;
  background: #0d3846;
`
