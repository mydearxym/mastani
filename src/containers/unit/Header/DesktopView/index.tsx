import React from 'react'

import { METRIC } from '@/constant'

import CommunityView from './CommunityVIew'
import ArticleView from './ArticleView'
import ArticleEditorView from './ArticleEditorView'

const renderHeader = (metric: string): React.ReactNode => {
  switch (metric) {
    case METRIC.ARTICLE: {
      return <ArticleView metric={metric} />
    }
    case METRIC.ARTICLE_EDITOR: {
      return <ArticleEditorView metric={metric} />
    }
    default: {
      return <CommunityView metric={metric} />
    }
  }
}

type TProps = {
  metric: string
}

const DesktopView: React.FC<TProps> = ({ metric }) => {
  return <React.Fragment>{renderHeader(metric)}</React.Fragment>
}

export default DesktopView