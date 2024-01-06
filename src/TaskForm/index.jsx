import React from "react";
import { TaskContext } from "../TaskContext";
import './TaskForm.css'

function TaskForm () {
    const [newTaskValue, setNewTaskValue] = React.useState('')

    const {
        setOpenModal,
        addTask,
    } = React.useContext(TaskContext)

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskValue)
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTaskValue(event.target.value)
    }


    return (
        <>
        <div className="background"></div>
        <form
            className="form-container"
            onSubmit={onSubmit}
            type='button'
        >
            <label>Create a new task</label>
            <textarea
                placeholder="Cut onion"
                value = { newTaskValue }
                onChange = { onChange }
            />
            <div className="button-container">
                <button 
                    className="task-form--add"
                    type="submit"
                >Add</button>
                <button
                    className="task-form--cancel"
                    type="button"
                    onClick={onCancel}
                >Cancel</button>
            </div>
        </form>
        </>
    )
}

export { TaskForm }