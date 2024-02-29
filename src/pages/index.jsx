import Head from "next/head";
import Image from "next/image";
import { Suspense } from "react"
import { Inter } from "next/font/google";
import styles from '@/styles/pages/home/home.module.scss';
import Button from "@/components/button/button";
import Link from "next/link";
import EventCard from "@/components/eventCard/eventCard";
import AnnouncementsCard from "@/components/announcementsCard/announcementsCard"

const inter = Inter({ subsets: ["latin"] });

{/** TODO: these need to be in a file shared by index and event page!!! */}
const events = [ 
  {
    title: "BB x #Include Site Demo", 
    date: "March 10, 2024", 
    description: "We’re so excited to unveil our brand-new website, courtesy of Include at UC Davis! Join us for a website demo, snacks, drinks, and socializing. Join us at the SCC on March 10th from 3pm-4pm.", 
    imagePath: "/event-imgs/feature-events-1.jpg",
    eventLink: "https://forms.gle/CobDNczNVCej4uKAA", 
  },
  {
    title: "Panera Fundraiser",
    date: "March 5, 2024", 
    description: "Support Best Buddies by joining us at Panera Bread anytime from 7 AM - 8 PM! Use the code “FUND4U” online, in the app, or in store. 20% of proceeds will go to our chapter. The fundraiser lasts all day, and you can join us at 5 PM for a club social! ", 
    imagePath: "/event-imgs/feature-events-2.jpg",
    eventLink: "https://forms.gle/CobDNczNVCej4uKAA",
  },
  {
    title: "March Movie Night", 
    date: "March 2, 2024",
    description: "Join us on Google Meet for our last movie night of the quarter! RSVP and vote for your movie choice by clicking the button below.",
    imagePath: "/event-imgs/feature-events-3.jpg",
    eventLink: "https://forms.gle/D4Ng51D8yyitewSVA",
  },
]

{/** TODO: link isn't wrapping correctly for link in announcements */}
const announcements = [
  { 
    title: "Join our Friendship Walk team!",
    date: "February 27, 2024", 
    description: <Link href="https://www.bestbuddiesfriendshipwalk.org/sacramento/supporting/#aggies">www.bestbuddiesfriendshipwalk.org/sacramento/supporting/#aggies</Link>,
  },
  {
    title: "End of Winter Quarter",
    date: "February 27, 2024",
    description: "This quarter’s last event will be on March 10th! Spring Quarter begins March 28th.",
  },
]


const memberSpotlightText = "New for Spring Quarter! Best Buddies will choose a new member or buddy pair to spotlight every month. Members may receive recognition for buddy pair hangouts, Friendship Walk participation, donations, and more.";
const videoSrc = "https://www.youtube.com/embed/GrG2-oX5z24?si=RLMuCFnXqc3I73tC"

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.hero}>
      <div className={styles.heroHeaders}>
        <p className={`subheading`}>BEST BUDDIES AT UC DAVIS</p>
        <h1>Friendships that matter.</h1>
        <h5>Fostering social and economic inclusion for individuals with disabilities.</h5>
      </div>
        
        <Button label={"Join Us"} href="member" extraStyles={styles.heroButton}/>
      </div>
      <iframe className={styles.heroVideo} src={videoSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className={styles.mission}>
        <div className={styles.missionText}>
          <h1>Our Mission</h1>
          <p className={`body-1`}><span className={styles.purpleHighlight}>Best Buddies at UC Davis</span> is a chapter of the global nonprofit Best Buddies International, which promotes social and economic inclusion for people with intellectual and developmental disabilities (IDD). We envision a world in which programs like Best Buddies are no longer needed because people with IDD are completely included in their communities. </p>
        </div>
        <Button label={"About Our Chapter"} href="about"/>
      </div>

      <div className={styles.featuredEvents}>
        <div className={styles.headerIconContainer}>
          <h2>Featured Events</h2>
          <Image src={"/page-icons/calendar.svg"} width={44} height={44}/>
        </div>
        <div className = {styles.eventCarousel}>
          {
            events.map((thisEvent, index) => {
              return <EventCard key={index} title={thisEvent.title} date={thisEvent.date} description={thisEvent.description} imagePath={thisEvent.imagePath} eventLink={thisEvent.eventLink}/>;
            })
          }
        </div> 
      </div>

      <div className={styles.announcements}>
        <div className={styles.headerIconContainer}>
          <h2>Announcements</h2>
          <Image src={"/page-icons/star.svg"} width={44} height={44}/>
        </div>
        
        <div className={styles.announcementCardContainer}>
        {
            announcements.map((thisAnnouncement, index) => {
              return <AnnouncementsCard key={index} title={thisAnnouncement.title} date={thisAnnouncement.date} description={thisAnnouncement.description}/>;
            })
          }
        </div>
        
      </div>

      <div className={styles.memberSpotlight}>
        <div className={styles.memberSpotlightText}>
          <div className={styles.headerIconContainer}>
            <h2>Member Spotlight</h2>
            <Image src={"/page-icons/users.svg"} width={44} height={44}/> {/* 43x43 on figma */}
          </div>
          <div className={styles.memberSpotlightDescription}>
            <h3 className={`subheading`}>Coming Soon... New for Spring Quarter!</h3>
            <p className={`body-1`}>{memberSpotlightText}</p>
          </div>
        </div>
        <div className={styles.memberSpotlightImage}></div>
      </div>
      
    </div>
  );
}
