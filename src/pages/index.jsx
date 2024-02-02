import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from '@/styles/pages/home.module.scss'

const inter = Inter({ subsets: ["latin"] });

// 1 rem = 16px

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h2>BEST BUDDIES AT UC DAVIS</h2>
          <h1>Friendships that matter.</h1>
          <h5>Fostering social and economic inclusion for individuals with disabilities.</h5>
        </div>
        <button className={styles.buttonComponent}>Join Us</button> {/* this button should be a component */}
        <div className={styles.heroVideo}>video(?) goes here</div>
      </div>

      


      <div className={styles.mission}>

        <h3>Our Mission</h3>
        <p>Best Buddies at UC Davis is a chapter of the global nonprofit Best Buddies International, which promotes social and economic inclusion for people with intellectual and developmental disabilities (IDD). We envision a world in which programs like Best Buddies are no longer needed because people with IDD are completely included in their communities. </p>
        <button className={styles.buttonComponent}>About Our Chapter</button>

      </div>

      <div className={styles.featuredEvents}>
        <h4>Featured Events</h4>
        <div>carousel of event cards goes here</div> {/* event cards are used on homepage and events page. */}
      </div>

      <div className={styles.announcements}>
        <div className = {styles.announcementsContent}>

        </div>
        <h4>Announcements</h4>
        <p>the section is across the whole page</p>
      </div>

      <div className={styles.memberSpotlight}>
        <h4>Member Spotlight</h4>
        <p>there will be some text and image</p>
      </div>
      
    </div>
  );
}
