import ITask from '../models/Task'

const initialState: ITask[] = [
  {
    id: 1,
    title:
      '1Task title with a lot of text. Task title with a lot of text. Task title with a lot of text. 1Task title with a lot of text. Task title with a lot of text. Task title with a lot of text.',
    description: `Task description with a lot of text. Task description with a lot of text. Task description with a lot of text.Task description with a lotof text. Task description with a lot of text. Task description with a
          lot of text.Task description with a lot of text. Task description with
          a lot of text. Task description with a lot of text.Task description
          with a lot of text. Task description with a lot of text. `,
    date: '2021-01-01',
    isActive: false,
    isDone: false,
  },
  {
    id: 2,
    title:
      '2Task title with a lot of text. Task title with a lot of text. Task title with a lot of text.',
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
      '3Task title with a lot of text. Task title with a lot of text. Task title with a lot of text.',
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
      '4Task title with a lot of text. Task title with a lot of text. Task title with a lot of text.',
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
    id: 5,
    title:
      '5Task title with a lot of text. Task title with a lot of text. Task title with a lot of text.',
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
      '6Task title with a lot of text. Task title with a lot of text. Task title with a lot of text.',
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

export default initialState
