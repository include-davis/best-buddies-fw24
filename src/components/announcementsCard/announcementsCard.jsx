import styles from "@/styles/components/announcementsCard/announcementsCard.module.scss";
import Link from "next/link";
import Image from "next/image";

function formatDateToMonthDayYear(date) {
  date = new Date(date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate() + 1;
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

export default function AnnouncementsCard({
  title,
  date,
  description,
  href = null,
}) {
  return (
    <div className={styles.announcementsCard}>
      <div className={styles.titleDateContainer}>
        <h4 className={`subheading`}>{title}</h4>
        <p className={`body-2`}>{formatDateToMonthDayYear(date)}</p>
      </div>
      <p className={`body-1`}>{description}</p>
      {href && (
        <div className={styles.hyperlink}>
          <Link href={href} className={styles.hyperlinkLink} target="_blank">
            <p>Learn More</p>
            <Image
              src="/page-icons/hyperlink.svg"
              width={9}
              height={12}
              alt={"hyperlink"}
            />
          </Link>
        </div>
      )}
    </div>
  );
}
