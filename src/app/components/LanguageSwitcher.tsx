'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation('common')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (i18n.isInitialized) {
      setReady(true)
    } else {
      i18n.on('initialized', () => setReady(true))
    }
  }, [i18n])

  const switchLocale = () => {
    const newLang = i18n.language === 'en' ? 'ro' : 'en'
    i18next.changeLanguage(newLang)
  }

  if (!ready) return null // prevent hydration mismatch

  return (
    <button onClick={switchLocale}>
      {t('switch_language')}
    </button>
  )
}

export default LanguageSwitcher