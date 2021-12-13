import { FC, useState } from 'react'
import { Collapse } from 'react-collapse'
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
    <div className="pb-5">
      <div onClick={() => setIsOpen((prev) => !prev)}>
        <h3 className="title is-3 is-clickable is-unselectable">
          <span
            className="pr-2"
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              fontSize: '1.2rem',
            }}
          >
            <i className={isOpen ? 'fas fa-minus' : 'fas fa-plus'} />
          </span>
          {qa.question}
        </h3>
      </div>
      <Collapse isOpened={isOpen}>
        <div
          className="content pt-4 pl-5 pb-1"
          dangerouslySetInnerHTML={{ __html: qa.answer ?? '' }}
          style={{
            position: 'relative',
            left: '4px',
          }}
        />
      </Collapse>
    </div>
  )
}
