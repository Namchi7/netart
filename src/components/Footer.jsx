import styles from "./css/footer.module.css";

import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import website from "../assets/website.png";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.socialDiv}>
          <img src={phone} alt="Phone " className={styles.socialIcon} />
          <p className={styles.socialAddress}>
            Toll free <strong>1800 200 1234</strong>
          </p>
        </div>

        <div className={styles.socialDiv}>
          <img src={facebook} alt="Facebook " className={styles.socialIcon} />
          <a
            href="https://www.facebook.com/cripumps"
            target="_blank"
            rel="noreferrer nofollow"
            className={styles.socialAddress}
          >
            www.facebook.com/cripumps
          </a>
        </div>
        <div className={styles.socialDiv}>
          <img src={website} alt="Website " className={styles.socialIcon} />
          <a
            href="https://www.crigroups.com/"
            target="_blank"
            rel="noreferrer nofollow"
            className={styles.socialAddress}
          >
            www.crigroups.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
