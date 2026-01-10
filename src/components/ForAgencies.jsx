import { useLanguage } from '../i18n/LanguageContext'

const ForAgencies = () => {
  const { t } = useLanguage()
  const benefits = t('forAgencies.benefits')

  return (
    <section 
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center fade-in-up">
          {t('forAgencies.title')}
        </h2>

        <p 
          className="text-lg md:text-xl mb-10 md:mb-12 text-center fade-in-up"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('forAgencies.description')}
        </p>

        <div className="space-y-5 md:space-y-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 fade-in-up"
            >
              <div 
                className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: 'var(--text-primary)' }}
              />
              <p 
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ForAgencies
