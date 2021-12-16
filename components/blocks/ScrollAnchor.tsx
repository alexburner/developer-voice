import { FC } from 'react'

import { BlogPostBySlug_blogPost_blocks_ScrollAnchorRecord } from '../../gql/types/BlogPostBySlug'

const HEADER_HEIGHT_ADJUSTMENT = { position: 'relative', top: '-60px' } as const

export const ScrollAnchor: FC<{
  block: BlogPostBySlug_blogPost_blocks_ScrollAnchorRecord
}> = ({ block }) => (
  <div style={HEADER_HEIGHT_ADJUSTMENT} id={block.anchorId ?? ''} />
)
