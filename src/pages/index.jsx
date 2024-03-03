import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/pages/home/home.module.scss";
import Button from "@/components/button/button";
import EventCard from "@/components/eventCard/eventCard";

const events = [
  {
    title: "BB x #Include Site Demo",
    date: "March 10, 2024",
    description:
      "We’re so excited to unveil our brand-new website, courtesy of #include at Davis! Join us for a website demo, snacks, drinks, and socializing at the SCC: March 10th, 3-4pm.",
    imagePath: "/event-imgs/feature-events-1.jpg",
    altText: "Event 1 image",
    eventLink: "/event1",
  },
  {
    title: "Panera Fundraiser",
    date: "March 5, 2024",
    description:
      "Join us at Panera Bread from 7 AM - 8 PM! Use the code “FUND4U” online, in the app, or in store. 20% of proceeds will go to our chapter. Join us at 5 PM for a club social!",
    imagePath: "/event-imgs/feature-events-2.jpg",
    altText: "Event 2 image",
    eventLink: "/event1",
  },
  {
    title: "March Movie Night",
    date: "March 2, 2024",
    description:
      "Join us on Google Meet for our last movie night of the quarter! RSVP and vote for your movie choice by clicking the button below.",
    imagePath: "/event-imgs/feature-events-3.jpg",
    altText: "Event 3 image",
    eventLink: "/event1",
  },
];

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`body-1`}>
      <div className={styles.eventCards}>
        {events &&
          events.map((event, index) => {
            return (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                description={event.description}
                imagePath={event.imagePath}
                altText={event.altText}
                eventLink={event.eventLink}
              />
            );
          })}
      </div>
    </div>
  );
}
