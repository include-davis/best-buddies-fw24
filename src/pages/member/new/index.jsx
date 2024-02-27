import styles from "@/styles/pages/member/new.module.scss";
import Image from "next/image";
import Link from 'next/link';

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

      {/* Who can join */}
      <div className={styles.whoContainer}>
        <Image
          className={styles.newMemHeroImg}
          width = {592}
          height = {513}
          src="/member-imgs/newMemHero.jpg"
          alt="WinterParty23"
        />

        <h2>
          Who can join?
          <p>
            Anyone can join Best Buddies, regardless of whether you have an IDD or not. UC Davis students can sign up as a Peer Buddy (without IDD), Buddy (with IDD), or Associate Member (unmatched).
            <br /> 
            <br />
            Non-students with IDD that reside in the Greater Sacramento Area, are also eligible to join as Buddies, Associates or Members.
          </p>
        </h2>
      </div>


      {/* How to Join */}
      <div className={styles.howContainer}>
        <h2>How To Join</h2>

        {/* Cards */}
        <div className={styles['cardsContainer']}>

          <div className={styles.card}>
            <div className={styles.textFrameInt}>
              <h3>Interest Form</h3>
              <p>Complete the form below and one of our officers will reach out to you.</p>
            </div>
            <Link className={styles.interestLink}href="https://example.com">Interest Form &gt; </Link>
            {/*   ask about '>' */}
          </div>

          <div className={styles.card}>
            <div className={styles.textFrame}>
              <h3>Membership Application</h3>
              <p>Submit an application on our BB360 platform. Find helpful application tips below on our YouTube!</p>
            </div>
            <Link className={styles.appLink}href="https://example.com">BB360 Application &gt; </Link>
            {/*   ask about '>' */}
          </div>

          <div className={styles.card}>
            <div className={styles.textFrame}>
              <h3>Interview</h3>
              <p>After submitting, our team will provide instructions for signing up for an interview slot.</p>
            </div>
          </div>

        </div>

      </div>

      
      <div>

      </div>

    </div>

    
  );
}
