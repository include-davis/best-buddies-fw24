import AutoImage from "@/components/AutoImage/AutoImage";
import styles from "@/styles/components/featuredEvents/eventcard/eventcard.module.scss";

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
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

export default function EventCard({
  title,
  date,
  description,
  imagePath,
  altText,
  eventLink,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.event}>
        <AutoImage
          className={styles.eventImg}
          src={imagePath}
          alt={altText}
          style={{ width: "100%", height: "auto", aspectRatio: "1" }}
        />

        <div className={styles.eventInfo}>
          <div className={styles.eventHeader}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardSubtitle}>
              {formatDateToMonthDayYear(date)}
            </p>
          </div>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
      <a href={eventLink} target="_blank">
        <button className={styles.button}>RSVP</button>
      </a>
    </div>
  );
}
