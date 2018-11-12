// this is tmp, use react-intl .. later

const I18nDict = {
  posts: '帖子',
  post: '帖子',
  map: '地图',
  cheatsheet: 'cheatsheet',
  news: '新闻',
  city: '同城',
  share: '分享',
  users: '用户',
  videos: '视频',
  video: '视频',
  repos: '开源项目',
  repo: '开源项目',
  jobs: '招聘',
  job: '招聘',
  // tags
  science: '科学',
  tech: '技术',
  workplace: '职场',
  product: '产品',
  design: '设计',
  hardware: '硬件',
  games: '游戏',
  apple: '苹果',
  startup: '创业',
  safe: '安全',
  'personal-project': '个人作品',
  'tools-libs': '工具/库',
  algorithm: '算法',
  ask: '问答',
  hangout: '闲聊',
  newbie: '新手',
  '3c': '数码',
  refined: '精华',
  spread: '推广',
  other: '其他..',
  // cities
  beijing: '北京',
  shanghai: '上海',
  shenzhen: '深圳',
  hangzhou: '杭州',
  guangzhou: '广州',
  chengdu: '成都',
  nanjing: '南京',
  wuhan: '武汉',
  xiamen: '厦门',
  oversea: '海外',
}

export const Trans = key => I18nDict[key] || key

export const holder = 1
