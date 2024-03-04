import styles from "@/styles/components/eventCard/eventCard.module.scss";
import AutoImage from "../AutoImage/AutoImage";
import Button from "../button/button";

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
        <AutoImage className={styles.eventImg} src={imagePath} alt={altText} />

        <div className={styles.eventInfo}>
          <div className={styles.eventHeader}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardSubtitle}>{date}</p>
          </div>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
      <Button label="RSVP" href={eventLink} />
    </div>
  );
}
