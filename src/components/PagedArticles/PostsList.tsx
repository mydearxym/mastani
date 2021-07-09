import { Fragment, memo } from 'react'

import PostItem from '@/components/PostItem'

const PostsList = ({ props }) => {
  const { entries, activeArticleId, onPreview } = props

  return (
    <Fragment>
      {entries.map((entry) => (
        <PostItem
          key={entry.id}
          entry={entry}
          activeArticleId={activeArticleId}
          onPreview={() => onPreview(entry)}
        />
      ))}
    </Fragment>
  )
}

export default memo(PostsList)