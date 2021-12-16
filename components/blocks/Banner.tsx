import { FC } from 'react'
import { Image, ResponsiveImageType } from 'react-datocms'

import { PrimaryPageBySlug_primaryPage_blocks_BannerRecord } from '../../gql/types/PrimaryPageBySlug'
import { ButtonAnchor } from './ButtonAnchor'
import { ButtonExternal } from './ButtonExternal'
import { ButtonInternal } from './ButtonInternal'

export const Banner: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_BannerRecord
}> = ({ block }) => (
  <div className="columns">
    <div className="column">
      {block.logoImage && (
        <Image
          data={block.logoImage.responsiveImage as ResponsiveImageType}
          lazyLoad={false}
        />
      )}
      {block.title && <h1 className="title is-1">{block.title}</h1>}
      {block.text && (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      )}
      {Boolean(block.buttons?.length) && (
        <div className="mt-4">
          {block.buttons?.map((button) => {
            switch (button?.__typename) {
              case 'ButtonExternalRecord':
                return <ButtonExternal key={button.id} block={button} />
              case 'ButtonInternalRecord':
                return <ButtonInternal key={button.id} block={button} />
              case 'ButtonAnchorRecord':
                return <ButtonAnchor key={button.id} block={button} />
              default:
                return null
            }
          })}
        </div>
      )}
    </div>
    {block.foregroundImage && (
      <div className="column is-hidden-mobile">
        <Image
          data={block.foregroundImage.responsiveImage as ResponsiveImageType}
          lazyLoad={false}
        />
      </div>
    )}
  </div>
)
