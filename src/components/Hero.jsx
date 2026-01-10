import React from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Hero = () => {
  const { t } = useLanguage()
  const [logoError, setLogoError] = React.useState(false)
  const videoRef = React.useRef(null)
  
  const whatsappMessage = encodeURIComponent(t('whatsapp.message'))
  const whatsappLink = `https://wa.me/?text=${whatsappMessage}`

  React.useEffect(() => {
    if (videoRef.current) {
      // Reproducir el video mucho más lento (0.4 = 40% de velocidad, muy lento)
      videoRef.current.playbackRate = 0.4
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ isolation: 'isolate' }}>
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: -1 }}
      >
        <source src="/video-adn.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay - más oscuro */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 0
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center" style={{ zIndex: 1 }}>
        {!logoError && (
          <div className="mb-8 md:mb-12 fade-in-up">
            <img 
              src="/logo-maasi.png" 
              alt="MAASI" 
              className="h-24 md:h-32 lg:h-40 w-auto mx-auto"
              onError={() => setLogoError(true)}
            />
          </div>
        )}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 fade-in-up"
          dangerouslySetInnerHTML={{ __html: t('hero.title') }}
        />
        
        <p 
          className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto fade-in-up"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('hero.subtitle')}
        </p>

        <p 
          className="text-base md:text-lg mb-10 md:mb-12 max-w-xl mx-auto fade-in-up"
          style={{ color: 'var(--text-tertiary)' }}
        >
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 fade-in-up">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 md:px-10 md:py-4 hover:opacity-90 transition-all duration-200 rounded-md text-base md:text-lg font-semibold w-full sm:w-auto"
            style={{
              backgroundColor: 'var(--cta-bg)',
              color: 'var(--cta-text)'
            }}
            aria-label="Contact via WhatsApp"
          >
            {t('hero.cta')}
          </a>
          
          <button
            onClick={() => scrollToSection('insights')}
            className="transition-colors duration-200 text-base md:text-lg font-medium underline underline-offset-4"
            style={{ color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            aria-label="View insights"
          >
            {t('hero.viewInsights')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
