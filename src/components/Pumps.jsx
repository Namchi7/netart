import styles from "./css/pumps.module.css";

import pumps from "../assets/3.png";

function Pumps() {
  return (
    <div className={styles.container}>
      <p className={styles.topLine}>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>

      <img src={pumps} alt="Pumps" className={styles.pumps} />

      <p className={styles.variety}>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>

      <hr />

      <p className={styles.variousHeading}>
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <p className={styles.variousProducts}>
        CHEMICALS & PROCESS{" "}
        <span className={styles.separator}>
          <span className={styles.separator}>|</span>
        </span>{" "}
        POWER <span className={styles.separator}>|</span> WATER & WASTE{" "}
        <span className={styles.separator}>|</span> WATER{" "}
        <span className={styles.separator}>|</span> OILS & GAS{" "}
        <span className={styles.separator}>|</span> PHARMA SUGARS & DISTILLERIES{" "}
        <span className={styles.separator}>|</span> PAPER & PULP{" "}
        <span className={styles.separator}>|</span> MARINE & DEFENCE{" "}
        <span className={styles.separator}>|</span> METAL & MINING{" "}
        <span className={styles.separator}>|</span> FOOD & BEVERAGE{" "}
        <span className={styles.separator}>|</span> PETROCHEMICAL & REFINERIES{" "}
        <span className={styles.separator}>|</span> SOLAR{" "}
        <span className={styles.separator}>|</span> BUILDING{" "}
        <span className={styles.separator}>|</span> HVAC{" "}
        <span className={styles.separator}>|</span> FIRE FIGHTING{" "}
        <span className={styles.separator}>|</span> AGRICULTURE & RESIDENTIAL
      </p>
    </div>
  );
}

export default Pumps;
