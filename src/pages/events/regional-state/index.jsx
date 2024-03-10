import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";
import AutoImage from "@/components/AutoImage/AutoImage";
import styles from "@/styles/pages/events/regional-state.module.scss";

export async function getStaticProps() {
  const regional_state_res = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/events-regional-state?populate=*`
  );
  const regional_state_json = await regional_state_res.json();

  return {
    props: {
      regional_state_json: regional_state_json.data,
    },
  };
}

export default function RegionalStateEvents({ regional_state_json }) {
  const events = regional_state_json.attributes;

  return (
    <div className={styles.page}>
      <h1 className={styles.regional_state_title}>Regional and State Events</h1>
      <div className={styles.events}>
        <section className={styles.event}>
          <div className={styles.eventCard}>
            <div className={styles.eventCardText}>
              <h2 className={styles.cardTitle}>{events.row_1_title}</h2>
              <div className={"body-1"}>{events.row_1_description}</div>
            </div>
            <div className={styles.eventCardImg}>
              <Image
                className={styles.eventImage}
                src={events.row_1_image.data.attributes.url}
                alt={events.row_1_image.data.attributes.alternativeText}
                fill
              />
            </div>
          </div>
          <div className={styles.eventImgGallery}>
            <div className={styles.eventGalleryLeft}>
              <AutoImage
                className={styles.eventImage}
                src={events.row_2_image_1.data.attributes.url}
                alt={events.row_2_image_1.data.attributes.alternativeText}
                style={{ width: "100%", height: "auto", aspectRatio: "1" }}
              />
            </div>
            <div className={styles.eventGalleryRight}>
              <AutoImage
                className={styles.eventImage}
                src={events.row_2_image_2.data.attributes.url}
                alt={events.row_2_image_2.data.attributes.alternativeText}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <section className={styles.eventCard2}>
            <div className={styles.eventCard2Text}>
              <h2 className={styles.cardTitle}>{events.row_3_title}</h2>
              <RichText
                content={events.row_3_description}
                renderers={{
                  p: ({ children }) => <p className={"body-1"}>{children}</p>,
                }}
              />
            </div>
            <div className={styles.eventRegister}>
              <div className={styles.mobileRegisterImg}>
                <AutoImage
                  className={styles.eventImage}
                  src={events.row_2_image_1.data.attributes.url}
                  alt={events.row_2_image_1.data.attributes.alternativeText}
                  style={{ width: "100%", height: "auto", aspectRatio: "1.2" }}
                />
              </div>
              <div className={styles.eventRegisterInfo}>
                <p className={"body-1-bold"}>{events.row_3_block_2_text}</p>
                <a href={events.row_3_block_2_link_url} target="_blank">
                  <button className={styles.eventRegisterButton}>
                    Register Now
                  </button>
                </a>
              </div>
            </div>
          </section>
        </section>
        <hr className={styles.section_divider}></hr>
        <section className={styles.event2}>
          <div className={styles.event2ImgContainer}>
            <Image
              className={styles.eventImage}
              src={events.featured_event_image.data.attributes.url}
              alt={events.featured_event_image.data.attributes.alternativeText}
              fill
            />
          </div>
          <div className={styles.event2Content}>
            <div className={styles.event2Text}>
              <h2 className={styles.cardTitle}>
                {events.featured_event_title}
              </h2>
              <RichText
                content={events.featured_event_text}
                renderers={{
                  p: ({ children }) => <p className={"body-1"}>{children}</p>,
                }}
              />
            </div>
            <a href={events.featured_event_get_involved_link} target="_blank">
              <button className={styles.event2Button}>Get Involved</button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
