import React from 'react';
import { TaskItem } from './TaskItem';
import { TaskCounter } from './TaskCounter';
import { TaskSearch } from './TaskSearch';
import { TaskList } from './TaskList';
import { CreateTaskButton } from './CreateTaskButton';
import './App.css';

const defaultTasks = [
  { text: 'Work', completed: true },
  { text: 'Do some cardio', completed: false },
  { text: 'Super long text to see how the li tag works with long texts. Did I mention that this is a really long text?. If I didnt, i just did', completed: true },
  { text: 'Dinner', completed: false },
  { text: 'Extra task to work with a task-only scrollbar', completed: false },
  { text: 'Learn React.useState from JuanDC', completed: false },
]

function App() {
  return (
    <React.Fragment>
        <div className='bg-img'>
        </div>
        <TaskCounter total={25} completed={16} />
        <TaskSearch />

        <TaskList>
          {defaultTasks.map(task => (
            <TaskItem 
            key= {task.text}
            text={task.text}
            completed={task.completed}
            />
          ))}
        </TaskList>

        <CreateTaskButton />
    </React.Fragment>
  )
}

export default App;
