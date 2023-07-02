import './TaskCounter.css'

function TaskCounter ({ total, completed }) {
    return (
      <h1>
        You've completed <span style={{color: 'green'}}>{completed}</span>  out of <span style={{color: 'red'}}>{total}</span>  Tasks!
      </h1>
    )
}

export { TaskCounter }