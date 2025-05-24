import React from 'react';
import styles from "./Header.module.css"
import { FaBell } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";

export default function Header() {
  return (
    <div className={styles.searchContainer}>
    <span className={styles.searchIcon}><RiSearchLine /></span>
    <input type="text" className={styles.searchInput} placeholder="Search" />
    <span ><FaBell className={styles.bellIcon} /></span>
  </div>
  )
}
