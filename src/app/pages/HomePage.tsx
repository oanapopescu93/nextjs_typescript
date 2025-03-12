'use client'

import { useTranslation } from 'react-i18next'
import styles from './HomePage.module.scss'

const HomePage = () => {
  const { t } = useTranslation('common')  

  return (
    <div className={styles.homePage}>
      <h1>{t('home')}</h1>
    </div>
  )
}

export default HomePage