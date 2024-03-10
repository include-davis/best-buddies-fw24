import styles from "@/styles/pages/members/new.module.scss";
import Image from "next/image";
import Link from "next/link";
import YouTubePlayer from "@/components/YouTubePlayer/YouTubePlayer.jsx";
import AutoImage from "@/components/AutoImage/AutoImage";

export async function getStaticProps() {
  const new_members = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/members?populate=*`
  );

  const new_members_json = await new_members.json();

  return {
    props: {
      new_members_json: new_members_json.data,
    },
  };
}

export default function NewMembers({ new_members_json }) {
  const data = new_members_json.attributes;

  const helpVideos = [
    {
      id: "buddies & support staff video",
      title: "Buddies & Support Staff",
      src: data.left_video_url,
    },
    {
      id: "peer buddies video",
      title: "Peer Buddies",
      src: data.right_video_url,
    },
  ];

  const howToCardData = [
    {
      id: 1,
      title: "Interest Form",
      description: data.interest_link_text,
      linkText: "Interest Form",
      linkHref: data.interest_link_url,
      linkClass: styles.interestLink,
    },
    {
      id: 2,
      title: "Membership Application",
      description: data.application_link_text,
      linkText: "BB360 Application",
      linkHref: data.application_link_url,
      linkClass: styles.appLink,
    },
    {
      id: 3,
      title: "Interview",
      description:
        "After submitting, our team will provide instructions for signing up for an interview slot.",
    },
  ];

  return (
    <div className={styles.body}>
      <div className={styles.introContainer}>
        <h1>New Members</h1>
        <div className={`body-1 ${styles.introText}`}>
          Get involved with the UC Davis chapter! Read on for more info and
          follow the registration steps below. We usually recruit new members in
          Fall Quarter, but you can join anytime.
        </div>
      </div>

      {/* Who can join */}
      <div className={styles.joinCard}>
        <h2 className={styles.joinTitleMobile}>Who Can Join?</h2>
        <div className={styles.imgContainer}>
          <AutoImage
            src={"/member-imgs/members-hero.jpg"}
            alt="Members Hero Image"
            className={styles.joinImg}
          />
        </div>
        <div className={styles.joinInfo}>
          <h2 className={styles.joinTitle}>Who Can Join?</h2>
          <div className={styles.joinDesc}>
            <p className={"body-1"}>
              Anyone can join Best Buddies, regardless of whether you have an
              IDD or not. UC Davis students can sign up as a Peer Buddy (without
              IDD), Buddy (with IDD), or Associate Member (unmatched).
            </p>
            <p className={"body-1"}>
              Non-students with IDD that reside in the Greater Sacramento Area,
              are also eligible to join as Buddies, Associates or Members.
            </p>
          </div>
        </div>
      </div>

      {/* How to Join */}
      <div className={styles.howToJoinContainer}>
        <h2>How To Join</h2>

        {/* Cards */}
        <div className={styles.howToCardsContainer}>
          {howToCardData.map((card) => {
            const isSecondCard = card.id === 2;

            return (
              <div
                className={`${styles.card} ${isSecondCard ? styles.secondCard : ""}`}
                key={card.id}
              >
                <div className={styles.howToCardInfo}>
                  <div className={styles.titleAndNum}>
                    <div className={styles.idContainer}>
                      <div className={styles.numCircle}>{card.id}</div>
                    </div>

                    <h3 className={styles.howToCardTitle}>{card.title}</h3>
                  </div>
                  <div className={`body-1 ${styles.howCardDesc}`}>
                    {card.description}
                  </div>
                </div>

                {card.linkText && (
                  <Link
                    className={`${card.linkClass} ${isSecondCard ? styles.link2 : styles.link}`}
                    href={card.linkHref}
                    target="_blank"
                  >
                    <div className={styles.redirect}>
                      {card.linkText}
                      <Image
                        width={9}
                        height={12}
                        src="/page-icons/hyperlink.svg"
                        alt={"hyperlink symbol"}
                      />
                    </div>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Need Help */}
      <div className={styles.helpContainer}>
        <div className={styles.helpHeaderContainer}>
          <h2>Need Help?</h2>
          <p className={`body-1 ${styles.helpHeaderText}`}>
            Check out our video resources for help with your application.
          </p>
        </div>

        <div className={styles.helpContents}>
          <div className={styles.helpVideos}>
            {helpVideos &&
              helpVideos.map((video) => {
                return (
                  <div key={video.id} className={styles.videoContainer}>
                    <h2 className={styles.videoTitle}>{video.title}</h2>
                    <YouTubePlayer src={video.src} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
