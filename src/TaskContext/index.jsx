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
    
      const completedTasks = tasks.filter(task => task.completed).length;
      const totalTasks = tasks.length;
    
      
      const searchedTasks = tasks.filter(
        (task) =>{
          const taskText = task.text.toLowerCase()
          const searchText = searchValue.toLowerCase()
    
          return taskText.includes(searchText)
        }
      )
    
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
            finishTask,
            deleteTask,
        }}>
            { children }
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider }