import styles from "@/styles/components/eventcard/eventcard.module.scss";
import Image from "next/image";
import Button from "../button/button";

export default function EventCard({ title, date, description, imagePath, eventLink }) {
    return (
      <div className={styles.card}>
        <Image src={imagePath} alt={title} width={352} height={240} />
        <div className={styles.textContainer}> 
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardSubtitle}>{date}</p>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      <Button label="RSVP" href={eventLink} />
    </div>
    );
  }
  