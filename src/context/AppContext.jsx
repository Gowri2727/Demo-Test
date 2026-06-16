import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('s2030-dark')
      return saved ? JSON.parse(saved) : false
    } catch { return false }
  })

  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('s2030-lang') || 'en' }
    catch { return 'en' }
  })

  useEffect(() => {
    const root = document.documentElement
    darkMode ? root.classList.add('dark') : root.classList.remove('dark')
    try { localStorage.setItem('s2030-dark', JSON.stringify(darkMode)) } catch {}
  }, [darkMode])

  useEffect(() => {
    try { localStorage.setItem('s2030-lang', language) } catch {}
  }, [language])

  const toggleDarkMode = useCallback(() => setDarkMode(p => !p), [])
  const toggleLanguage = useCallback(() => setLanguage(p => p === 'en' ? 'hi' : 'en'), [])

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode, language, toggleLanguage }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
