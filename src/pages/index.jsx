import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from '@/styles/pages/home.module.scss';
import Button from "@/components/button/button";
import EventCard from "@/components/eventCard/eventCard";
import AnnouncementsCard from "@/components/announcementsCard/announcementsCard"

const inter = Inter({ subsets: ["latin"] });

var events = []

for (let i=1; i<=3; i++){
  events.push ({
      title: `Event Title ${i}`, 
      date: "Month Day, Year", 
      description: "Event Description", 
      imagePath: "/member-imgs/newMemHero 2.jpg",
    })
}

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.hero}>
        <h6 className={`subheading`}>BEST BUDDIES AT UC DAVIS</h6>
        <h1>Friendships that matter.</h1>
        <h5>Fostering social and economic inclusion for individuals with disabilities.</h5>

        <Button label={"Join Us"} href="member" extraStyles={styles.heroButton}/>
      </div>

      <div className={styles.heroVideo}>video(?) goes here</div>
    
      <div className={styles.mission}>

        <h1>Our Mission</h1>
        <p className={`body-1`}><span className={styles.purpleHighlight}>Best Buddies at UC Davis</span> is a chapter of the global nonprofit Best Buddies International, which promotes social and economic inclusion for people with intellectual and developmental disabilities (IDD). We envision a world in which programs like Best Buddies are no longer needed because people with IDD are completely included in their communities. </p>
        <Button label={"About Our Chapter"} href="about"/>

      </div>

      <div className={styles.featuredEvents}>
        <div className={styles.headerIconContainer}>
          <h2>Featured Events</h2>
          <Image src={"/page-icons/calendar.svg"} width={44} height={44}/>
        </div>
        <div className = {styles.carousel}>
          {
            events.map((thisEvent) => {
              return <EventCard title={thisEvent.title} date={thisEvent.date} description={thisEvent.description} imagePath={thisEvent.imagePath}/>;
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
          <AnnouncementsCard/>
          <AnnouncementsCard/>
        </div>
        
      </div>

      <div className={styles.memberSpotlight}>
        <div className={styles.memberSpotlightText}>
          <div className={styles.headerIconContainer}>
            <h2>Member Spotlight</h2>
            <Image src={"/page-icons/users.svg"} width={44} height={44}/> {/* 43x43 on figma */}
          </div>
          <div className={styles.memberSpotlightDescription}>
            <h3 className={`subheading`}>John Doe</h3>
            <p className={`body-1`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <div className={styles.memberSpotlightImage}>image</div>
      </div>
      
    </div>
  );
}
