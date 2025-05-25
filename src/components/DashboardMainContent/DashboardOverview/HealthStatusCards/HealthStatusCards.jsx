import React from 'react';
import styles from './HealthStatusCards.module.css'

export default function HealthStatusCards({data}) {
     if (!data) return null;
    const Icon = data.icon;
  return (
    <div className={styles.cardBackground}>
        <div className={styles.headingPart}>
            <div>{Icon && <Icon size={20} />}</div>
            <div className={styles.text}>{data.title}</div>
        </div>
        <div className={styles.date}>Date: {data.date} </div>
        <div>chart</div>
    </div>
  )
}
