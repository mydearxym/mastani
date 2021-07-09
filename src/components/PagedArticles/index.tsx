/*
 *
 * PagedArticles
 *
 */

import { Fragment, FC, memo } from 'react'

import type { TThread, TArticle, TPagedArticles, TResState } from '@/spec'
import { EVENT } from '@/constant'
import { buildLog, send } from '@/utils'
import { useViewing } from '@/hooks'

import Pagi from '@/components/Pagi'
import ArticleList from './ArticleList'
import CommunityRecommends from './CommunityRecommends'

/* eslint-disable-next-line */
const log = buildLog('c:PagedArticles:index')

type TProps = {
  thread: TThread
  data: TPagedArticles
  resState: TResState
  onPreview: (article: TArticle) => void
  // TODO: remove
  emptyPrefix?: string
}

const PagedArticles: FC<TProps> = ({
  thread,
  data,
  resState,
  onPreview,
  emptyPrefix,
}) => {
  const { entries, ...pagi } = data
  const { viewingArticle } = useViewing()

  return (
    <Fragment>
      <ArticleList
        thread={thread}
        activeArticleId={viewingArticle.id}
        entries={entries}
        resState={resState}
        emptyPrefix={emptyPrefix}
        onPreview={onPreview}
      />

      <Pagi
        {...pagi}
        onChange={(page) => send(EVENT.REFRESH_ARTICLES, { page })}
        margin={{ bottom: '60px', top: '60px' }}
      >
        <CommunityRecommends />
      </Pagi>
    </Fragment>
  )
}

export default memo(PagedArticles)