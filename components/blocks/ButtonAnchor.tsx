import { FC } from 'react'
import { BlogPostBySlug_blogPost_blocks_ButtonAnchorRecord } from '../../gql/types/BlogPostBySlug'

export const ButtonAnchor: FC<{
  block: BlogPostBySlug_blogPost_blocks_ButtonAnchorRecord
}> = ({ block }) => {
  const anchorId = block.anchorId ?? '#'
  const elementId = anchorId.slice(1)
  return (
    <a
      className="button is-primary is-medium"
      href={anchorId}
      onClick={(e) => {
        e.preventDefault()
        window.history.replaceState(null, '', anchorId)
        document
          .getElementById(elementId)
          ?.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      {block.label}
    </a>
  )
}
