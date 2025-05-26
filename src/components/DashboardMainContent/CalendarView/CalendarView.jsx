import React from 'react'
import cardInfo from '../../../util/DrInfo/DrInfo'
import Card from '../../card/card'
import { MdFace } from "react-icons/md";
import styles from './CalenderView.module.css'
import { BiSolidLeftArrowAlt ,BiSolidRightArrowAlt } from "react-icons/bi";
const schedule = {
  "2021-10-25": {
    day: "Mon",
    times: ["10:00", "11:00", "12:00"]
  },
  "2021-10-26": {
    day: "Tues",
    times: ["08:00", "09:00", "10:00"]
  },
  "2021-10-27": {
    day: "Wed",
    times: ["12:00","--" ,"13:00"]
  },
  "2021-10-28": {
    day: "Thurs",
    times: ["10:00", "11:00","--"]
  },
  "2021-10-29": {
    day: "Fri",
    times: ["--","14:00", "16:00"]
  },
  "2021-10-30": {
    day: "Sat",
    times: ["12:00", "14:00", "15:00"]
  },
  "2021-10-31": {
    day: "Sun",
    times: ["09:00", "11:00"]
  }
};

const selectedTime = {
  date: "2021-10-26",
  time: "09:00"
};
export default function CalendarView() {
  const days = Object.entries(schedule).map(([dateKey, data]) => {
    const date = parseInt(dateKey.split("-")[2]);
    return { ...data, date, dateKey };
  });

     const buttonStyle = {
    width: '30px',
    height: '30px',
    margin: '10px',
    fontSize: '24px',
    borderRadius: '8px',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  };

  

    
  return (
    <>
        <div style={{ display: 'flex', justifyContent:'end' }}>
      <button style={{ ...buttonStyle, backgroundColor: 'rgb(33, 186, 233)', color: '#fff' }}>
            <MdFace/>
      </button>
      <button style={{ ...buttonStyle, backgroundColor: ' rgb(43, 43, 160)', color: '#fff' }}>
        +
      </button>
    </div>
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>October 2021</h2>
        <div className={styles.navButtons}>
          < BiSolidLeftArrowAlt  size={20} />
         <BiSolidRightArrowAlt size={20} />
        </div>
      </div>
      <div className={styles.grid}>
        {days.map(({ day, date, dateKey, times }) => (
          <div
            key={dateKey}
            className={styles.dayCard }
          >
            <div className={styles.dayLabel}>{day}</div>
            <div className={styles.dayDate}>{date}</div>
            <div className={styles.times}>
              {times.map((time) => (
                <div
                  key={time}
                  className={styles.timeSlot}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
        <div style={{display: 'flex', gap:'10px'}}>
            {cardInfo.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>
    </>
    
  )
  };