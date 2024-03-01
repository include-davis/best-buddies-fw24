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
          <img src="/page-icons/hyperlink.svg" alt="Renewal Application"/>
        </button>
      </div>
      <div className={styles.videoBox}>yt video here</div>
      <div className={styles.friendUpdatesBox}>
        <p className={styles.friendUpdatesTitle}>Friend Updates!</p>
        <p className={styles.friendUpdatesContent}>
          Starting in November, every Buddy and Peer Buddy will need to complete a Friendship Update each month. These updates let us know how your friendship is going and if you need support.
        </p>
        <button className={styles.friendUpdatesButton}>Friendship Updates
        <img src="/page-icons/hyperlink.svg" alt="Friendship Updates"/>
        </button>
      </div>
      <div className={styles.latestNewsBox}>
        <p className={styles.latestNewsTitle}>Our Latest News</p>
        <p className={styles.latestNewsContent}>
          We will send out newsletters every month from September to June. There you can find announcements, upcoming chapter events, community events, and ideas for things to do with your buddy.
        </p>
        <div className={styles.prevNewsBox}>
          <button className={styles.latestNewsButton}>Dec 2023
            <img src="/page-icons/hyperlink.svg" alt="Latest News"/>
          </button>
          <Image className={styles.newsletterImg}
            width = {696}
            height = {483}
            src="/member-imgs/best_buddies_newsletter_img.png"
          />
        </div>
      </div>
    </div>
  );
}
