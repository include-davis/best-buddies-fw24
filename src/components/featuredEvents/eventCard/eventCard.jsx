import styles from "@/styles/components/featuredEvents/eventcard/eventcard.module.scss";
import AutoImage from "../../AutoImage/AutoImage";
import Button from "../../button/button";

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
            <p className={styles.cardSubtitle}>{date}</p>
          </div>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
      <Button label="RSVP" href={eventLink} />
    </div>
  );
}
