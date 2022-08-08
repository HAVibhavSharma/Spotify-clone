import React from "react";
import Body from "./Body";
import styles from "./Player.module.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
function Player() {
  return (
    <>
      <div className={styles.conatainer}>
        <div className={styles.player}>
          <Sidebar />
          <Body />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Player;
