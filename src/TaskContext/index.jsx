import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TaskContext = React.createContext()

function TaskProvider ({ children }) {
    const {
        item: tasks,
        saveItems: saveTasks,
        loading,
        error,
      } = useLocalStorage('TASKS_V1', [])
      
    const [searchValue, setSearchValue] = React.useState('')
    const [openModal, setOpenModal] = React.useState(false)
  
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    
      
    const searchedTasks = tasks.filter(
      (task) =>{
        const taskText = task.text.toLowerCase()
        const searchText = searchValue.toLowerCase()
  
        return taskText.includes(searchText)
      }
    )

    const addTask = (text) => {
      const newTasks = [...tasks]
      if (text.length === 0) {
        alert('Please, write something')
      } else if(newTasks.some(task => task.text === text)) {
        alert('You have already written that task')
      } else {
        newTasks.push({
          text,
          completed: false,
        })
        saveTasks(newTasks)
      }

      saveTasks(newTasks.sort((a, b) => {
        if (a.completed && !b.completed) {
          return 1; // Mueve 'a' al final
        }
        if (!a.completed && b.completed) {
          return -1; // Mueve 'b' al final
        }
        return 0; // No se cambia el orden
      }))
      
    }
  
    const finishTask = (text) => {
      const newTasks = [...tasks]
      const taskIndex = newTasks.findIndex(
        (task) => task.text == text
      )
  
      newTasks[taskIndex].completed = true
      saveTasks(newTasks.sort((a, b) => {
        if (a.completed && !b.completed) {
          return 1; // Mueve 'a' al final
        }
        if (!a.completed && b.completed) {
          return -1; // Mueve 'b' al final
        }
        return 0; // No se cambia el orden
      }))
    }
    
    const deleteTask = (text) => {
      const newTasks = [...tasks]
      const taskIndex = newTasks.findIndex(
        (task) => task.text == text
      )
      
      newTasks.splice(taskIndex, 1)
      saveTasks(newTasks)
    }

    return (
        <TaskContext.Provider value={{
            loading,
            error,
            totalTasks,
            completedTasks,
            searchValue,
            setSearchValue,
            searchedTasks,
            addTask,
            finishTask,
            deleteTask,
            openModal,
            setOpenModal,
        }}>
            { children }
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider }