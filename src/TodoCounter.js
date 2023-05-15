import './TodoCounter.css'

function TodoCounter ({ total, completed }) {
  const isAllCompleted = total === completed;

  return (
    <h1>
      {isAllCompleted
        ? "Congratulations! You've completed all your tasks!"
        : [
            "You've completed ",
            <span key="completed">{completed}</span>,
            " out of ",
            <span key="total">{total}</span>,
            " ToDo's",
          ]}
    </h1>
  );
}

export { TodoCounter }