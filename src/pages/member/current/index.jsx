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
  </div>
  );
}
