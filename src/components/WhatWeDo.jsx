import { useLanguage } from '../i18n/LanguageContext'

const WhatWeDo = () => {
  const { t } = useLanguage()
  const bullets = t('whatWeDo.bullets')

  return (
    <section 
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 md:mb-16 text-center fade-in-up">
          {t('whatWeDo.title')}
        </h2>

        <div className="space-y-6 md:space-y-8">
          {bullets.map((bullet, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 fade-in-up"
            >
              <div 
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: 'var(--text-primary)' }}
              />
              <p 
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
