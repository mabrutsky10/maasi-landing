import { useLanguage } from '../i18n/LanguageContext'

const InsightExtracts = () => {
  const { t } = useLanguage()
  const insights = t('insightExtracts.insights')

  return (
    <section 
      id="insights" 
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 md:mb-16 text-center fade-in-up">
          {t('insightExtracts.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="p-6 md:p-8 border rounded-lg transition-all duration-300 fade-in-up"
              style={{
                borderColor: 'var(--border-color)',
                backgroundColor: 'var(--bg-secondary)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-hover)'
                e.currentTarget.style.backgroundColor = 'var(--bg-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)'
                e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'
              }}
            >
              <h3 
                className="text-lg md:text-xl font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {insight.topic}
              </h3>
              
              <p 
                className="text-sm md:text-base mb-4 leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {insight.insight}
              </p>

              <div 
                className="space-y-2 pt-4 border-t"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <p 
                  className="text-xs md:text-sm font-mono"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {t('insightExtracts.signal')} {insight.signal}
                </p>
                <p 
                  className="text-xs md:text-sm italic"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {t('insightExtracts.soWhat')} {insight.soWhat}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InsightExtracts
