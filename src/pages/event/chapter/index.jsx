import styles from "@/styles/pages/event/chapter.module.scss";
import EventCard from "@/components/eventCard/eventCard";

export default function ChapterEvents() {
  return (
    <div>
      <div className={styles.featuredEvents}>
          <h1 className={styles.chapter}>Chapter Events</h1>
        <div className={styles.box}>
        <h2 className={styles.title}>Featured Events</h2>
          <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
              <path d="M34.8333 7.33337H9.16667C7.14162 7.33337 5.5 8.975 5.5 11V36.6667C5.5 38.6918 7.14162 40.3334 9.16667 40.3334H34.8333C36.8584 40.3334 38.5 38.6918 38.5 36.6667V11C38.5 8.975 36.8584 7.33337 34.8333 7.33337Z" fill="#B4DDD5" stroke="#8FD1C4" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M29.3334 3.66663V11" stroke="#8FD1C4" strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.6666 3.66663V11" stroke="#8FD1C4" strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.5 18.3334H38.5" stroke="#8FD1C4" strokeWidth="3.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className={styles.cardsContainer}>
          <EventCard
          imagePath="/member-imgs/newMemHero.jpg"
          title="Event Title"
          date="Month Day, Year"
          description="Event Description"
          />
          <EventCard
          imagePath="/member-imgs/newMemHero.jpg"
          title="Event Title"
          date="Month Day, Year"
          description="Event Description"
          />
          <EventCard
            imagePath="/member-imgs/newMemHero.jpg"
            title="Event Title"
            date="Month Day, Year"
            description="Event Description"
          />
        </div>
      </div>
      <div className={styles.eventCalendar}>
        <h2 className={styles.title}>Event Calendar</h2>
        <p className={styles.description}>
          Stay in the know! We'll announce upcoming events at least two weeks in advance. All events are in person unless stated otherwise. Don't forget to find the RSVP link in the event description.
        </p>
        <div className={styles.calendarPlaceholder}></div>
      </div>
    </div>
  );
}
