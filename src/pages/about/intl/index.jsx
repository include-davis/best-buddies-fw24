import styles from "@/styles/pages/about/about-intl.module.scss";

export default function AboutIntl() {
  return (
    <div className={styles.body}>

      <div className={styles.hero}>
        {/*hero img goes here*/}
        <h1 className={styles.heroText}>Best Buddies International</h1>
      </div>

      <div className={styles.pillars}>
        <h2>Our Four Pillars</h2>
        {/*shapes*/}
      </div>

    <div className={styles.frames}>
      <div className={styles.friendships}>
       {/*img goes here*/}
        <div className={styles.frame}>
          <h2 className={styles.h2text}>One-To-One Friendships</h2> {/*needs emoji*/}
            <p>These programs build one-to-one friendships between people with and without intellectual and development disabilities (IDD), offering social interactions while improving the quality of life and level of inclusion for a population that is often isolated and excluded.
            </p>
        </div>
      </div>

      <div className={styles.intergratedEmployment}>
       {/*img goes here*/}
        <div className={styles.frame}>
          <h2 className={styles.h2text}>Intergrated Employment</h2> {/*needs emoji*/}
            <p>This program secures jobs for people with intellectual and developmental disabilities (IDD), allowing them to earn an income, pay taxes, and continuously and independently support themselves.
            </p>
        </div>
      </div>

      <div className={styles.leadershipDevelopment}>
       {/*img goes here*/}
        <div className={styles.frame}>
          <h2 className={styles.h2text}>Leadership Development</h2> {/*needs emoji*/}
            <p>
            These programs educate and empower people with and without IDD to become leaders, public speakers, and advocates. Best Buddies passionately believes that its program participants can lead the effort within their community and beyond to build a more inclusive world for people with IDD.
            </p>
        </div>
      </div>

      <div className={styles.inclusiveLiving}>
       {/*img goes here*/}
        <div className={styles.frame}>
          <h2>Inclusive Living</h2> {/*needs emoji*/}
            <p>
            This program fosters an integrated experience for people with and without IDD to become active, contributing citizens who live independently in a dynamic environment where they can learn, grow, and thrive locations in Washington, D.C, Miami, FL, and Los Angeles, CA.            </p>
        </div>
      </div>
     </div>

    </div>


  );
}
