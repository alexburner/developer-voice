import { FC } from 'react'
import { BlogPostBySlug_blogPost_blocks_ButtonAnchorRecord } from '../../gql/types/BlogPostBySlug'

export const ButtonAnchor: FC<{
  block: BlogPostBySlug_blogPost_blocks_ButtonAnchorRecord
}> = ({ block }) => {
  const anchorId = block.anchorId ?? ''
  const anchorHash = `#${anchorId}`
  return (
    <a
      className="button is-primary is-medium"
      href={anchorHash}
      onClick={(e) => {
        e.preventDefault()
        window.history.replaceState(null, '', anchorHash)
        document
          .getElementById(anchorId)
          ?.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      {block.label}
    </a>
  )
}
