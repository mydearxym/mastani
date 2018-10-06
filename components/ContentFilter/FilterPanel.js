import React from 'react'

import { FiltrPanelWrapper } from './styles'

import TimeFilter from './TimeFilter'
import SortFilter from './SortFilter'
import LengthFilter from './LengthFilter'
// job
import JobSalaryFilter from './JobSalaryFilter'
import JobExpFilter from './JobExpFilter'
import JobEducationFilter from './JobEducationFilter'
import JobFieldFilter from './JobFieldFilter'
import JobFinaceFilter from './JobFinaceFilter'
import JobScaleFilter from './JobScaleFilter'
// video
import VideoSourceFilter from './VideoSourceFilter'

import { THREAD } from '../../utils'

const FilterPanel = ({ activeFilter, onSelect }) => {
  const thread = THREAD.VIDEO
  switch (thread) {
    case THREAD.POST: {
      return (
        <FiltrPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          <LengthFilter activeFilter={activeFilter} onSelect={onSelect} />
        </FiltrPanelWrapper>
      )
    }
    case THREAD.VIDEO: {
      return (
        <FiltrPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          <VideoSourceFilter onSelect={onSelect} />
        </FiltrPanelWrapper>
      )
    }
    case THREAD.REPO: {
      return (
        <FiltrPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
        </FiltrPanelWrapper>
      )
    }
    case THREAD.JOB: {
      return (
        <FiltrPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobSalaryFilter onSelect={onSelect} />
          <JobExpFilter onSelect={onSelect} />
          <JobEducationFilter onSelect={onSelect} />
          <JobFieldFilter onSelect={onSelect} />
          <JobFinaceFilter onSelect={onSelect} />
          <JobScaleFilter onSelect={onSelect} />
        </FiltrPanelWrapper>
      )
    }
    default: {
      return (
        <FiltrPanelWrapper>
          <TimeFilter activeFilter={activeFilter} onSelect={onSelect} />
          <SortFilter activeFilter={activeFilter} onSelect={onSelect} />
          <LengthFilter activeFilter={activeFilter} onSelect={onSelect} />
          <JobSalaryFilter onSelect={onSelect} />
          <JobExpFilter onSelect={onSelect} />
          <JobEducationFilter onSelect={onSelect} />
          <JobFieldFilter onSelect={onSelect} />
          <JobFinaceFilter onSelect={onSelect} />
          <JobScaleFilter onSelect={onSelect} />
        </FiltrPanelWrapper>
      )
    }
  }
}

export default FilterPanel
