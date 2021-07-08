import { FC, memo } from 'react'
import { useAccount } from '@/hooks'

import { ReadedLabel } from './styles'
import type { TProps } from './index'

const ReadLabel: FC<TProps> = ({ entry, topOffset = '20px' }) => {
  const { c11n } = useAccount()
  const { isLogin, markViewed } = c11n

  const { viewerHasViewed } = entry

  if (!isLogin) return null
  if (markViewed && viewerHasViewed) {
    return <ReadedLabel topOffset={topOffset} />
  }

  return null
}

export default memo(ReadLabel)
