import React, { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext();

const setLocalStorage = () => {
  const localState = localStorage.getItem('state');
  return localState ? JSON.parse(localState) : { darkMode: true, language: true };
}

const AppProvider = ({ children }) => {
const [darkMode, setDarkMode] = useState(setLocalStorage().darkMode);
const [language, setLanguage] = useState(setLocalStorage().language);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify({ darkMode, language }));
  }, [darkMode, language])

  return (
    <AppContext.Provider value={{
      darkMode,
      language,
      setDarkMode,
      setLanguage,
    }}>
      { children }
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
