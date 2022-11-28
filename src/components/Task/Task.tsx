import React from 'react'
import './Task.scss'
import { ReactComponent as Trash } from '../../assets/images/trash.svg'
import useHover from '../../hooks/useHover'

const Task = () => {
  const [hoverRef, isHovered] = useHover<any>()

  return (
    <div className="task-card">
      <div className="task-card__row">
        <div className="task-card__column one-line task-title">
          Task title with a lot of text. Task title with a lot of text. Task
          title with a lot of text.
        </div>
        <div className="task-card__column task-date"> 5 days</div>
      </div>
      <div className="task-card__row">
        <div className="task-card__column four-lines task-description">
          Task description with a lot of text. Task description with a lot of
          text. Task description with a lot of text.Task description with a lot
          of text. Task description with a lot of text. Task description with a
          lot of text.Task description with a lot of text. Task description with
          a lot of text. Task description with a lot of text.Task description
          with a lot of text. Task description with a lot of text. Task
          description with a lot of text.
        </div>
      </div>
      <div className="task-card__row">
        <div className="task-card__column task-link">more information...</div>
        <div className="task-card__column task-delete">
          <Trash ref={hoverRef} fill={isHovered ? 'red' : 'black'} />
        </div>
      </div>
    </div>
  )
}

export default Task
