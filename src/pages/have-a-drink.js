import React from 'react'
import { Provider } from 'mobx-react'
import { merge } from 'ramda'

import { SITE_URL } from '@/config'
import { ROUTE, METRIC } from '@/constant'

import { getJwtToken, makeGQClient, ssrAmbulance, parseTheme } from '@/utils'
import { P } from '@/schemas'
import GlobalLayout from '@/containers/layout/GlobalLayout'
import HaveADrinkContent from '@/containers/content/HaveADrinkContent'

import { useStore } from '@/stores/init'

const fetchData = async (props, opt) => {
  const { realname } = merge({ realname: true }, opt)

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

export const getServerSideProps = async (props) => {
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

const HaveADrinkPage = (props) => {
  const store = useStore(props)

  const seoConfig = {
    url: `${SITE_URL}/${ROUTE.HAVE_A_DRINK}`,
    title: '来一杯 | coderplanets',
    description: 'IT冷知识，酷细节，毒鸡汤',
  }

  return (
    <Provider store={store}>
      <GlobalLayout
        metric={METRIC.HAVE_A_DRINK}
        seoConfig={seoConfig}
        noSidebar
      >
        <HaveADrinkContent />
      </GlobalLayout>
    </Provider>
  )
}

export default HaveADrinkPage
