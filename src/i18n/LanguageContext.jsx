import { createContext, useContext, useState, useEffect } from 'react'
import esAR from './locales/es-AR.json'
import enUS from './locales/en-US.json'
import ptBR from './locales/pt-BR.json'

const LanguageContext = createContext()

const translations = {
  'es-AR': esAR,
  'en-US': enUS,
  'pt-BR': ptBR
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Try to get from localStorage, default to Spanish (Argentina)
    const saved = localStorage.getItem('maasi-language')
    return saved || 'es-AR'
  })

  useEffect(() => {
    // Save to localStorage when language changes
    localStorage.setItem('maasi-language', language)
  }, [language])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
