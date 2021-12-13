import { FC, useState } from 'react'
import {
  PrimaryPageBySlug_primaryPage_blocks_FaqRecord,
  PrimaryPageBySlug_primaryPage_blocks_FaqRecord_questionsAnswers,
} from '../../gql/types/PrimaryPageBySlug'

export const FAQ: FC<{
  block: PrimaryPageBySlug_primaryPage_blocks_FaqRecord
}> = ({ block: { questionsAnswers } }) => (
  <>
    {questionsAnswers?.map((qa) =>
      qa ? <QuestionAnswer key={qa.id} qa={qa} /> : null,
    )}
  </>
)

const QuestionAnswer: FC<{
  qa: PrimaryPageBySlug_primaryPage_blocks_FaqRecord_questionsAnswers
}> = ({ qa }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div>
        {qa.question}
        <span onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? 'X' : '+'}
        </span>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: qa.answer ?? '' }}
        style={{
          overflow: 'hidden',
          transition: 'max-height 300ms ease-in',
          maxHeight: isOpen ? '1000px' : '0',
        }}
      />
    </div>
  )
}
