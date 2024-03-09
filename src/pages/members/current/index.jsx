import styles from "@/styles/pages/members/current.module.scss";
import Image from "next/image";
import AutoImage from "@/components/AutoImage/AutoImage";
import YouTubePlayer from "@/components/YouTubePlayer/YouTubePlayer";

export default function CurrentMembers() {
  return (
    <div className={styles.currentMembersContainer}>
      <h1 className={styles.currentMembersTitle}>Current Members</h1>

      <div className={styles.renewalBox}>
        <p className={styles.renewalTitle}>Renewing your Membership?</p>
        <p className={styles.renewalBoxContent}>
          Keep your Best Buddies membership active by submitting a new
          application. Renewals are required annually, even for long-time club
          members.
          <br />
          <br />
          Check our YouTube channel for application guidance. Interviews may be
          necessary, but officers will inform you in May or June if required
          this year.
        </p>
        <a className={styles.link} href="https://forms.bestbuddies.org/4895599">
          Renewal Application
          <Image
            height={55}
            width={55}
            src="/page-icons/hyperlink.svg"
            alt={"hyperlink"}
          />
        </a>
      </div>

      <YouTubePlayer
        src={
          "https://www.youtube-nocookie.com/embed/jpDCf0O0rsc?si=qUAJXnxWaqNqUjpF&amp;controls=1"
        }
      />

      <div className={styles.friendUpdatesBox}>
        <p className={styles.subPageTitle}>Friendship Updates!</p>
        <p className={styles.subPageContent}>
          Starting in November, every Buddy and Peer Buddy will need to complete
          a Friendship Update each month. These updates let us know how your
          friendship is going and if you need support.
        </p>

        <a className={styles.link} href="https://linktr.ee/ucdbestbuddies">
          Friendship Updates
          <Image
            height={55}
            width={55}
            src="/page-icons/hyperlink.svg"
            alt={"hyperlink"}
          />
        </a>
      </div>

      <div className={styles.latestNewsBox}>
        <p className={styles.subPageTitle}>Our Latest News</p>
        <p className={styles.subPageContent}>
          We will send out newsletters every month from September to June. There
          you can find announcements, upcoming chapter events, community events,
          and ideas for things to do with your buddy.
        </p>

        <div className={styles.prevNewsBox}>
          <a
            className={styles.currentMonthLink}
            href="/newsletter/newsletter_1.pdf"
            target="_blank"
          >
            Dec 2023
            <Image
              height={55}
              width={55}
              src="/page-icons/hyperlink.svg"
              alt={"hyperlink"}
            />
          </a>
          <div className={styles.prevNewsImgContainer}>
            <a href="/newsletter/newsletter_1.pdf" target="_blank">
              <AutoImage
                className={styles.newsletterImg}
                src="/newsletter/newsletter_1.jpg"
                alt="Newsletter 1"
              />
            </a>
            <div className={styles.pastNewsColBox}>
              <h4 className={styles.pastNewsTitle}>Past Newsletters</h4>
              <div className={styles.prevNewsLinksContainer}>
                <a
                  className={styles.link}
                  href="/newsletter/newsletter_3.pdf"
                  target="_blank"
                >
                  Oct 2023
                  <Image
                    height={55}
                    width={55}
                    src="/page-icons/hyperlink.svg"
                    alt={"hyperlink"}
                  />
                </a>
                <a
                  className={styles.link}
                  href="/newsletter/newsletter_2.pdf"
                  target="_blank"
                >
                  Nov 2023
                  <Image
                    height={55}
                    width={55}
                    src="/page-icons/hyperlink.svg"
                    alt={"hyperlink"}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}