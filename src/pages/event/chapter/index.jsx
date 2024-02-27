import styles from "@/styles/pages/event/chapter.module.scss";
import EventCard from "@/components/eventCard/eventCard";
import Image from "next/image";
import { useEffect, useState } from 'react';


export default function ChapterEvents() {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    setIframeSrc('https://calendar.google.com/calendar/embed?src=includecalendarapi%40gmail.com&ctz=America%2FLos_Angeles');
  }, []);

  return (
    <div>
      <div className={styles.featuredEvents}>
          <h1 className={styles.chapter}>Chapter Events</h1>
        <div className={styles.box}>
        <h2 className={styles.title}>Featured Events</h2>
        <div className={styles.icon}>
          <Image 
            src="/page-icons/calendar.svg"
            alt="Calendar Icon"
            width={44}
            height={44}
          />
        </div>
        </div>
        <div className={styles.cardsContainer}>
          <EventCard
          imagePath="/member-imgs/newMemHero.jpg"
          title="Event Title"
          date="Month Day, Year"
          description="Event Description"
          eventLink="/undefined"
          />
          <EventCard
          imagePath="/member-imgs/newMemHero.jpg"
          title="Event Title"
          date="Month Day, Year"
          description="Event Description"
          eventLink="/undefined"
          />
          <EventCard
            imagePath="/member-imgs/newMemHero.jpg"
            title="Event Title"
            date="Month Day, Year"
            description="Event Description"
            eventLink="/undefined"
          />
        </div>
      </div>
      <div className={styles.eventCalendar}>
        <h2 className={styles.title}>Event Calendar</h2>
        <p className={styles.description}>
          Stay in the know! We'll announce upcoming events at least two weeks in advance. All events are in person unless stated otherwise. Don't forget to find the RSVP link in the event description.
        </p>
        <div className={styles.calendar}>
          {iframeSrc && (
            <iframe 
              src={iframeSrc}
              style={{ border: 0 }} 
              width="800" 
              height="600" 
              frameborder="0">
            </iframe>
          )}
        </div>
      </div>
    </div>
  );
}
