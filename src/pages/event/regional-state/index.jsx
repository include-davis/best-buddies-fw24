import styles from "@/styles/pages/event/regional-state.module.scss";
import Footer from "@/components/footer/footer";
import Image from 'next/image';

export default function RegionalStateEvents() {
  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.regional_state_title}>Regional State Events</h1>
      </div>
      <div className={styles.friendship_walk_card}>
        <div className={styles.friendship_walk}>
          <h2 className={styles.friendship_walk_title}>Friendship Walk</h2>
          <p>
            The Best Buddies Friendship Walk is the leading walk in the 
            country supporting inclusion for people with IDD. Over 60 U.S. 
            cities host Friendship Walks each year, and over 150,000 
            participants have walked to support inclusion since 2009. The 
            Friendship Walk is free to attend (although fundraising is 
            encouraged!) and family-friendly.
          </p>
          <p>
          It&#39;s not just a walk &#8208; Friendship Walk attendees also get to 
          enjoy entertainment including song and dance performances, 
          ice cream trucks, and lawn games. Funds raised at the 
          Friendship Walk are used to maintain and expand local Best 
          Buddies programs.
          </p>
        </div>
        <div className={styles.image_block}>

          <Image
            src="/state-events-imgs/friendship_walk_img.png"
            width={598}
            height={397}
            alt="Friendship walk group image"
          />
        </div>
      </div>
      <div className={styles.two_imgs}>
        <Image className={styles.event_img}
          src="/state-events-imgs/friendship_walk_img.png"
          width={598}
          height={397}
          alt="Friendship walk group image"
        />
        <Image className={styles.event_img}
          src="/state-events-imgs/friendship_walk_img.png"
          width={598}
          height={397}
          alt="Friendship walk group image"
        />
      </div>
      <section className={styles.third_section}>
        <div className={styles.third_walk_card}>
          <h2 className={styles.third_walk_card_title}>
            2024 will mark the third Friendship Walk held in Sacramento!
          </h2>
          <div className={styles.third_walk_card_body}>
          The last Sacramento Friendship Walk raised over $48,000 to support 
          the Best Buddies mission – and it was tons of fun! Our UC Davis team 
          raised over $3,000 with 25 registered members. 
          </div>
        </div>
        <div className={styles.third_walk_join}>
          <div className={styles.third_walk_join_text}>
          Join us for the April 2024 Sacramento Friendship Walk to support 
          Best Buddies and make a difference!
          </div>
          <div className={styles.third_walk_join_button}>

          </div>
        </div>
      </section>
    </div>
  );
}
