import styles from "@/styles/pages/about/about-intl.module.scss";
import Image from "next/image";
import Button from "@/components/button/button";

const intlContent = [
  {
    title: "One-to-One Friendships",
    description:
      "These programs build one-to-one friendships between people with and without intellectual and developmental disabilities (IDD), offering social interactions while improving the quality of life and level of inclusion for a population that is often isolated and excluded.",
    imagePath: "/about-imgs/intl/about-intl-friendship.jpg",
    altText:
      "A buddy pair, both girls, stand in front of a purple wall. They are smiling and posing together.",
    iconPath: "/page-icons/heart.svg",
  },

  {
    title: "Integrated Employment",
    description:
      "This program secures jobs for people with intellectual and developmental disabilities (IDD), allowing them to earn an income, pay taxes, and continuously and independently support themselves.",
    imagePath: "/about-imgs/intl/about-intl-jobs.jpg",
    altText:
      "A Best Buddies participant stands in front of a sign that reads 'John Hancock'. He is wearing a black suit, light blue shirt, and tan tie.",
    iconPath: "/page-icons/briefcase.svg",
  },

  {
    title: "Leadership Development",
    description:
      "These programs educate and empower people with and without IDD to become leaders, public speakers, and advocates. Best Buddies passionately believes that its program participants can lead the effort within their community and beyond to build a more inclusive world for people with IDD.",
    imagePath: "/about-imgs/intl/about-intl-leadership.jpg",
    altText:
      "A Best Buddies Ambassador stands at a podium and speaks into a microphone. He is wearing a blue button-down shirt and tan slacks.",
    iconPath: "/page-icons/users.svg",
  },

  {
    title: "Inclusive Living",
    description:
      "This program fosters an integrated experience for people with and without IDD to become active, contributing citizens who live independently in a dynamic environment where they can learn, grow, and thrive locations in Washington, D.C, Miami, FL, and Los Angeles, CA.",
    imagePath: "/about-imgs/intl/about-intl-living.jpg",
    altText:
      "Four Best Buddies participants are gathered around a kitchen island. One of them is slicing a tomato.",
    iconPath: "/page-icons/smile.svg",
  },
];

export default function AboutIntl() {
  return (
    <div className={styles.body}>
      <div className={styles.heroContainer}>
        <Image
          src="/about-imgs/intl/about-intl-banner.jpg"
          alt="Large group of members posing together in front of a banner and a purple and white ballon arch."
          objectFit="cover"
          objectPosition="center"
          fill
        />
        <div className={styles.heroText}>
          <h1>Best Buddies</h1>
          <h2 className={styles.heroSubHeading}>International</h2>
        </div>
      </div>

      <div className={styles.pillars}>
        <h2>Our Four Pillars</h2>
        <div className={styles.circles}>
          <div className={styles.topCircles}>
            <div className={styles.YellowCircle}>
              <h3>One-to-One Friendships</h3>
            </div>

            <div className={styles.GreenCircle}>
              <h3>Intergrated Employment</h3>
            </div>
          </div>

          <div className={styles.bottomCircles}>
            <div className={styles.RedCircle}>
              <h3>Leadership Development</h3>
            </div>

            <div className={styles.PurpleCircle}>
              <h3>Inclusive Living</h3>
            </div>
          </div>
        </div>

        <div className={styles.pillarsContainer}>
          {/*container that holds ALL content, tbh might not need*/}
          {intlContent.map((pillars, index) => {
            return (
              <div>
                <div key={index} className={styles.card}>
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.cardImgs}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      src={pillars.imagePath}
                      alt={pillars.altText}
                    />
                  </div>

                  <div className={styles.cardText}>
                    <div className={styles.headerContainer}>
                      <h2>{pillars.title}</h2>

                      <Image
                        className={styles.icons}
                        width={44}
                        height={44}
                        src={pillars.iconPath}
                      />
                    </div>

                    <p className={`body-1`}>{pillars.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.learnMore}>
        <h2>Want to learn more?</h2>
        <p className={styles.learnMoreText}>
          Visit the Best Buddies International Official website.
        </p>

        <Button
          label={"Visit Official Website"}
          href={"https://aggielife.ucdavis.edu/bestbuddies/home/"}
          target={"_blank"}
        />
      </div>
    </div>
  );
}
