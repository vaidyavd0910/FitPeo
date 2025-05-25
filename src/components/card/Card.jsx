import React from 'react'
import styles from './Card.module.css';
export default function Card({data}) {
     if (!data) return null;
    const Icon = data.icon;
  return (
    <div className={styles.backgroundColor}>
        <div className={styles.headingPart}>
            <div className={styles.headingText}>{data.type}</div>
            <div>{Icon && <Icon size={20} />}</div>
        </div>
        <div>{data.time}</div>
        <div>{data.name}</div>
    </div>
  )
}
