import styles from "@/styles/pages/member/current.module.scss";
import Image from "next/image";


export default function CurrentMembers() {
  return (
    <div className={styles.currentMembersContainer}>
      <h1 className={styles.currentMembersTitle}>Current Members</h1>

      <div className={styles.renewalBox}>
        <p className={styles.renewalTitle}>Renewing your Membership?</p>
        <p className={styles.renewalBoxContent}>
          Keep your Best Buddies membership active by submitting a new application. Renewals are required annually, even for long-time club members. 
          <br/>
          <br/>
          Check our YouTube channel for application guidance. Interviews may be necessary, but officers will inform you in May or June if required this year.
        </p>
        <button className={styles.renewalButton}>Renewal Application
          <img className={styles.renewalButton} src="/page-icons/hyperlink.svg"/>
        </button>
      </div>
      {/*using from new-members page*/}
      <div className={styles.youtubeContainer}>
        <div className={styles.youtubeCard}>
          <iframe 
            className={styles.vid}
            width="560" height="315"
            src="https://www.youtube-nocookie.com/embed/jpDCf0O0rsc?si=qUAJXnxWaqNqUjpF&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
          <div className={styles.footerContainer}>
          <div className={styles.providerContainer}>
            <h4>
              How to submit a membership application
              <br />
              Buddies...
            </h4>
            <div className={styles.providerItems}>
              {/*need new logoe*/}
              <img src="/footer-icons/youtube.svg"/>
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
            <g clipPath="url(#clip0_2591_2184)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 8.5C1 4.634 4.134 1.5 8 1.5C11.866 1.5 15 4.634 15 8.5C15 12.366 11.866 15.5 8 15.5C4.134 15.5 1 12.366 1 8.5ZM8 16.5C3.582 16.5 0 12.918 0 8.5C0 4.082 3.582 0.5 8 0.5C12.418 0.5 16 4.082 16 8.5C16 12.918 12.418 16.5 8 16.5ZM7.25 12.75V7.75H8.75V12.75H7.25ZM9 5.5C9 6.052 8.552 6.5 8 6.5C7.448 6.5 7 6.052 7 5.5V5.431C7 4.879 7.448 4.431 8 4.431C8.552 4.431 9 4.879 9 5.431V5.5Z"
                fill="black"
                fillOpacity="0.8"
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
      </div>
      {/*using from new-members page*/}



      <div className={styles.friendUpdatesBox}>
        <p className={styles.subPageTitle}>Friendship Updates!</p>
        <p className={styles.subPageContent}>
          Starting in November, every Buddy and Peer Buddy will need to complete a Friendship Update each month. These updates let us know how your friendship is going and if you need support.
        </p>

        <button className={styles.friendUpdatesButton}>Friendship Updates
          <img src="/page-icons/hyperlink.svg"/>
        </button>
      </div>

      <div className={styles.latestNewsBox}>
        <p className={styles.subPageTitle}>Our Latest News</p>
        <p className={styles.subPageContent}>
          We will send out newsletters every month from September to June. There you can find announcements, upcoming chapter events, community events, and ideas for things to do with your buddy.
        </p>

        <div className={styles.prevNewsBox}>
          <button className={styles.latestNewsButton}>Dec 2023
            <img src="/page-icons/hyperlink.svg"/>

          </button>
          <div className={styles.prevNewsImgContainer}>
            <Image
                  className={styles.newsletterImg}
                  width={696}
                  height={483}
                  src="/member-imgs/best_buddies_newsletter_img.png"
              />
            <div className={styles.pastNewsColBox}>
              <h2>Past Newsletters</h2>
              <div className={styles.prevNewsLinksContainer}>
              <button className={styles.prevNewsLinks}>Oct 2023
                <img src="/page-icons/hyperlink.svg"/>
              </button>
              <button className={styles.prevNewsLinks}>Nov 2023
                <img src="/page-icons/hyperlink.svg"/>
              </button>
              </div>
            </div>
          </div>
        </div>



      </div>

    </div>
  );
}
