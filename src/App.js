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
  const [tasks, setTasks] = React.useState(defaultTasks)
  const [searchValue, setSearchValue] = React.useState('')

  console.log('Los usuarios buscan tareas de ' + searchValue);

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  const searchedTasks = tasks.filter(
    (task) =>{
      const taskText = task.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return taskText.includes(searchText)
    })
  
  const finishTask = (text) => {
    const newTasks = [...tasks]
    const taskIndex = newTasks.findIndex((task) => task.text == text)

    newTasks[taskIndex].completed = true
    setTasks(newTasks)
  }

  return (
    <React.Fragment>
        <div className='bg-img'>
        </div>
        <TaskCounter total={totalTasks} completed={completedTasks} />
        <TaskSearch
          searchValue= {searchValue}
          setSearchValue= {setSearchValue}
        />

        <TaskList>
          {searchedTasks.map(task => (
            <TaskItem 
            key= {task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => finishTask(task.text)}
            />
          ))}
        </TaskList>

        <CreateTaskButton />
    </React.Fragment>
  )
}

export default App;
