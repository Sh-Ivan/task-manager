import React, { useCallback, useEffect, useState } from 'react'
import TaskGroup from './components/TaskGroup'
import './styles/App.scss'
import { ReactComponent as Arrow } from './assets/images/arrowRight.svg'
import useHover from './hooks/useHover'
import { useAppDispatch, useAppSelector } from './store/hooks'
import {
  removeTask,
  toggleIsActive,
  toggleIsDone,
} from './store/slices/taskSlice'

function App() {
  const [isDisableArrows, setIsDisableArrows] = useState(false)
  const tasks = useAppSelector((state) => state.tasks)
  const dispatch = useAppDispatch()
  const [hoverRef1, isHovered1] = useHover<any>()
  const [hoverRef2, isHovered2] = useHover<any>()

  const handleUserKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event
      if (key === 'Delete') {
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i].isActive) dispatch(removeTask(tasks[i]))
        }
      }
    },
    [tasks, dispatch],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  }, [handleUserKeyPress])

  useEffect(() => {
    let isLeftSelected = false
    let isRightSelected = false
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].isActive && !tasks[i].isDone) {
        isLeftSelected = true
      }
      if (tasks[i].isActive && tasks[i].isDone) {
        isRightSelected = true
      }
    }
    setIsDisableArrows(isLeftSelected && isRightSelected)
  }, [tasks])

  const handleClickArrowRight = () => {
    if (isDisableArrows) return
    for (let i = 0; i < tasks.length; i++) {
      if (!tasks[i].isDone && tasks[i].isActive) {
        dispatch(toggleIsActive(tasks[i]))
        dispatch(toggleIsDone(tasks[i]))
      }
    }
  }

  const handleClickArrowLeft = () => {
    if (isDisableArrows) return
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].isDone && tasks[i].isActive) {
        dispatch(toggleIsActive(tasks[i]))
        dispatch(toggleIsDone(tasks[i]))
      }
    }
  }

  return (
    <div className="App">
      <div className="flex column app-header">
        <div className="app-title">Perfect Task Manager</div>
        <div className="app-description">
          the only manager you really need to manage your tasks
        </div>
      </div>
      <div className="flex">
        <div className="column">
          <TaskGroup isDone={false} />
        </div>
        <div className="column arrows">
          <div
            ref={hoverRef1}
            className="arrow"
            onClick={handleClickArrowRight}
          >
            <Arrow
              fill={
                isDisableArrows ? '#BBBBBB' : isHovered1 ? '#0038ff' : 'black'
              }
            />
          </div>
          <div
            ref={hoverRef2}
            className="arrow rotate-180"
            onClick={handleClickArrowLeft}
          >
            <Arrow
              fill={
                isDisableArrows ? '#BBBBBB' : isHovered2 ? '#0038ff' : 'black'
              }
            />
          </div>
        </div>
        <div className="column">
          <TaskGroup isDone={true} />
        </div>
      </div>
    </div>
  )
}

export default App
