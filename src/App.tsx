import React from 'react'
import TaskGroup from './components/TaskGroup'

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskGroup isDone={false} />
      <TaskGroup isDone={true} />
    </div>
  )
}

export default App
