import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.asidebar}>
      <h1>Sharegram</h1>
      <div>
        <h3>Home</h3>
        <h3>Search</h3>
        <h3>Create</h3>
        <h3>Profile</h3>
        <h4>Log out</h4>
      </div>
    </aside>
  );
};

export default Sidebar;
