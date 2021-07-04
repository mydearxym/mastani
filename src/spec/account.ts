import type { TPagedCommunities } from './community'
import type { TC11NLayout } from './c11n'

export type TUser = {
  id?: string
  login?: string
  nickname?: string
  name?: string
  avatar?: string
  // TODO: figure it out
  extraId?: string
  editableCommunities?: TPagedCommunities
}

export type TAccount = TUser & {
  customization?: {
    theme?: string
    bannerLayout?: TC11NLayout
    markViewed?: boolean
    contentDivider?: boolean
    displayDensity?: string // oneOf(['20', '25', '30'])
  }
  isLogin?: boolean
  isValidSession?: boolean
  subscribedCommunitiesCount?: number
  // ...
}

export type TMembership = 'seniorMember' | 'sponsorMember' | 'donateMember'
