import './CreateTaskButton.css'

function CreateTaskButton ({ setOpenModal }) {
    return (
      <button
        className='create-task'
        onClick={() => {
          setOpenModal(state => !state)
        }}
      >Add new task</button>
    )
}

export { CreateTaskButton }