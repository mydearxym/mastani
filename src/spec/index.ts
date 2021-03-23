import { TRootStore as RootStoreType } from '@/stores/RootStore'

export type {
  TSIZE,
  TSIZE_T,
  TSIZE_S,
  TSIZE_M,
  TSIZE_L,
  TSIZE_TS,
  TSIZE_TSM,
  TSIZE_SML,
  TSIZE_SM,
} from './size'
export type { TButton } from './comp'

export type { TTheme, TThemeMap, TThemeName } from './theme'
export type { TAccount, TUser, TMembership } from './account'
export type { TTestable, TActive, TSpace, TGAEvent, TSEO, TLink } from './utils'

export type TRoute = {
  communityPath?: string
  threadPath?: string
  mainPath?: string
  subPath?: string
}

export type TRootStore = RootStoreType

// c# like
export type Nullable<T> = T | null

export type TCommunity = {
  id: string
  title: string
  logo: string
  raw: string
}

export type TArticle = {
  id: string
  title: string
  body: string
  author: {
    id: string
    login: string
    nickname: string
    avatar: string
  }
  // ...
}

export type TViewing = {
  community: TCommunity
  post: TArticle
}

export type TThread = string
