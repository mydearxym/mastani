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

export type TRoute = {
  communityPath?: string
  threadPath?: string
  mainPath?: string
  subPath?: string
}

export type TTestable = {
  testid: string
}

export type TActive = {
  active?: boolean
  show?: boolean
  visible?: boolean
}

export type TSpace = {
  top?: number
  bottom?: number
  left?: number
  right?: number
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

export type TUser = {
  id: string
  login: string
  nickname: string
  avatar: string
}
export type TAccount = TUser & {
  customization?: {
    theme: string
    bannerLayout: string
  }
  // ...
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

// google analytis format
export type GA_EVENT = {
  action: string
  category: string
  label: string
  value: string
}

export type TSEO = {
  url: string
  title: string
  description: string
}

export type TLink = {
  href: string
}
