import styled from 'styled-components'

import Img from '@/Img'
import HashTagSVG from '@/SvgIcons/HashTagSVG'
import { theme, css } from '@/utils'

import { TagsWrapper } from './index'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: ${({ isInline }) => (!isInline ? '5px' : 0)};
  padding: ${({ isInline }) => (!isInline ? '5px' : 0)};
  max-width: 180px;
  border-radius: 5px;

  background: ${({ active, isInline }) =>
    !active || isInline ? 'transparent' : '#0e303d'};

  &:hover {
    background: ${({ isInline }) => (!isInline ? '#0e303d' : 'none')};
  }
`
export const AllTagIcon = styled(Img)`
  fill: ${theme('banner.desc')};
  margin-right: 10px;
  ${css.size(14)};
  transform: rotate(17deg);
`
const getActiveColor = (active, color, activeId) => {
  if (activeId !== null) return active ? color : '#497684'

  return !active ? color : '#497684'
}

export const HashSign = styled(HashTagSVG)`
  fill: ${({ active, color, activeId }) =>
    getActiveColor(active, color, activeId)};
  ${css.size(14)};
  margin-right: ${({ isInline }) => (!isInline ? '12px' : '3px')};
  opacity: ${theme('tags.dotOpacity')};

  transform: rotate(18deg);
`
export const TagTitle = styled.div`
  color: ${theme('tags.text')};
  font-size: ${({ isInline }) => (!isInline ? '14.5px' : '13px')};
  opacity: 0.9;
  letter-spacing: 2px;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  opacity: ${({ active }) => (active ? 1 : 0.9)};
  ${css.cutFrom('120px')};

  &:hover {
    cursor: pointer;
    opacity: 1;
    font-weight: bold;
  }

  ${TagsWrapper}:hover & {
    ${css.cutFrom('80px')};
  }

  transition: all 0.2s;
`
export const CountInfoWrapper = styled.div`
  opacity: 0;

  ${TagsWrapper}:hover & {
    opacity: 1;
  }

  transition: opacity 0.3s;
  transition-delay: 0.5s;
`