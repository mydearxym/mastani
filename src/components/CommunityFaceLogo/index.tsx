/*
 *
 * CommunityFaceLogo
 *
 */

import { FC, memo } from 'react'
import { isEmpty } from 'ramda'

import { SITE_LOGO } from '@/config'
import { HCN } from '@/constant'
// import { ICON_BASE } from '@/config'
import { buildLog } from '@/utils'

import { Logo, HomeLogo } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:CommunityFaceLogo:index')

type TProps = {
  noFill?: boolean
  src?: string
  raw?: string
  loading?: boolean | null
  className?: string
}

const CommunityFaceLogo: FC<TProps> = ({
  noFill = false,
  src = '',
  raw = HCN,
  loading,
  className = 'community-facelogo-class',
}) => {
  if (raw === HCN || isEmpty(src)) {
    return <HomeLogo src={SITE_LOGO} className={className} />
  }

  return (
    <Logo noFill={noFill} src={src} loading={loading} className={className} />
  )
}

export default memo(CommunityFaceLogo)
