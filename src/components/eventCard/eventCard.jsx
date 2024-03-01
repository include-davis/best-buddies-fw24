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
      {" "}
      {/* 40 px gaps between info, button */}
      <div className={styles.eventInfo}>
        {" "}
        {/* 16 px gaps between image, title+date, description */}
        <Image src={imagePath} alt={altText} width={352} height={240} />
        <div className={styles.titleDateContainer}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardSubtitle}>{date}</p>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
      <Button label="RSVP" href={eventLink} />
    </div>
  );
}
