import StayCard from "./StayCard";
import styles from "./SimilarStaysSection.module.css";

const SimilarStaysSection = () => {
  return (
    <section className={styles.similarStaysSection}>
      <div className={styles.similarStaysHeader}>
        <h3 className={styles.similarStays}>Similar stays</h3>
        <div className={styles.button}>View all</div>
      </div>
      <div className={styles.stayCards}>
        <StayCard
          brightwoodsEstate="Missisuaga Aistream"
          bridlepathOntarioCanada="Missisauga, Ontario, Canada"
        />
        <div className={styles.staycard}>
          <div className={styles.frameParent}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/superhost-icon.svg"
              />
              <div className={styles.superhost}>Superhost</div>
            </div>
            <div className={styles.wrapperHeartIcon}>
              <img className={styles.heartIcon} alt="" src="/hearticon-1.svg" />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.urbanLoftParent}>
                <div className={styles.urbanLoft}>Urban Loft</div>
                <div className={styles.urbanLoft1}>Urban Loft</div>
              </div>
              <div className={styles.parent}>
                <div className={styles.div}>4.8</div>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/star-icon.svg"
                />
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.group}>
                <div className={styles.div1}>$502</div>
                <div className={styles.night}>/night</div>
              </div>
            </div>
          </div>
        </div>
        <StayCard
          brightwoodsEstate="Forestville Cottages"
          bridlepathOntarioCanada="Simcoe, Ontario Canada"
          propBackgroundImage="url('/frame-93@3x.png')"
        />
      </div>
    </section>
  );
};

export default SimilarStaysSection;
