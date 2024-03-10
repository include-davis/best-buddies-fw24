import Image from "next/image";
import AutoImage from "@/components/AutoImage/AutoImage";
import styles from "@/styles/pages/about/about-ucd.module.scss";

export async function getStaticProps() {
  const ucd_res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/about-ucd?populate=*`
  );
  const ucd_json = await ucd_res.json();

  return {
    props: {
      ucd_json: ucd_json.data,
    },
  };
}

export default function AboutUCD({ ucd_json }) {
  const data = ucd_json.attributes;
  const ucdContent = [
    {
      title: "Buddies + Peer Buddies",
      description:
        "At the beginning of each year, Best Buddies members are matched in one-to-one friendships called 'buddy pairs.' Each buddy pair is made up of one person with IDD (a Buddy) and one person without IDD (a Peer Buddy). Buddy pairs will stay matched for the entire academic year. By signing up to be a Buddy/Peer Buddy, you are committing to coming to chapter events, hanging out with your buddy, and keeping in contact throughout the school year. Members of buddy pairs are required to see their buddy at least once per month and contact them (by phone, text, email, etc.) at least four times per month.",
      altText: data.img1.data.attributes.alternativeText,
      path: data.img1.data.attributes.url,
    },

    {
      title: "Associate Members",
      description:
        "Another way to get involved is to become an Associate Member. Associates are not matched in a one-to-one friendship. However, they can still attend chapter events and get to know other chapter members. Being an Associate Member is a great way to get involved, especially if you don't think you have enough time to commit to being matched.",
      altText: data.img2.data.attributes.alternativeText,
      path: data.img2.data.attributes.url,
    },

    {
      title: "Chapter Events",
      description:
        "Each year, we host parties, fundraisers, game nights, and other fun events for our chapter members. Events can include arts and crafts, board games, bowling, lawn games, karaoke, and more. This year's activities will primarily be in person, but we will also hold a few virtual activities for participants who don't feel comfortable with in person events.",
      altText: data.img3.data.attributes.alternativeText,
      path: data.img3.data.attributes.url,
    },

    {
      title: "Buddy Pair Hangout",
      description:
        "Buddy pairs also hang out outside of our chapter events. What you do with your buddy will depend on what you both are interested in. Our monthly newsletter will include ideas for what buddy pairs can do together. For example, going to the movies, getting boba, and playing basketball together.",
      altText: data.img4.data.attributes.alternativeText,
      path: data.img4.data.attributes.url,
    },
  ];

  return (
    <div className={styles.body}>
      <div className={styles.heroContainer}>
        <Image
          className={styles.heroImg}
          src="/about-imgs/ucd/about-ucd-banner.jpg"
          alt="All the Best Buddies members (about 50 people) are huddled in a group and looking at the camera. In the foreground, four lawn chairs and a table are visible."
          fill
        />
        <div className={styles.heroText}>
          <h1>Best Buddies</h1>
          <h2 className={styles.heroSubHeading}>UC Davis Chapter</h2>
        </div>
      </div>

      <div className={styles.cardsContainer}>
        {ucdContent.map((cardContent, index) => {
          return (
            <div
              key={index}
              className={`${styles.card} ${
                index % 2 === 0 ? styles.imgLeft : styles.imgRight
              }`}
            >
              <div className={styles.cardImgContainer}>
                <AutoImage
                  className={styles.cardImg}
                  src={cardContent.path}
                  alt={cardContent.altText}
                  style={{ width: "100%", height: "auto", aspectRatio: "1" }}
                />
              </div>

              <div className={styles.cardText}>
                <div className={styles.cardTitle}>
                  <h2>{cardContent.title}</h2>
                </div>
                <div className={styles.cardCaption}>
                  <p className={`body-1`}>{cardContent.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
