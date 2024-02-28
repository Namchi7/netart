import styles from "./css/header.module.css";

import logo from "../assets/logo.png";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logoDiv}>
        <img src={logo} alt="C.R.I. Fluid Systems" className={styles.logo} />
      </div>
    </div>
  );
}

export default Header;
