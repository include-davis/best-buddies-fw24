import styles from "@/styles/pages/about/about-intl.module.scss";


export default function AboutIntl() {
  return (
    <div className={styles.body}>

      <div className={styles.heroBox}>
        <img className={styles.heroImg}
        src="/about-imgs/BBI.jpeg"
        alt="Large group of members posing together in front of a banner and a purple and white ballon arch."
        />

        <h1 className={styles.heroText}>Best Buddies International</h1>
      </div>

     
        <h2 className={styles.margin}>Our Four Pillars</h2>
        
   
        <div className={styles.pillars}>
          <div className={styles.YellowCircle}>
            <h3>One-to-One Friendships</h3>
          </div>

          <div className={styles.GreenCircle}>
            <h3>Intergrated Employment</h3>
          </div>

          <div className={styles.RedCircle}>
            <h3>Leadership Development</h3>
          </div>

          <div className={styles.PurpleCircle}>
            <h3>Inclusive Living</h3>
          </div>
      </div>

      <div className={styles.cards}> {/*maybe*/}


        <div className={styles.friendships}>
          <img className={styles.pillarImg}
          src="/about-imgs/Friendship.jpg"
          alt="A buddy pair, both girls, stand in front of a purple wall. They are smiling and posing together."
          />

          <div className={styles.textFrame}>
            <div className={styles.headers}>
              <h2>One-To-One Friendships</h2>

              <img
              src="/page-icons/heart.svg"
              alt="Yellow heart." 
              />
            </div>

            <p>These programs build one-to-one friendships between people with and without intellectual and development disabilities (IDD), offering social interactions while improving the quality of life and level of inclusion for a population that is often isolated and excluded.
            </p>

          </div>
        </div>

        <div className={styles.intergratedEmployment}>
        {/*img goes here*/}
          <div className={styles.frame}>
            <h2 className={styles.h2text}>Intergrated Employment</h2> 
        
            {/*needs emoji*/}
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

      <div className={styles.learnMore}>
        <h2 className={styles.learnMoreText}>Want to learn more?</h2>
        <p className={styles.learnMoreText}>Visit the Best Buddies International Official website.</p>
        {/*button goes here*/}
      </div>

    </div>


  );
}
