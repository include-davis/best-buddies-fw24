import styles from "@/styles/pages/member/current.module.scss";


export default function CurrentMembers() {
  return (
    <div className={styles.currentMembersContainer}>
    <h1 className={styles.currentMembersTitle}>Current Members</h1>
    <div className={styles.renewalBox}>
      <div className={styles.renewalTitle}>Renewing your Membership?</div>
      <div className={styles.renewalBoxContent}>
      Keep your Best Buddies membership active by submitting a new application. Renewals are required annually, even for long-time club members. 

      Check our YouTube channel for application guidance. Interviews may be necessary, but officers will inform you in May or June if required this year.   
      </div>
      <button className={styles.renewalButton}>
        Renewal Application
      </button>
    </div>
    <div className={styles.friendUpdatesBox}>
      <div className={styles.friendUpdatesTitle}>Friend Updates!</div>
      <div className={styles.friendUpdatesContent}>
      Starting in November, every Buddy and Peer Buddy will need to complete a Friendship Update each month. 
      These updates let us know how your friendship is going and if you need support.
      </div>
      <button className={styles.friendUpdatesButton}>Friendship Updates</button>
    </div>
    <div className={styles.latestNewsBox}>
      <div className={styles.latestNewsTitle}>Our Latest News</div>
      <div className={styles.latestNewsContent}>
      We will send out newsletters every month from September to June.
      There you can find announcements, upcoming chapter events, community events, and ideas for things to do with your buddy.
      </div>
      <button className={styles.latestNewsButton}>Dec 2023</button>
    </div>
  </div>
  );
}
