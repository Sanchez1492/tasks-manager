import React from 'react';
import { TaskItem } from '../TaskItem';
import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { TaskList } from '../TaskList';
import { CreateTaskButton } from '../CreateTaskButton';
import { TasksLoading } from '../TasksLoading';
import { TasksError } from '../TasksError';
import { EmptyTasks } from '../EmptyTasks';
import { TaskContext } from '../TaskContext';


function AppUI () {
    const {
        loading,
        error,
        searchedTasks,
        finishTask,
        deleteTask,
    } = React.useContext(TaskContext)

    return (
        <React.Fragment>
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
            <CreateTaskButton />
        </React.Fragment>
      )
}

export { AppUI }