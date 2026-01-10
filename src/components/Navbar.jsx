import { useLanguage } from '../i18n/LanguageContext'

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Navbar = ({ isDark, toggleTheme }) => {
  const { language, changeLanguage, t } = useLanguage()
  
  const whatsappMessage = encodeURIComponent(t('whatsapp.message'))
  const whatsappLink = `https://wa.me/?text=${whatsappMessage}`
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-sm border-b transition-colors duration-300"
      style={{
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
        borderColor: 'var(--border-color)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo-maasi.png" 
              alt="MAASI" 
              className="navbar-logo w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => scrollToSection('insights')}
              className="text-sm md:text-base transition-colors duration-200 font-medium"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              aria-label="Scroll to insights section"
            >
              {t('navbar.insights')}
            </button>

            {/* Language Selector */}
            <div className="flex items-center gap-1 border rounded-md overflow-hidden"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <button
                onClick={() => changeLanguage('es-AR')}
                className={`px-2 py-1.5 text-sm transition-all duration-200 ${
                  language === 'es-AR' 
                    ? 'opacity-100' 
                    : 'opacity-50 hover:opacity-75'
                }`}
                style={{
                  backgroundColor: language === 'es-AR' ? 'var(--bg-secondary)' : 'transparent',
                  color: 'var(--text-primary)'
                }}
                aria-label="Switch to Spanish (Argentina)"
                title="Español (Argentina)"
              >
                🇦🇷
              </button>
              <button
                onClick={() => changeLanguage('en-US')}
                className={`px-2 py-1.5 text-sm transition-all duration-200 ${
                  language === 'en-US' 
                    ? 'opacity-100' 
                    : 'opacity-50 hover:opacity-75'
                }`}
                style={{
                  backgroundColor: language === 'en-US' ? 'var(--bg-secondary)' : 'transparent',
                  color: 'var(--text-primary)'
                }}
                aria-label="Switch to English (USA)"
                title="English (USA)"
              >
                🇺🇸
              </button>
              <button
                onClick={() => changeLanguage('pt-BR')}
                className={`px-2 py-1.5 text-sm transition-all duration-200 ${
                  language === 'pt-BR' 
                    ? 'opacity-100' 
                    : 'opacity-50 hover:opacity-75'
                }`}
                style={{
                  backgroundColor: language === 'pt-BR' ? 'var(--bg-secondary)' : 'transparent',
                  color: 'var(--text-primary)'
                }}
                aria-label="Switch to Portuguese (Brazil)"
                title="Português (Brasil)"
              >
                🇧🇷
              </button>
            </div>

            {/* Theme Toggle - Optional, minimal */}
            <button
              onClick={toggleTheme}
              className="transition-colors duration-200 text-sm"
              style={{ color: 'var(--text-tertiary)' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-secondary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-tertiary)'}
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* CTA Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 md:px-6 md:py-2.5 hover:opacity-90 transition-all duration-200 rounded-md text-sm md:text-base font-semibold"
              style={{
                backgroundColor: 'var(--cta-bg)',
                color: 'var(--cta-text)'
              }}
              aria-label="Contact via WhatsApp"
            >
              {t('navbar.hablemos')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
