import React from 'react'
import './Task.scss'
import { ReactComponent as Trash } from '../../assets/images/trash.svg'
import useHover from '../../hooks/useHover'
import { useAppDispatch } from '../../store/hooks'
import { toggleIsActive, removeTask } from '../../store/slices/taskSlice'
import ITask from '../../models/Task'
import TaskModal from '../TaskModal/TaskModal'

interface taskProps {
  task: ITask
}

const Task = ({ task }: taskProps) => {
  const [modalShow, setModalShow] = React.useState(false)
  const [hoverRef, isHovered] = useHover<any>()
  const dispatch = useAppDispatch()

  const handleToggleClick = () => {
    dispatch(toggleIsActive(task))
  }

  const handleDeleteClick = () => {
    dispatch(removeTask(task))
  }

  const classNames = task.isActive ? 'task-card task-card__active' : 'task-card'

  return (
    <div ref={hoverRef} className={classNames} onClick={handleToggleClick}>
      <div className="task-card__row">
        <div className="task-card__column one-line task-title">
          {task.title}
        </div>
        <div className="task-card__column task-date">{task.date}</div>
      </div>
      <div className="task-card__row">
        <div className="task-card__column four-lines task-description">
          {task.description}
        </div>
      </div>
      <div className="task-card__row">
        <div
          className="task-card__column task-link"
          onClick={() => setModalShow(true)}
        >
          more information...
        </div>
        <div
          className="task-card__column task-delete"
          onClick={handleDeleteClick}
        >
          <Trash fill={isHovered ? 'red' : 'black'} />
        </div>
      </div>
      <TaskModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        task={task}
      />
    </div>
  )
}

export default Task
