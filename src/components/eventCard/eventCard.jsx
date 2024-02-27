import styles from "@/styles/components/eventcard/eventcard.module.scss";
import Image from "next/image";
import Button from "../button/button";

export default function EventCard({ title, date, description, imagePath, altText, eventLink }) {
    return (
      <div className={styles.card}> {/* 40 px gaps between info, button */}
        <div className={styles.eventInfo}> {/* 16 px gaps between image, title+date, description */}
          <div className={styles.image}>
            <Image src={imagePath} alt={altText} width={352} height={240} />
          </div>
          <div className={styles.titleDateContainer}>
            <h4 className={`subheading`}>{title}</h4>
            <p className={`body-1`}>{date}</p>
          </div>
          <p className={`body-1`}>{description}</p>
        </div>
        <Button label="RSVP" href={eventLink} />
      </div>
    );
  }
  