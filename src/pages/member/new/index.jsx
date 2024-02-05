import styles from "@/styles/pages/member/new.module.scss";

export default function NewMembers() {
  return (
    <div className={styles.Body}>
      <div className={styles.introContainer}>
        <h1>New Members</h1>
        <p>
          Get involved with the UC Davis chapter! 
          Read on for more info and follow the registration steps below. 
          We usually recruit new members in Fall Quarter, but you can join anytime.
        </p>
      </div>

      <div className={styles.whoContainer}>
        <img
          src="/member-imgs/newMemHero.jpg"
          alt="WinterParty23"
        />
        <h2>Who can join?</h2>
        <p>
        Anyone can join Best Buddies, regardless of whether you have an IDD or not. UC Davis students can sign up as a Peer Buddy (without IDD), Buddy (with IDD), or Associate Member (unmatched).

        Non-students with IDD that reside in the Greater Sacramento Area, are also eligible to join as Buddies, Associates or Members.
        </p>
      </div>
    </div>

    
  );
}
