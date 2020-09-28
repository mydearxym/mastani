import styled from 'styled-components'

import { Button } from '@/components/Buttons'
import Input from '@/components/Input'

import { theme, cs } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${cs.flexColumn('justify-center')};
  position: relative;
  width: 100%;
  height: 50px;
  background: #07303e;
  border-radius: 5px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 3px;
    display: block;
    background-image: repeating-linear-gradient(
      135deg,
      #8a5953 0px,
      #8a5953 15px,
      transparent 15px,
      transparent 25px,
      #4c7ba0 25px,
      #4c7ba0 40px,
      transparent 40px,
      transparent 50px
    );
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3px;
    display: block;
    background-image: repeating-linear-gradient(
      135deg,
      #8a5953 0px,
      #8a5953 15px,
      transparent 15px,
      transparent 25px,
      #4c7ba0 25px,
      #4c7ba0 40px,
      transparent 40px,
      transparent 50px
    );
  }
`
export const InnerWrapper = styled.div`
  padding: 0 5px;
`
export const HintHolder = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  padding-left: 5px;

  &:hover {
    color: ${theme('thread.articleTitle')};
    cursor: pointer;
  }
`
export const SubscribeInput = styled(Input)`
  background: #07303e;
  border: none;
  width: calc(100% - 45px);
  height: 32px;
  border-radius: 3px;

  &:hover {
    border: 1px solid;
    border-color: #1d4761;
    background: #07303e;
  }
`
export const SubscribeBtnWrapper = styled.div`
  position: absolute;
  right: 8px;
`
export const SubscribeBtn = styled(Button)`
  /* margin-left: 15px; */
  /* margin-right: 18px; */
  filter: saturate(0.8);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 0 10px;

  /* padding: 4px 10px;
  padding-top: 3px; */
  /* height: 26px; */

  ${Wrapper}:hover & {
    filter: saturate(1);
    /* padding: 4px 15px;
    height: 32px; */
  }
  transition: all 0.25s;
`
export const SubscribeText = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  width: 200px;
  line-height: 1.7;
  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.25s;
  transition-delay: 0.5s;
`
export const SubscribeCancel = styled.span`
  color: ${theme('footer.hover')};
  padding: 0 2px;
  cursor: pointer;
`
