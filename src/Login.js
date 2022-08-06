import React from "react";
import styles from "./Login.module.css";
import { loginuri } from "./spotify";
// import Player from "./Player";
function Login() {
  return (
    <>
      <div className={styles.Login}>
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
        <a href={loginuri}>LOGIN WITH SPOTIFY</a>
      </div>
    </>
  );
}

export default Login;
