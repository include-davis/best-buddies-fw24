import styles from "@/styles/pages/event/regional-state.module.scss";
import Button from "@/components/button/button";
import AutoImage from "@/components/AutoImage/AutoImage";

export default function RegionalStateEvents() {
  return (
    <div className={styles.page}>
      <h1 className={styles.regional_state_title}>Regional and State Events</h1>
      <div className={styles.events}>
        <section className={styles.event}>
          <div className={styles.eventCard}>
            <div className={styles.eventCardText}>
              <h2 className={styles.cardTitle}>Friendship Walk</h2>
              <div className={"body-1"}>
                The Best Buddies Friendship Walk is the leading walk in the
                country supporting inclusion for people with IDD. Over 60 U.S.
                cities host Friendship Walks each year, and over 150,000
                participants have walked to support inclusion since 2009. The
                Friendship Walk is free to attend (although fundraising is
                encouraged!) and family-friendly.
              </div>
              <div className={"body-1"}>
                It's not just a walk - Friendship Walk attendees also get to
                enjoy entertainment including song and dance performances, ice
                cream trucks, and lawn games. Funds raised at the Friendship
                Walk are used to maintain and expand local Best Buddies
                programs.
              </div>
            </div>
            <div className={styles.eventCardImg}>
              <AutoImage
                className={styles.eventImage}
                src={"/event-imgs/events-friendship.jpg"}
                alt={"placeholder"}
              />
            </div>
          </div>
          <div className={styles.eventImgGallery}>
            <div className={styles.eventGalleryLeft}>
              <AutoImage
                className={styles.eventImage}
                src={"/event-imgs/events-friendship-2.jpg"}
                alt={"placeholder"}
              />
            </div>
            <div className={styles.eventGalleryRight}>
              <AutoImage
                className={styles.eventImage}
                src={"/event-imgs/events-friendship-3.jpg"}
                alt={"placeholder"}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <section className={styles.eventCard2}>
            <div className={styles.eventCard2Text}>
              <h2 className={styles.cardTitle}>
                2024 will mark the third Friendship Walk held in Sacramento!
              </h2>
              <div className={"body-1"}>
                The last Sacramento Friendship Walk
                <span className={"body-1-bold"}>
                  {" "}
                  raised over $48,000 to support the Best Buddies mission{" "}
                </span>
                - and it was tons of fun! Our UC Davis team raised over $3,000
                with 25 registered members.
              </div>
            </div>
            <div className={styles.eventRegister}>
              <div className={styles.mobileRegisterImg}>
                <AutoImage
                  className={styles.eventImage}
                  src={"/event-imgs/events-friendship-2.jpg"}
                  alt={"placeholder"}
                />
              </div>
              <div className={styles.eventRegisterInfo}>
                <p className={"body-1-bold"}>
                  Join us for the April 2024 Sacramento Friendship Walk to
                  support Best Buddies and make a difference!
                </p>
                <Button
                  label={"Register Now"}
                  href={"https://www.bestbuddiesfriendshipwalk.org/sacramento/"}
                />
              </div>
            </div>
          </section>
        </section>
        <hr className={styles.section_divider}></hr>
        <section className={styles.event2}>
          <div className={styles.event2ImgContainer}>
            <AutoImage
              className={styles.eventImage}
              src={"/event-imgs/events-champion.jpg"}
              alt={"placeholder"}
            />
          </div>
          <div className={styles.event2Content}>
            <div className={styles.event2Text}>
              <h2 className={styles.cardTitle}>Champion of the Year</h2>
              <p className={"body-1"}>
                Best Buddies Champion of the Year recognizes and celebrates
                leaders of inclusion in our community. The event includes a
                black-tie gala, silent auction, and live auction. Sacramento's
                first Champion of the Year event was held in November 2023.
              </p>
              <p className={"body-1-bold"}>Want to get involved?</p>
              <p className={"body-1"}>
                Visit the Best Buddies Champion of the Year website for more
                information about the event, candidates, and corporate
                sponsorship opportunities!
              </p>
            </div>
            <Button
              label={"Get Involved"}
              href={"https://www.bestbuddieschampion.org/sacramento/"}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
