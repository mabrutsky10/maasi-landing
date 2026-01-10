import { useEffect, useState } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import InsightExtracts from './components/InsightExtracts'
import ForAgencies from './components/ForAgencies'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Initialize scroll reveal observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-in-up')
    elements.forEach(el => observer.observe(el))

    return () => {
      elements.forEach(el => observer.unobserve(el))
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('light', !isDark)
    document.body.classList.toggle('light', !isDark)
  }

  return (
    <LanguageProvider>
      <div className={`min-h-screen ${isDark ? 'dark' : 'light'}`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <WhatWeDo />
          <InsightExtracts />
          <ForAgencies />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
