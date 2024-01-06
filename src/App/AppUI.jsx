import React from 'react';
import { TaskItem } from '../TaskItem';
import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskList';
import { CreateTaskButton } from '../CreateTaskButton';
import { TaskForm } from '../TaskForm'
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError';
import { EmptyTasks } from '../EmptyTasks';
import { Modal } from '../Modal';
import { TaskContext } from '../TaskContext';


function AppUI () {
    const {
        loading,
        error,
        searchedTasks,
        finishTask,
        deleteTask,
        openModal,
        setOpenModal,
    } = React.useContext(TaskContext)

    return (
        <>
            <div className='bg-img'>
            </div>
            <TaskCounter />
            <TaskSearch />
                <TaskList>
                        {loading && <TasksLoading />}
                        {error && <TasksError />}
                        {(!loading && searchedTasks.length == 0) && <EmptyTasks />}
                        {searchedTasks.map(task => (
                            <TaskItem 
                            key= {task.text}
                            text={task.text}
                            completed={task.completed}
                            onComplete={() => finishTask(task.text)}
                            onDelete={() => deleteTask(task.text)}
                            />
                        ))}
                </TaskList>
            <CreateTaskButton
                setOpenModal = { setOpenModal }
            />
            
            {openModal && (
                <Modal>
                    <TaskForm />
                </Modal>
            )}
        </>
      )
}

export { AppUI }