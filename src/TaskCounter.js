import './TaskCounter.css'

function TaskCounter ({ total, completed }) {
  if (total == completed && total > 0) {
    return <h1>You have completed every task on the list!</h1>
  } else if (total == 0){
    return <h1>Please, add a new task by clicking in the button below</h1>
  } else {
    return <h1>You've completed <span style={{color: 'green'}}>{completed}</span>  out of <span style={{color: 'red'}}>{total}</span>  Tasks!</h1>
  }
}

export { TaskCounter }