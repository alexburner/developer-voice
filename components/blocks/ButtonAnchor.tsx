import { FC } from 'react'
import { BlogPostBySlug_blogPost_blocks_ButtonAnchorRecord } from '../../gql/types/BlogPostBySlug'

export const ButtonAnchor: FC<{
  block: BlogPostBySlug_blogPost_blocks_ButtonAnchorRecord
}> = ({ block }) => (
  <button
    className="button is-primary is-medium"
    onClick={() =>
      document
        .getElementById(block.anchorId ?? '')
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  >
    {block.label}
  </button>
)
