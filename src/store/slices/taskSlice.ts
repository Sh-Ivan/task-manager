import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'

const initialState: Task[] = [
  {
    id: 1,
    title:
      'Task title with a lot of text. Task title with a lot of text. Task title with a lot of text.',
    description: `Task description with a lot of text. Task description with a lot of text. Task description with a lot of text.Task description with a lotof text. Task description with a lot of text. Task description with a
          lot of text.Task description with a lot of text. Task description with
          a lot of text. Task description with a lot of text.Task description
          with a lot of text. Task description with a lot of text. Task
          description with a lot of text.`,
    date: '2021-01-01',
    isActive: false,
    isDone: false,
  },
  {
    id: 2,
    title:
      'Task title with a lot of text. Task title with a lot of text. Task title with a lot of text.',
    description: `Task description with a lot of text. Task description with a lot of text. Task description with a lot of text.Task description with a lotof text. Task description with a lot of text. Task description with a
          lot of text.Task description with a lot of text. Task description with
          a lot of text. Task description with a lot of text.Task description
          with a lot of text. Task description with a lot of text. Task
          description with a lot of text.`,
    date: '2021-01-01',
    isActive: true,
    isDone: false,
  },
  {
    id: 3,
    title:
      'Task title with a lot of text. Task title with a lot of text. Task title with a lot of text.',
    description: `Task description with a lot of text. Task description with a lot of text. Task description with a lot of text.Task description with a lotof text. Task description with a lot of text. Task description with a
          lot of text.Task description with a lot of text. Task description with
          a lot of text. Task description with a lot of text.Task description
          with a lot of text. Task description with a lot of text. Task
          description with a lot of text.`,
    date: '2021-01-01',
    isActive: false,
    isDone: false,
  },
  {
    id: 4,
    title:
      'Task title with a lot of text. Task title with a lot of text. Task title with a lot of text.',
    description: `Task description with a lot of text. Task description with a lot of text. Task description with a lot of text.Task description with a lotof text. Task description with a lot of text. Task description with a
          lot of text.Task description with a lot of text. Task description with
          a lot of text. Task description with a lot of text.Task description
          with a lot of text. Task description with a lot of text. Task
          description with a lot of text.`,
    date: '2021-01-01',
    isActive: true,
    isDone: true,
  },
  {
    id: 5,
    title:
      'Task title with a lot of text. Task title with a lot of text. Task title with a lot of text.',
    description: `Task description with a lot of text. Task description with a lot of text. Task description with a lot of text.Task description with a lotof text. Task description with a lot of text. Task description with a
          lot of text.Task description with a lot of text. Task description with
          a lot of text. Task description with a lot of text.Task description
          with a lot of text. Task description with a lot of text. Task
          description with a lot of text.`,
    date: '2021-01-01',
    isActive: false,
    isDone: true,
  },
  {
    id: 6,
    title:
      'Task title with a lot of text. Task title with a lot of text. Task title with a lot of text.',
    description: `Task description with a lot of text. Task description with a lot of text. Task description with a lot of text.Task description with a lotof text. Task description with a lot of text. Task description with a
          lot of text.Task description with a lot of text. Task description with
          a lot of text. Task description with a lot of text.Task description
          with a lot of text. Task description with a lot of text. Task
          description with a lot of text.`,
    date: '2021-01-01',
    isActive: false,
    isDone: true,
  },
]

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [] as Task[],
  },
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    removeTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id)
    },
    toggleIsActive: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            isActive: !task.isActive,
          }
        }
        return task
      })
    },
  },
})

export const { addTask, removeTask, toggleIsActive } = taskSlice.actions
export default taskSlice.reducer
