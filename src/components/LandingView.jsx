import styles from "./css/landingView.module.css";

import award from "../assets/1.png";
import presenting from "../assets/2.png";

function LandingView() {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <img src={award} alt="Award" className={styles.award} />
      </div>

      <div className={styles.second}>
        <h3 className={styles.secondHeading}>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h3>
        <ul className={styles.secondPoints}>
          <li
            className={styles.secondPoint}
          >{`C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.`}</li>
          <li
            className={styles.secondPoint}
          >{`C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.`}</li>
        </ul>
        <img
          src={presenting}
          alt="Presenting Award"
          className={styles.presenting}
        />
        <p className={styles.presentingText}>
          {`Government of India has awarded the`}{" "}
          <strong>{`"National Energy Conservation Award 2018"`}</strong>
          {`. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.`}
        </p>
      </div>
    </div>
  );
}

export default LandingView;
