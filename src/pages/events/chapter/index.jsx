import styles from "@/styles/pages/events/chapter.module.scss";
import FeaturedEvents from "@/components/featuredEvents/featuredEvents";

export async function getStaticProps() {
  const events_res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/events?populate=*`
  );
  const events_json = await events_res.json();

  return {
    props: {
      events_json: events_json.data,
    },
  };
}

export default function ChapterEvents({ events_json }) {
  return (
    <div className={styles.chapterEvents}>
      <h1 className={styles.chapterEventsTitle}>Chapter Events</h1>
      <div className={styles.chapterEventsContent}>
        <FeaturedEvents data={events_json} />
        <div className={styles.eventCalendar}>
          <div className={styles.eventCalendarText}>
            <h2 className={styles.eventCalendarTitle}>Event Calendar</h2>
            <p className={`body-1 ${styles.eventCalendarDesc}`}>
              Stay in the know! We'll announce upcoming events at least two
              weeks in advance. All events are in person unless stated
              otherwise. Don't forget to find the RSVP link in the event
              description.
            </p>
          </div>
          <div className={styles.calendarContainer}>
            <iframe
              className={styles.calendar}
              src={
                "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%239396ca&showTitle=0&src=dWNkYmVzdGJ1ZGRpZXNAZ21haWwuY29t&color=%237986CB"
              }
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
