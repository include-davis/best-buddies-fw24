import styles from "@/styles/pages/event/regional-state.module.scss";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import Button from "@/components/button/button";

export default function RegionalStateEvents() {
  return (
    <div className={styles.page}>
      <div>
        <h1 className={styles.regional_state_title}>
          Regional and State Events
        </h1>
      </div>
      <section className={styles.friendship_walk_section}>
      <div className={styles.imageContainerTop_mobile}>
          <Image
            className={styles.eventImage}
            src="/event-imgs/events-friendship.jpg"
            fill
            // width={598}
            // height={397}
            alt="Friendship walk group image"
          />
        </div>
        <div className={styles.text_card}>
          <div className={styles.friendship_walk_text}>
            <h2 className={styles.text_title}>Friendship Walk</h2>
            <div className={"body-1"}>
              The Best Buddies Friendship Walk is the leading walk in the
              country supporting inclusion for people with IDD. Over 60 U.S.
              cities host Friendship Walks each year, and over 150,000
              participants have walked to support inclusion since 2009. The
              Friendship Walk is free to attend (although fundraising is
              encouraged!) and family-friendly.
            </div>
            <div className={"body-1"}>
              It's not just a walk - Friendship Walk attendees also get to enjoy
              entertainment including song and dance performances, ice cream
              trucks, and lawn games. Funds raised at the Friendship Walk are
              used to maintain and expand local Best Buddies programs.
            </div>
          </div>
        </div>
        <div className={styles.imageContainerTop}>
          <Image
            className={styles.eventImage}
            src="/event-imgs/events-friendship.jpg"
            fill
            // width={598}
            // height={397}
            alt="Friendship walk group image"
          />
        </div>
      </section>
      <section className={styles.two_imgs}>
        <div className={styles.imageContainerLeft}>
          <Image
            className={`${styles.eventImage}`}
            src="/event-imgs/events-friendship-2.jpg"
            fill
            alt="Friendship walk group image"
          />
        </div>
        <div className={styles.imageContainerRight}>
          <Image
            className={`${styles.eventImage} ${styles.friendshipImgRight}`}
            src="/event-imgs/events-friendship-3.jpg"
            fill
            alt="Friendship walk group image"
          />
        </div>
      </section>
      <section className={styles.third_fw_sac}>
        <div className={styles.third_walk_card}>
          <h2 className={styles.text_title}>
            2024 will mark the third Friendship Walk held in Sacramento!
          </h2>
          <div className={"body-1"}>
            The last Sacramento Friendship Walk
            <span className={"body-1-bold"}>
              {" "}
              raised over $48,000 to support the Best Buddies mission{" "}
            </span>
            - and it was tons of fun! Our UC Davis team raised over $3,000 with
            25 registered members.
          </div>
        </div>
        <div className={styles.imageContainerLeft_mobile}>
          <Image
            className={`${styles.eventImage_mobile}`}
            src="/event-imgs/events-friendship-2.jpg"
            fill
            alt="Friendship walk group image"
          />
        </div>
        <div className={styles.third_walk_join}>
          <div className={styles.register}>
            <div className={`${styles.registerText} body-1-bold`}>
              Join us for the April 2024 Sacramento Friendship Walk to support
              Best Buddies and make a difference!
            </div>
            <div className={styles.button_container}>
              <Button
                label={"Register Now"}
                href={"https://www.bestbuddiesfriendshipwalk.org/sacramento/"}
              />
            </div>
          </div>
        </div>
      </section>
      <hr className={styles.section_divider}></hr>
      <section className={styles.champion_of_the_year}>
        <div className={styles.text_card}>
          <div className={styles.imageContainerBottom}>
            <Image
              className={styles.eventImage}
              src="/event-imgs/events-champion.jpg"
              fill
              alt="Friendship walk group image"
            />
          </div>
          <div className={styles.champion_text}>
            <h2 className={styles.text_title}>Champion of the Year</h2>
            <div className={styles.imageContainerBottom_mobile}>
              <Image
                className={styles.eventImage}
                src="/event-imgs/events-champion.jpg"
                fill
                alt="Friendship walk group image"
              />
            </div>
            <div className={"body-1"}>
              Best Buddies Champion of the Year recognizes and celebrates
              leaders of inclusion in our community. The event includes a
              black-tie gala, silent auction, and live auction. Sacramento’s
              first Champion of the Year event was held in November 2023.
            </div>
            <div className={styles.getInvolved}>
              <div className={styles.getInvolvedText}>
                <div className={"body-1-bold"}>Want to get involved?</div>
                <div className={"body-1"}>
                  Visit the Best Buddies Champion of the Year website for more
                  information about the event, candidates, and corporate
                  sponsorship opportunities!
                </div>
              </div>
              <div className={styles.button_container}>
                <Button
                  label={"Get Involved"}
                  href={"https://www.bestbuddieschampion.org/sacramento/"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
