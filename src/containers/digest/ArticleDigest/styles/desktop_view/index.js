import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.nav`
  ${css.flexColumn('justify-end')};
  position: relative;
  background: transparent;
  border-bottom: ${theme('banner.spliter')};
  min-height: 251px;
  margin-bottom: 15px;

  ${css.media.laptopL`
    min-height: 230px;
  `}
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-center')};
  width: 100%;
`
export const BannerContent = styled.div`
  ${css.flex()};
  max-width: ${css.ARTICLE_PAGE_MAX_WIDTH};
  width: 100%;
  margin-left: ${css.ARTICLE_CONTENT_OFFSET};
`
export const Main = styled.div`
  width: ${css.ARTICLE_CONTENT_WIDTH};
`
export const AuthorWrapper = styled.div`
  ${css.flex('align-start', 'justify-center')};
  width: ${css.ARTICLE_STICKER_WIDTH};
  margin-top: 32px;
`
export const BottomInfo = styled.div`
  ${css.flex('align-end', 'justify-between')};
  margin-top: 15px;
  padding-bottom: 45px;
  border-bottom: 1px solid;
  border-bottom-color: #004251;
  width: 100%;
  color: ${theme('thread.articleDigest')};
`
export const PublishDesc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 13px;
  border-left: 4px solid;
  border-left-color: #175473;
  padding-left: 8px;
  margin-left: 2px;

  &:hover {
    cursor: pointer;
    color: ${theme('thread.articleTitle')};
  }
  transition: color 0.25s;
`
