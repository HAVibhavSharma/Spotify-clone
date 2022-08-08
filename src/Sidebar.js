import React from "react";
import { useDataValue } from "./DataLayer";
import styles from "./Sidebar.module.css";
const Sidebar = () => {
  const [info, dispatch] = useDataValue();
  return (
    <>
      <div className={styles.sidebar}>this is the sidebar</div>
    </>
  );
};
export default Sidebar;
