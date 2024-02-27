import styles from "@/styles/pages/event/regional-state.module.scss";
import Footer from "@/components/footer/footer";
import Image from 'next/image';

export default function RegionalStateEvents() {
  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.regional_state_title}>Regional State Events</h1>
      </div>
      <section className={styles.friendship_walk_section}>
        <div className={styles.text_card}>
          <div className={styles.first_section_text}>
            <span>
              <h2 className={styles.text_title}>Friendship Walk</h2>
            </span>
            <div className={'body-1'}>
              The Best Buddies Friendship Walk is the leading walk in the 
              country supporting inclusion for people with IDD. Over 60 U.S. 
              cities host Friendship Walks each year, and over 150,000 
              participants have walked to support inclusion since 2009. The 
              Friendship Walk is free to attend (although fundraising is 
              encouraged!) and family-friendly.
            </div>
            <div className={'body-1'}>
            It's not just a walk - Friendship Walk attendees also get to 
            enjoy entertainment including song and dance performances, 
            ice cream trucks, and lawn games. Funds raised at the 
            Friendship Walk are used to maintain and expand local Best 
            Buddies programs.
            </div>
          </div>
        </div>
        <div className={styles.image_block}>
          <Image
            src="/event-imgs/events-friendship.jpg"
            width={598}
            height={397}
            alt="Friendship walk group image"
          />
        </div>
      </section>
      <section className={styles.two_imgs}>
        <Image className={styles.event_img}
          src="/event-imgs/events-friendship-2.jpg"
          width={598}
          height={397}
          alt="Friendship walk group image"
        />
        <Image className={styles.event_img}
          src="/event-imgs/events-friendship-3.jpg"
          width={598}
          height={397}
          alt="Friendship walk group image"
        />
      </section>
      <section className={styles.third_section}>
        <div className={styles.third_walk_card}>
          <h2 className={styles.text_title}>
            2024 will mark the third Friendship Walk held in Sacramento!
          </h2>
          <div className={'body-1'}>
          The last Sacramento Friendship Walk <span className={'body-1-bold'}>raised over $48,000 to support 
          the Best Buddies mission</span> – and it was tons of fun! Our UC Davis team 
          raised over $3,000 with 25 registered members. 
          </div>
        </div>
        <div className={styles.third_walk_join}>
          <div className={'body-1'}>
          Join us for the April 2024 Sacramento Friendship Walk to support 
          Best Buddies and make a difference!
          </div>
          <div className={styles.third_walk_join_button}>

          </div>
        </div>
      </section>
      <section className={styles.border_divider}>

      </section>
      <section className={styles.fourth_section}>
        <div className={styles.text_card}>
          <Image className={styles.champion_img}
            src="/state-events-imgs/friendship_walk_img.png"
            width={598}
            height={397}
            alt="Friendship walk group image"
          />
          <div className={styles.fourth_section_text}>
            <h2 className={styles.text_title}>
                Champion of the Year
            </h2>
            <div className={'body-1'}>
              Best Buddies Champion of the Year recognizes and celebrates leaders 
              of inclusion in our community. The event includes a black-tie gala, 
              silent auction, and live auction. Sacramento’s first Champion of the 
              Year event was held in November 2023.
            </div>
            <div className={'body-1-bold'}>
              Want to get involved?
            </div>
            <div className={'body-1'}>
              Visit the Best Buddies Champion of the Year website for more information 
              about the event, candidates, and corporate sponsorship opportunities!
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}
