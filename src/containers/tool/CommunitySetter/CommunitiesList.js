import React from 'react'
import { contains } from 'ramda'

import Pagi from '@/components/Pagi'
import Community from './Community'

import { Wrapper, EntriesWrapper } from './styles/communities_list'
import { loadCommunities } from './logic'

const CommunitiesList = ({
  data: { entries, pageNumber, pageSize, totalCount },
  curBelongIds,
}) => (
  <Wrapper>
    <EntriesWrapper>
      {entries.map((item) => (
        <Community
          key={item.id}
          entry={item}
          belong={contains(item.id, curBelongIds)}
        />
      ))}
    </EntriesWrapper>
    <Pagi
      margin={{ left: '-20px' }}
      pageNumber={pageNumber}
      pageSize={pageSize}
      totalCount={totalCount}
      onChange={loadCommunities}
    />
  </Wrapper>
)

export default React.memo(CommunitiesList)
