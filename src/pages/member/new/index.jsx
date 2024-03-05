import styles from "@/styles/pages/member/new.module.scss";
import Image from "next/image";
import Link from "next/link";


const howToCardData = [
  {
    id: 1,
    title: "Interst Form",
    description: "Complete the form below and one of our officers will reach out to you.",
    linkText: "Interest Form",
    linkHref: "https://example.com",
    linkClass: styles.interestLink
  },
  {
    id: 2,
    title: "Membership Application",
    description: "Submit an application on our BB360 platform. Find helpful application tips below on our YouTube!",
    linkText: "BB360 Application",
    linkHref: "https://example.com",
    linkClass: styles.appLink
  },
  {
    id: 3,
    title: "Interview",
    description: "After submitting, our team will provide instructions for signing up for an interview slot."
  }
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
        <div className={styles.imgContainer}>
          {/* make it a responsive image */}
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
              <div className={`${styles.card} ${isSecondCard ? styles.secondCard : ''}`} key={card.id}>
                <div className={styles.howToCardInfo}>
                  <div className={styles.titleAndNum}>
                    <div className={styles.numCircle}>
                      {card.id}
                    </div>
                    <h3 className={styles.howToCardTitle}>
                      {card.title}
                    </h3>
                  </div>
                  <div className={`body-1`}>
                    {card.description}
                  </div>
                </div>
                
                {card.linkText && (
                  <Link className={`${card.linkClass} ${isSecondCard ? styles.link2 : styles.link}`} href={card.linkHref}>
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
        <div className={styles.headerContainer}>
          <h2>Need Help?</h2>
          <p>Check out our video resources for help with your application.</p>
        </div>

        <div className={styles.textBox}>
          <h3>Buddies & Support Staff</h3>
          <h3>Peer Buddies</h3>
        </div>

        {/* card */}
        {/* <div className={styles.youtubeContainer}>
          <div className={styles.youtubeCard}>
            <iframe
              className={styles.video}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jpDCf0O0rsc?si=QcoocIa8h9u8W-mN"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className={styles.footerContainer}>
              <div className={styles.providerContainer}>
                <h4>
                  How to submit a membership application
                  <br></br>
                  Buddies...
                </h4>
                <div className={styles.providerItems}>
                  <p>logo</p>
                  <p>YouTube</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <g clip-path="url(#clip0_2591_2184)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 8.5C1 4.634 4.134 1.5 8 1.5C11.866 1.5 15 4.634 15 8.5C15 12.366 11.866 15.5 8 15.5C4.134 15.5 1 12.366 1 8.5ZM8 16.5C3.582 16.5 0 12.918 0 8.5C0 4.082 3.582 0.5 8 0.5C12.418 0.5 16 4.082 16 8.5C16 12.918 12.418 16.5 8 16.5ZM7.25 12.75V7.75H8.75V12.75H7.25ZM9 5.5C9 6.052 8.552 6.5 8 6.5C7.448 6.5 7 6.052 7 5.5V5.431C7 4.879 7.448 4.431 8 4.431C8.552 4.431 9 4.879 9 5.431V5.5Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2591_2184">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className={styles.youtubeCard}>
            <iframe
              className={styles.video}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/RN8OdsNe_50?si=S4fMfa6gA61n4E6i"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className={styles.footerContainer}>
              <div className={styles.providerContainer}>
                <h4>
                  How to submit a membership application on BB360
                  <br></br>
                  (...
                </h4>
                <div className={styles.providerItems}>
                  <p>logo</p>
                  <p>YouTube</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <g clip-path="url(#clip0_2591_2184)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 8.5C1 4.634 4.134 1.5 8 1.5C11.866 1.5 15 4.634 15 8.5C15 12.366 11.866 15.5 8 15.5C4.134 15.5 1 12.366 1 8.5ZM8 16.5C3.582 16.5 0 12.918 0 8.5C0 4.082 3.582 0.5 8 0.5C12.418 0.5 16 4.082 16 8.5C16 12.918 12.418 16.5 8 16.5ZM7.25 12.75V7.75H8.75V12.75H7.25ZM9 5.5C9 6.052 8.552 6.5 8 6.5C7.448 6.5 7 6.052 7 5.5V5.431C7 4.879 7.448 4.431 8 4.431C8.552 4.431 9 4.879 9 5.431V5.5Z"
                    fill="black"
                    fill-opacity="0.8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2591_2184">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div> */}
        {/* card */}
      </div>
    </div>
  );
}
