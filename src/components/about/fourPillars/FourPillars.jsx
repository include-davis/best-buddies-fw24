import styles from "@/styles/components/about/FourPillars.module.scss";

export default function FourPillars() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.circle1}>
          <p>One-To-One</p>
          <p>Friendships</p>
        </div>
        <div className={styles.circle2}>
          <p>Integrated</p>
          <p>Employment</p>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.circle3}>
          <p>Leadership</p>
          <p>Development</p>
        </div>
        <div className={styles.circle4}>
          <p>Inclusive</p>
          <p>Living</p>
        </div>
      </div>
    </div>
  );
}
