import styles from "@/styles/components/featuredEvents/featuredEvents.module.scss";
import HeaderWithIcon from "../headerWithIcon/headerWithIcon";
import EventCard from "./eventCard/eventCard";

export default function FeaturedEvents({ data }) {
  return (
    <div className={styles.featuredEvents}>
      <HeaderWithIcon
        className={styles.featuredEventsHeader}
        label={"Featured Events"}
        src={"/page-icons/calendar.svg"}
      />
      <div className={styles.cardsContainer}>
        {data.map((card, index) => {
          return (
            <EventCard
              key={`Event Card ${index + 1}`}
              title={card.title}
              date={card.date}
              description={card.description}
              imagePath={card.imagePath}
              altText={card.altText}
              eventLink={card.eventLink}
            />
          );
        })}
      </div>
    </div>
  );
}
