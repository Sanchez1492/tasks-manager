import './CreateTaskButton.css'

function CreateTaskButton () {
    return (
      <button
        onClick={(event) => {
          console.log('Le diste click al boton');
          console.log(event);
        }}
      >Add new task</button>
    )
}

export { CreateTaskButton }