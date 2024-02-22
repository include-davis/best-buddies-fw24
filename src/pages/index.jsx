import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from '@/styles/pages/home.module.scss';
import Button from "@/components/button/button";

const inter = Inter({ subsets: ["latin"] });

function CalendarIcon() {
  return(
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.8333 7.33333H9.16667C7.14162 7.33333 5.5 8.97495 5.5 11V36.6667C5.5 38.6917 7.14162 40.3333 9.16667 40.3333H34.8333C36.8584 40.3333 38.5 38.6917 38.5 36.6667V11C38.5 8.97495 36.8584 7.33333 34.8333 7.33333Z" fill="#B4DDD5" stroke="#8FD1C4" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M29.3335 3.66667V11" stroke="#8FD1C4" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.6665 3.66667V11" stroke="#8FD1C4" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.5 18.3333H38.5" stroke="#8FD1C4" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.8746 8.22729C20.1321 5.67976 23.7648 5.67976 25.0223 8.22729L27.6247 13.4995C28.1236 14.5102 29.0875 15.2111 30.2028 15.3741L36.0281 16.2256C38.8387 16.6364 39.9589 20.0912 37.9241 22.0731L33.7143 26.1734C32.9058 26.961 32.5367 28.0961 32.7275 29.2085L33.7203 34.9971C34.2006 37.7976 31.261 39.9331 28.7462 38.6106L23.544 35.8748C22.5452 35.3495 21.3518 35.3495 20.3529 35.8748L15.1508 38.6106C12.6359 39.9331 9.69631 37.7976 10.1766 34.9972L11.1694 29.2085C11.3602 28.0961 10.9912 26.961 10.1826 26.1734L5.97283 22.0731C3.93803 20.0912 5.05822 16.6364 7.86883 16.2256L13.6941 15.3741C14.8094 15.2111 15.7733 14.5102 16.2722 13.4995L18.8746 8.22729Z" fill="#FFEC9D" stroke="#FFD420" stroke-width="4.1897" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.4591 37.625V34.0417C30.4591 32.1409 29.7041 30.3181 28.3601 28.9741C27.0161 27.6301 25.1932 26.875 23.2925 26.875H8.95915C7.05843 26.875 5.23556 27.6301 3.89155 28.9741C2.54754 30.3181 1.79248 32.1409 1.79248 34.0417V37.625" fill="#FFA97C"/>
      <path d="M30.4591 37.625V34.0417C30.4591 32.1409 29.7041 30.3181 28.3601 28.9741C27.0161 27.6301 25.1932 26.875 23.2925 26.875H8.95915C7.05843 26.875 5.23556 27.6301 3.89155 28.9741C2.54754 30.3181 1.79248 32.1409 1.79248 34.0417V37.625" stroke="#F37735" stroke-width="3.58333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.1242 19.7083C20.0822 19.7083 23.2909 16.4997 23.2909 12.5417C23.2909 8.58363 20.0822 5.375 16.1242 5.375C12.1661 5.375 8.95752 8.58363 8.95752 12.5417C8.95752 16.4997 12.1661 19.7083 16.1242 19.7083Z" fill="#FFA97C" stroke="#F37735" stroke-width="3.58333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M41.2075 37.6244V34.041C41.2063 32.4531 40.6778 30.9106 39.705 29.6556C38.7321 28.4006 37.37 27.5043 35.8325 27.1073" fill="#FFA97C"/>
      <path d="M41.2075 37.6244V34.041C41.2063 32.4531 40.6778 30.9106 39.705 29.6556C38.7321 28.4006 37.37 27.5043 35.8325 27.1073" stroke="#F37735" stroke-width="3.58333" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M28.6675 5.6073C30.2091 6.00201 31.5754 6.89856 32.5512 8.15561C33.5269 9.41266 34.0565 10.9587 34.0565 12.55C34.0565 14.1413 33.5269 15.6874 32.5512 16.9444C31.5754 18.2015 30.2091 19.098 28.6675 19.4927" stroke="#F37735" stroke-width="3.58333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.hero}>
        <h2>BEST BUDDIES AT UC DAVIS</h2>
        <h1>Friendships that matter.</h1>
        <h5>Fostering social and economic inclusion for individuals with disabilities.</h5>

        <Button label={"Join Us"} href="member" extraStyles={styles.heroButton}/>
      </div>

      <div className={styles.heroVideo}>video(?) goes here</div>
    
      <div className={styles.mission}>

        <h1>Our Mission</h1>
        <p><text className={styles.purpleHighlight}>Best Buddies at UC Davis</text> is a chapter of the global nonprofit Best Buddies International, which promotes social and economic inclusion for people with intellectual and developmental disabilities (IDD). We envision a world in which programs like Best Buddies are no longer needed because people with IDD are completely included in their communities. </p>
        <Button label={"About Our Chapter"} href="about"/>

      </div>

      <div className={styles.featuredEvents}>
        <div className={styles.headerIcon}>
          <h2>Featured Events</h2>
          <CalendarIcon/>
        </div>
        <div className = {styles.carousel}>
          <div className = {styles.eventCard}>card content wow</div>
          <div className = {styles.eventCard}>card content wow</div>
          <div className = {styles.eventCard}>card content wow</div>
        </div> {/* event cards are used on homepage and events page. */}
      </div>

      <div className={styles.announcements}>
        <div className={styles.headerIcon}>
          <h2>Announcements</h2>
          <StarIcon/>
        </div>
        
        <div className={styles.announcementCardContainer}>
          <div className = {styles.announcementsCard}>announcements card</div>
          <div className = {styles.announcementsCard}>announcements card</div>
        </div>
        
      </div>

      <div className={styles.memberSpotlight}>
        <div className={styles.memberSpotlightText}>
          <div className={styles.headerIcon}>
            <h2>Member Spotlight</h2>
            <UserIcon/>
          </div>
          <div className={styles.memberSpotlightDescription}>
            <h3>John Doe</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <div className={styles.memberSpotlightImage}>image</div>
      </div>
      
    </div>
  );
}
