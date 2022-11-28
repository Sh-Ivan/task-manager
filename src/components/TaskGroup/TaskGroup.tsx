import React from 'react'
import Task from '../Task'
import './TaskGroup.scss'
import Plus from '../../assets/images/Plus.svg'

const TaskGroup = () => {
  return (
    <div className="task-block">
      <div className="task-block__top">
        <div>Todo</div>
        <div>
          <img src={Plus} alt="Plus" />
        </div>
      </div>
      <div className="task-group">
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  )
}

export default TaskGroup
