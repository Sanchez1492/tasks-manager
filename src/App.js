import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton'
import React from 'react'
import './App.css';

const defaultTodos = [
  { text: 'Work', completed: true },
  { text: 'Do some cardio', completed: false },
  { text: 'Super long text to see how the li tag works with long texts. Did I mention that this is a really long text?. If I didnt, i just did', completed: true },
  { text: 'Dinner', completed: false },
  { text: 'Extra task to work with a task-only scrollbar', completed: false },
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={24}/>
      <TodoSearch />
      <div className="item-container">
        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} 
            />
          ))}
        </TodoList>
      </div>
      <CreateTodoButton />
    </React.Fragment>
  ); 
}

export default App;
