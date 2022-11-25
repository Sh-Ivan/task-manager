import React from 'react'
import Task from '../Task'
import './TaskGroup.scss'

const TaskGroup = () => {
  return (
    <div className="task-group">
      <Task />
      <Task />
      <Task />
    </div>
  )
}

export default TaskGroup
