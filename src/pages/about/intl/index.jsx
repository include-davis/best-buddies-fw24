import styles from "@/styles/pages/about/about-intl.module.scss";
import Image from "next/image";
import FourPillars from "@/components/about/fourPillars/FourPillars";
import Button from "@/components/button/button";
import AutoImage from "@/components/AutoImage/AutoImage";
import HeaderWithIcon from "@/components/headerWithIcon/headerWithIcon";

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
          className={styles.heroImg}
          src="/about-imgs/intl/about-intl-banner.jpg"
          alt="Large group of members posing together in front of a banner and a purple and white ballon arch."
          fill
        />
        <div className={styles.heroText}>
          <h1>Best Buddies</h1>
          <h2 className={styles.heroSubHeading}>International</h2>
        </div>
      </div>

      <div className={styles.pillars}>
        <div className={styles.pillarsContainer}>
          <FourPillars />
        </div>

        <div className={styles.pillarsCards}>
          {intlContent.map((pillars, index) => {
            return (
              <div
                key={index}
                className={`${styles.card} ${
                  index % 2 === 0 ? styles.imgLeft : styles.imgRight
                }`}
              >
                <div className={styles.imageContainer}>
                  <AutoImage
                    className={styles.cardImg}
                    src={pillars.imagePath}
                    alt={pillars.altText}
                    style={{ width: "100%", height: "auto", aspectRatio: "1" }}
                  />
                </div>

                <div className={styles.cardText}>
                  <div className={styles.cardTitle}>
                    <HeaderWithIcon
                      label={pillars.title}
                      src={pillars.iconPath}
                    />
                  </div>

                  <div className={styles.cardDesc}>
                    <p className={`body-1`}>{pillars.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.learnMoreContainer}>
        <div className={styles.learnMore}>
          <div className={styles.learnMoreText}>
            <h2>Want to learn more?</h2>
            <p>Visit the Best Buddies International Official website.</p>
          </div>

          <Button
            label={"Visit Official Website"}
            href={"https://aggielife.ucdavis.edu/bestbuddies/home/"}
            target={"_blank"}
          />
        </div>
      </div>
    </div>
  );
}
