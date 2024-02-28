import styles from "@/styles/pages/event/chapter.module.scss";
import EventCard from "@/components/eventCard/eventCard";
import Image from "next/image";
import { useEffect, useState } from 'react';


export default function ChapterEvents() {
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    setIframeSrc('https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%239396ca&showTitle=0&src=dWNkYmVzdGJ1ZGRpZXNAZ21haWwuY29t&color=%237986CB');
  }, []);

  const eventCardsData = [
    {
      imagePath: "/event-imgs/feature-events-1.jpg",
      altText: "Website Demo + Social",
      title: "Website Demo + Social",
      date: "March 10th from 3 PM - 4 PM",
      description: "We're so excited to unveil our brand-new website, courtesy of Include at UC Davis! Join us for a website demo, snacks, drinks, and socializing.",
      eventLink: "https://forms.gle/CobDNczNVCej4uKAA"
    },
    {
      imagePath: "/event-imgs/feature-events-2.jpg",
      altText: "Panera Bread Fundraiser",
      title: "Panera Bread Fundraiser",
      date: "March 5th from 7 AM - 8 PM",
      description: "Support Best Buddies by joining us at Panera Bread anytime from 7 AM - 8 PM! Use the code “FUND4U” online, in the app, or in store. 20% of proceeds will go to our chapter. The fundraiser lasts all day, and you can join us at 5 PM for a club social!",
      eventLink: "https://forms.gle/CobDNczNVCej4uKAA"
    },
    {
      imagePath: "/event-imgs/feature-events-3.jpg",
      altText: "Virtual Movie Night",
      title: "Virtual Movie Night",
      date: "March 2nd at 7 PM",
      description: "Join us on Google Meet for our last movie night of the quarter! RSVP and vote for your movie choice by clicking the button below",
      eventLink: "https://forms.gle/D4Ng51D8yyitewSVA"
    }
  ];

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
            {eventCardsData.map((card, index) => (
              <EventCard
                key={index}
                imagePath={card.imagePath}
                title={card.title}
                date={card.date}
                altText={card.altText}
                description={card.description}
                eventLink={card.eventLink}
              />
            ))}
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
              style={{ border: 0, width: '100%', height: '600px', alignItems: 'center', justifyContent: 'center', }} 
              frameborder="0">
            </iframe>
          )}
        </div>
      </div>
    </div>
  );
}
