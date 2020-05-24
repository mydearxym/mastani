import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE } from '@/constant'

import { getJwtToken, makeGQClient, ssrAmbulance, parseTheme } from '@/utils'
import { P } from '@/schemas'

import GlobalLayout from '@/containers/GlobalLayout'
import MeetupsContent from '@/containers/content/MeetupsContent'

import { useStore } from '@/stores/init2'

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? getJwtToken(props) : null
  const gqClient = makeGQClient(token)

  const sessionState = gqClient.request(P.sessionState)
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter: {
      page: 1,
      size: 30,
    },
  })

  return {
    ...(await sessionState),
    ...(await subscribedCommunities),
  }
}

export async function getServerSideProps(props) {
  let resp
  try {
    resp = await fetchData(props)
  } catch ({ response: { errors } }) {
    if (ssrAmbulance.hasLoginError(errors)) {
      resp = await fetchData(props, { realname: false })
    }
  }

  const { sessionState, subscribedCommunities } = resp
  const initProps = {
    theme: {
      curTheme: parseTheme(sessionState),
    },
    route: {
      mainPath: ROUTE.RECIPES,
      subPath: '',
    },
    account: {
      user: sessionState.user || {},
      isValidSession: sessionState.isValid,
      userSubscribedCommunities: subscribedCommunities,
    },
  }

  return {
    props: { errorCode: null, namespacesRequired: ['general'], ...initProps },
  }
}

const MeetupsPage = props => {
  const store = useStore(props)

  const seoConfig = {
    url: `${SITE_URL}/works`,
    title: '线下活动 | coderplanets',
    description: '线下分享，行业交流',
  }

  return (
    <Provider store={store}>
      <GlobalLayout page={ROUTE.MEETUPS} seoConfig={seoConfig} noSidebar>
        <MeetupsContent />
      </GlobalLayout>
    </Provider>
  )
}

export default MeetupsPage
