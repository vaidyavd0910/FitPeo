import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import sidebarData from "../../util/SidebarData/SidebarData";
import { MdMenu, MdClose } from "react-icons/md";
import classNames from "classnames";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Toggle button */}
      <div className={styles.menu} onClick={toggleSidebar}>
        {isOpen ? <MdClose /> : <MdMenu />}
      </div>

      {/* Sidebar */}
      <div
        className={classNames(styles.sidebar, {
          [styles.open]: isOpen,
        })}
      >
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
      </div>
    </div>
  );
}
