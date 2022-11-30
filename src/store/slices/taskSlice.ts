import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import initialState from '../initialState'

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload)
    },
    removeTask: (state, action: PayloadAction<Task>) => {
      return state.filter((task) => task.id !== action.payload.id)
    },
    toggleIsActive: (state, action: PayloadAction<Task>) =>
      state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            isActive: !task.isActive,
          }
        }
        return task
      }),
    toggleIsDone: (state, action: PayloadAction<Task>) =>
      state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            isDone: !task.isDone,
          }
        }
        return task
      }),
    setTasks: (state, action: PayloadAction<Task[]>) => {
      return action.payload
    },
  },
})

export const {
  addTask,
  removeTask,
  toggleIsActive,
  toggleIsDone,
  setTasks,
} = taskSlice.actions
export default taskSlice.reducer
