import styles from "@/styles/pages/members/current.module.scss";
import Image from "next/image";
import AutoImage from "@/components/AutoImage/AutoImage";
import YouTubePlayer from "@/components/YouTubePlayer/YouTubePlayer";

export async function getStaticProps() {
  const current_members_res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/current-members?populate=*`
  );
  const current_members_json = await current_members_res.json();

  const newsletter = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/newsletters?populate=*`
  );

  const newsletter_json = await newsletter.json();

  return {
    props: {
      current_members_json: current_members_json.data,
      newsletter_json: newsletter_json.data,
    },
  };
}

function formatDateToMondayDayYear(date) {
  date = new Date(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[date.getMonth() + 1];
  const year = date.getFullYear();

  return `${month} ${year}`;
}

export default function CurrentMembers({
  current_members_json,
  newsletter_json,
}) {
  const data = current_members_json.attributes;
  const newsletters = newsletter_json.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const remainingNewsletters = newsletters.slice(1);
  const latestNewsletterDate = formatDateToMondayDayYear(
    newsletters[0].attributes.date
  );

  return (
    <div className={styles.currentMembersContainer}>
      <h1 className={styles.currentMembersTitle}>Current Members</h1>

      <div className={styles.renewalBox}>
        <p className={styles.renewalTitle}>Renewing your Membership?</p>
        <p className={styles.renewalBoxContent}>
          Keep your Best Buddies membership active by submitting a new
          application. Renewals are required annually, even for long-time club
          members.
          <br />
          <br />
          Check our YouTube channel for application guidance. Interviews may be
          necessary, but officers will inform you in May or June if required
          this year.
        </p>
        <a className={styles.link} href={data.renewal_url}>
          Renewal Application
          <Image
            width={9}
            height={12}
            src="/page-icons/hyperlink.svg"
            alt={"hyperlink"}
          />
        </a>
      </div>

      <div className={styles.renewalVideo}>
        <YouTubePlayer src={data.video_url} />
      </div>

      <div className={styles.friendUpdatesBox}>
        <p className={styles.subPageTitle}>Friendship Updates!</p>
        <p className={styles.subPageContent}>
          Starting in November, every Buddy and Peer Buddy will need to complete
          a Friendship Update each month. These updates let us know how your
          friendship is going and if you need support.
        </p>

        <a className={styles.link} href={data.friendship_updates_url}>
          Friendship Updates
          <Image
            width={9}
            height={12}
            src="/page-icons/hyperlink.svg"
            alt={"hyperlink"}
          />
        </a>
      </div>

      <div className={styles.latestNewsBox}>
        <p className={styles.subPageTitle}>Our Latest News</p>
        <p className={styles.subPageContent}>
          We will send out newsletters every month from September to June. There
          you can find announcements, upcoming chapter events, community events,
          and ideas for things to do with your buddy.
        </p>

        <div className={styles.prevNewsBox}>
          <a
            className={styles.currentMonthLink}
            href={newsletters[0].attributes.pdf.data.attributes.url}
            target="_blank"
          >
            {latestNewsletterDate}
            <Image
              width={9}
              height={12}
              src="/page-icons/hyperlink.svg"
              alt={"hyperlink"}
            />
          </a>
          <div className={styles.prevNewsImgContainer}>
            <a
              href={newsletters[0].attributes.pdf.data.attributes.url}
              target="_blank"
            >
              <AutoImage
                className={styles.newsletterImg}
                src={
                  newsletters[0].attributes.pdf.data.attributes.url.slice(
                    0,
                    -3
                  ) + "jpg"
                }
                alt={
                  newsletters[0].attributes.pdf.data.attributes.alternativeText
                }
              />
            </a>
            <div className={styles.pastNewsColBox}>
              <h4 className={styles.pastNewsTitle}>Past Newsletters</h4>
              <div className={styles.prevNewsLinksContainer}>
                {remainingNewsletters.map((newsletter) => {
                  return (
                    <a
                      className={styles.link}
                      href={newsletter.attributes.pdf.data.attributes.url}
                      target="_blank"
                      key={newsletter.attributes.date}
                    >
                      {formatDateToMondayDayYear(newsletter.attributes.date)}
                      <Image
                        width={9}
                        height={12}
                        src="/page-icons/hyperlink.svg"
                        alt={"hyperlink"}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
