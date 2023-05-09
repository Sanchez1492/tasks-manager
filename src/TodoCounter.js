import './TodoCounter.css'

function TodoCounter ({ total, completed }) {
    return (
      <h1>
        You've completed <span>{completed}</span> out of <span>{total}</span> ToDo's
      </h1>
    );
}

export { TodoCounter }