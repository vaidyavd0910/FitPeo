import React from "react";
import styles from "./Sidebar.module.css";
import sidebarData from "../../util/SidebarData/SidebarData";
import { MdMenu } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
    <div className={styles.logo}>{sidebarData.logo}</div>
  
    <div className={styles.list}>
      {sidebarData.sections.map((section, idx) => (
        <div key={idx}>
          <div className={styles.sectionTitle}>{section.title}</div>
          {section.items.map((item, i) => (
            <div key={i} className={styles.menuItem}>
              {item.icon && <item.icon className={styles.icon} />}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  
    <div className={styles.setting}>
      {sidebarData.setting.icon && (
        <sidebarData.setting.icon className={styles.icon} />
      )}
      <span>{sidebarData.setting.name}</span>
    </div>
  
    <div className={styles.menu}>
      <MdMenu />
    </div>
  </div>
  );
}