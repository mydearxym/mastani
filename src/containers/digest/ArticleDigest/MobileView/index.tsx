/*
 *
 * ArticleDigest
 *
 */

import { FC } from 'react'
import { isNil } from 'ramda'
import { Waypoint } from 'react-waypoint'

import type { TScrollDirection } from '@/spec'
import { useScroll } from '@/hooks'
import { pluggedIn, buildLog } from '@/utils'

import FavoritesCats from '@/containers/tool/FavoritesCats'

import ArticleBaseStats from '@/components/ArticleBaseStats'
import PublishDate from '../DesktopView/PostLayout/PublishDate'

import type { TStore } from '../store'
import {
  Wrapper,
  InnerWrapper,
  BannerContent,
  Title,
  Brief,
} from '../styles/mobile_view/index'
import { useInit, inAnchor, outAnchor } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:ArticleDigest')

type TProps = {
  articleDigest?: TStore
}

const ArticleDigestContainer: FC<TProps> = ({ articleDigest: store }) => {
  const { direction: scrollDirection } = useScroll()
  useInit(store, scrollDirection as TScrollDirection)

  const { viewingArticle } = store

  if (isNil(viewingArticle.id)) return null

  return (
    <Wrapper>
      <FavoritesCats />
      <InnerWrapper>
        <BannerContent>
          <Brief>
            <PublishDate insertedAt={viewingArticle.insertedAt} />
            <Title>{viewingArticle.title}</Title>
            <ArticleBaseStats article={viewingArticle} />
          </Brief>
        </BannerContent>
      </InnerWrapper>
      <Waypoint onEnter={inAnchor} onLeave={outAnchor} />
    </Wrapper>
  )
}

export default pluggedIn(ArticleDigestContainer) as FC<TProps>
