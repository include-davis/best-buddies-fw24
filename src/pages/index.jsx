import { Suspense } from "react";
import styles from "@/styles/pages/home/home.module.scss";
import Button from "@/components/button/button";
import FeaturedEvents from "@/components/featuredEvents/featuredEvents";
import AnnouncementsCard from "@/components/announcementsCard/announcementsCard";
import HeaderWithIcon from "@/components/headerWithIcon/headerWithIcon";
import AutoImage from "@/components/AutoImage/AutoImage";
import YouTubePlayer from "@/components/YouTubePlayer/YouTubePlayer";

export async function getStaticProps() {
  const homepage_res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/homepage?populate=*`
  );
  const homepage_json = await homepage_res.json();
  const announcements_res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/announcements?populate=*`
  );
  const announcements_json = await announcements_res.json();
  const events_res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/events?populate=*`
  );
  const events_json = await events_res.json();

  return {
    props: {
      homepage_json: homepage_json.data.attributes,
      announcements_json: announcements_json.data,
      events_json: events_json.data,
    },
  };
}

export default function Home({
  homepage_json,
  events_json,
  announcements_json,
}) {
  return (
    <div className={styles.body}>
      <div className={styles.hero}>
        <div className={styles.heroHeaders}>
          <p className={`subheading`}>BEST BUDDIES AT UC DAVIS</p>
          <h1>Friendships that matter.</h1>
          <h5>
            Fostering social and economic inclusion for individuals with
            disabilities.
          </h5>
        </div>

        <Button
          label={"Join Us"}
          href="member"
          extraStyles={styles.heroButton}
        />
      </div>
      <Suspense
        fallback={
          <div className={styles.heroVideoFallback}>
            <p className={`body-1`}>Loading Video...</p>
          </div>
        }
      >
        <div className={styles.heroVideoContainer}>
          <YouTubePlayer src={homepage_json.video_url} />
        </div>
      </Suspense>
      <div className={styles.mission}>
        <div className={styles.missionText}>
          <h1>Our Mission</h1>
          <p className={`body-1`}>
            <span className={styles.purpleHighlight}>
              Best Buddies at UC Davis
            </span>{" "}
            {homepage_json.our_mission_text}
          </p>
        </div>
        <Button
          label={"About Our Chapter"}
          href={homepage_json.our_mission_link}
        />
      </div>

      <FeaturedEvents data={events_json} />

      <div className={styles.announcements}>
        <HeaderWithIcon label="Announcements" src="/page-icons/star.svg" />

        <div className={styles.announcementCardContainer}>
          {announcements_json.map((thisAnnouncement, index) => {
            return (
              <AnnouncementsCard
                key={`Announcement ${index + 1}`}
                title={thisAnnouncement.attributes.title}
                date={thisAnnouncement.attributes.date}
                description={thisAnnouncement.attributes.description}
                href={thisAnnouncement.attributes.learn_more_link}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.memberSpotlightContainer}>
        <div className={styles.memberSpotlight}>
          <HeaderWithIcon
            label="Member Spotlight"
            src="/page-icons/users.svg"
          />
          <AutoImage
            src={homepage_json.member_spotlight_image.data.attributes.url}
            alt={
              homepage_json.member_spotlight_image.data.attributes
                .alternativeText
            }
            style={{ width: "100%", height: "auto" }}
            className={styles.memberSpotlightImagePhone}
          />
          <div className={styles.memberSpotlightDescription}>
            <h3 className={`subheading`}>
              {homepage_json.member_spotlight_header}
            </h3>
            <p className={`body-1`}>
              {homepage_json.member_spotlight_description}
            </p>
          </div>
        </div>
        <AutoImage
          src={homepage_json.member_spotlight_image.data.attributes.url}
          alt={
            homepage_json.member_spotlight_image.data.attributes.alternativeText
          }
          style={{ width: "50%", height: "auto", aspectRatio: "1.22" }}
          className={styles.memberSpotlightImageDesktop}
        />
      </div>
    </div>
  );
}
