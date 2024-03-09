import styles from "@/styles/pages/member/new.module.scss";
import Image from "next/image";
import Link from "next/link";
import YouTubePlayer from "@/components/YouTubePlayer/YouTubePlayer.jsx";

const howToCardData = [
  {
    id: 1,
    title: "Interest Form",
    description:
      "Complete the form below and one of our officers will reach out to you.",
    linkText: "Interest Form",
    linkHref: "/contact",
    linkClass: styles.interestLink,
  },
  {
    id: 2,
    title: "Membership Application",
    description:
      "Submit an application on our BB360 platform. Find helpful application tips below on our YouTube!",
    linkText: "BB360 Application",
    linkHref: "https://forms.bestbuddies.org/4895599",
    linkClass: styles.appLink,
  },
  {
    id: 3,
    title: "Interview",
    description:
      "After submitting, our team will provide instructions for signing up for an interview slot.",
  },
];

export default function NewMembers() {
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
          <Image
            src={"/member-imgs/members-hero.jpg"}
            alt="Members Hero Image"
            className={styles.joinImg}
            fill
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
        <div className={styles["howToCardsContainer"]}>
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
                  >
                    <>
                      {card.linkText}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="27"
                        viewBox="0 0 15 27"
                        fill="none"
                      >
                        <path
                          d="M6.33268 16.9997L9.66602 13.6663L6.33268 10.333"
                          stroke="#5A3F98"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
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
          <div className={styles.youtubeTitleContainer}>
            <p className={`subheading ${styles.videoTitle}`}>
              Buddies & Support Staff
            </p>
            <p className={`subheading ${styles.videoTitle}`}>Peer Buddies</p>
          </div>

          <div className={styles.youtubeContainer}>
            <div className={styles.videoContainer}>
              <p className={`subheading ${styles.hiddenVideoTitle}`}>
                Buddies & Support Staff
              </p>
              <YouTubePlayer
                src="https://www.youtube.com/embed/jpDCf0O0rsc?si=7ekvB55Uo2b3kAGN"
                title="How to submit a membership application (BUDDIES + SUPPORT STAFF)"
              />
            </div>
            <div className={styles.videoContainer}>
              <p className={`subheading ${styles.hiddenVideoTitle}`}>
                Peer Buddies
              </p>
              <YouTubePlayer
                src="https://www.youtube.com/embed/RN8OdsNe_50?si=CtJZe17_IcmjHgkL"
                title="How to submit a membership application on BB360 (FOR PEER BUDDIES)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
