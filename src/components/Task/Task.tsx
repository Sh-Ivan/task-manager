import React from 'react'
import './Task.scss'

const Task = () => {
  return (
    <div className="task-card">
      <div className="task-card__row">
        <div className="task-card__column one-line">
          Task title with a lot of text. Task title with a lot of text. Task
          title with a lot of text.
        </div>
        <div className="task-card__column"> 5 days</div>
      </div>
      <div className="task-card__row">
        <div className="task-card__column four-lines">
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
        <div className="task-card__column">more information...</div>
        <div className="task-card__column">Basket</div>
      </div>
    </div>
  )
}

export default Task
