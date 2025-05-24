import React from "react";
import styles from "./Sidebar.module.css";
// import { icons } from "lucide-react";
import sidebarData from "../../util/SidebarData/SidebarData";

// const Icon = ({ name }) => {
//   const SelectedIcon =
//     icons[name.charAt(0).toUpperCase() + name.slice(1)] || icons["Circle"];
//   return <SelectedIcon className={styles.icon} size={18} />;
// };

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>{sidebarData.logo}</div>
      {sidebarData.sections.map((section, idx) => (
        <div key={idx}>
          <div className={styles.sectionTitle}>{section.title}</div>
          {section.items.map((item, i) => (
            <div
              key={i}
              className={`${styles.menuItem} ${item.active ? styles.active : ""}`}
            >
              {/* <Icon name={item.icon} /> */}
              {item.name}
            </div>
          ))}
        </div>
      ))}
      <div className={styles.setting}>
        {/* <Icon name={sidebarData.setting.icon} /> */}
        {sidebarData.setting.name}
      </div>
    </div>
  );
}
