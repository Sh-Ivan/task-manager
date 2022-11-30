import React, { useEffect, useState } from 'react'
import Task from '../Task'
import './TaskGroup.scss'
import { ReactComponent as Plus } from '../../assets/images/plus.svg'
import { ReactComponent as Arrow } from '../../assets/images/arrowUp.svg'
import useHover from '../../hooks/useHover'
import { useAppSelector } from '../../store/hooks'
import TaskModalForm from '../TaskModalForm/TaskModalForm'

interface TaskGroupProps {
  isDone: boolean
}

const TaskGroup = ({ isDone }: TaskGroupProps) => {
  const [visibleTasks, setVisibleTasks] = useState([] as JSX.Element[])
  const [modalShow, setModalShow] = React.useState(false)
  const [startWindow, setStartWindow] = useState(0)
  const tasks = useAppSelector((state) => state.tasks)
  const [hoverRef1, isHovered1] = useHover<any>()
  const [hoverRef2, isHovered2] = useHover<any>()
  const [hoverRef3, isHovered3] = useHover<any>()

  useEffect(() => {
    const listTasks = tasks
      .filter((task) => task.isDone === isDone)
      .slice(startWindow, startWindow + 3)
      .map((task) => {
        return <Task task={task} key={task.id} />
      })
    setVisibleTasks(listTasks)
  }, [tasks, isDone, startWindow])

  const handleStartWindow = () => {
    const length = tasks.filter((task) => task.isDone === isDone).length
    setStartWindow(Math.min(startWindow + 1, length - 3))
  }

  const header = isDone ? (
    <div className="task-block__top center">
      <div>Done</div>
    </div>
  ) : (
    <div className="task-block__top">
      <div>Todo</div>
      <div ref={hoverRef3} onClick={() => setModalShow(true)}>
        <Plus fill={isHovered3 ? '#0038ff' : 'black'} />
      </div>
    </div>
  )

  return (
    <div className="task-block">
      {header}
      <div className="task-group">
        <div
          ref={hoverRef1}
          className="arrow arrow-up"
          onClick={() => setStartWindow(Math.max(startWindow - 1, 0))}
        >
          <Arrow stroke={isHovered1 ? '#0038ff' : 'black'} />
        </div>
        {visibleTasks}
        <div
          ref={hoverRef2}
          className="arrow arrow-down rotate-180"
          onClick={handleStartWindow}
        >
          <Arrow stroke={isHovered2 ? '#0038ff' : 'black'} />
        </div>
      </div>
      <TaskModalForm show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default TaskGroup
