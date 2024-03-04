import styles from "@/styles/components/eventcard/eventcard.module.scss";
import Image from "next/image";
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
        <div className={styles.imageContainer}>
          <Image
            src={imagePath}
            className={styles.eventImg}
            alt={altText}
            fill={true}
          />
        </div>

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
