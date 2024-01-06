import React from 'react'
import './TaskCounter.css'
import { TaskContext } from '../TaskContext'

function TaskCounter () {
  const {
    totalTasks,
    completedTasks,
  } = React.useContext(TaskContext)

  if (totalTasks == completedTasks && totalTasks > 0) {
    return <h1>You have completed every task on the list!</h1>
  } else if (totalTasks == 0){
    return <h1>Add new tasks by clicking the button below</h1>
  } else {
    return <h1>You've completed <span style={{color: 'green'}}>{completedTasks}</span>  out of <span style={{color: 'red'}}>{totalTasks}</span>  Tasks!</h1>
  }
}

export { TaskCounter }