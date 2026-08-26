'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {

    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }

  }, [])


  const toggleDarkMode = () => {

    setIsDarkMode(prev => {

      const newMode = !prev

      if (newMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }

      return newMode

    })

  }


  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode: toggleDarkMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}


export const useTheme = () => useContext(ThemeContext)