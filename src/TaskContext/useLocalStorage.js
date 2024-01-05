import React from "react";

function useLocalStorage (itemName, initialValue) {
  
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName)
    
        let parsedItems;
        
        if(!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItems = []
        } else {
          parsedItems = JSON.parse(localStorageItems)
          setItem(parsedItems)
        }
    
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 2000) 
    }, []);
    
  
    
    const saveItems = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
  
      setItem(newItem)
    }
  
    return {
      item,
      saveItems,
      loading,
      error
  }
}

export { useLocalStorage }