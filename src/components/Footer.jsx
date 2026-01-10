import { useLanguage } from '../i18n/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  return (
    <footer 
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p 
            className="text-sm md:text-base text-center md:text-left"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {t('footer.tagline')}
          </p>
          <a
            href={`mailto:${t('footer.email')}`}
            className="text-sm md:text-base transition-colors duration-200"
            style={{ color: 'var(--text-tertiary)' }}
            onMouseEnter={(e) => e.target.style.color = 'var(--text-secondary)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-tertiary)'}
            aria-label="Contact email"
          >
            {t('footer.email')}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
