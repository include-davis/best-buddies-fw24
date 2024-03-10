import EventCard from "./eventCard/eventCard";
import HeaderWithIcon from "../headerWithIcon/headerWithIcon";
import styles from "@/styles/components/featuredEvents/featuredEvents.module.scss";

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
              title={card.attributes.title}
              date={card.attributes.date}
              description={card.attributes.description}
              imagePath={card.attributes.image.data.attributes.url}
              altText={card.attributes.image.data.attributes.alternativeText}
              eventLink={card.attributes.rsvp_link}
            />
          );
        })}
      </div>
    </div>
  );
}
