import { useLanguage } from '../i18n/LanguageContext'

const FinalCTA = () => {
  const { t } = useLanguage()
  const whatsappMessage = encodeURIComponent(t('whatsapp.message'))
  const whatsappLink = `https://wa.me/?text=${whatsappMessage}`
  return (
    <section 
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 fade-in-up">
          {t('finalCTA.title')}
        </h2>
        
        <p 
          className="text-base md:text-lg mb-10 md:mb-12 fade-in-up"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('finalCTA.description')}
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 md:px-12 md:py-5 hover:opacity-90 transition-all duration-200 rounded-md text-lg md:text-xl font-semibold fade-in-up"
          style={{
            backgroundColor: 'var(--cta-bg)',
            color: 'var(--cta-text)'
          }}
          aria-label="Contact via WhatsApp"
        >
          {t('finalCTA.cta')}
        </a>
      </div>
    </section>
  )
}

export default FinalCTA
