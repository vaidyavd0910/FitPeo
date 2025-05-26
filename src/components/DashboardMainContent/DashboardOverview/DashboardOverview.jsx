import React from 'react';
import AnatomySection from './AnatomySection/AnatomySection';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';
import medicalRecordsData from '../../../util/MedicalRecordsData/MedicalRecordsData';
import Header from '../../Header/Header';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import styles from './DashboardOverview.module.css';

export default function DashboardOverview() {
  return (
    <>
      <div className={styles.dashboardContainer}>
        <Header />
      </div>

      <h3 className={styles.pageTitle}>Dashboard</h3>

      <div className={styles.overviewWrapper}>
        <AnatomySection />
        <div className={styles.healthStatusContainer}>
          {medicalRecordsData.map((record, index) => (
            <HealthStatusCards key={index} data={record} />
          ))}
        </div>
      </div>

      <div className={styles.activityFeedWrapper}>
        <ActivityFeed />
      </div>
    </>
  );
}