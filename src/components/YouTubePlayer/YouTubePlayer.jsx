import styles from "@/styles/components/YouTubePlayer/YouTubePlayer.module.scss";
import AutoImage from "../AutoImage/AutoImage";
import { FaYoutube } from "react-icons/fa";

export default function YouTubePlayer({ src, title }) {
  return (
    <div className={styles.youtubeContainer}>
      <div className={styles.youtubeCard}>
        <iframe
          className={styles.vid}
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameborder="0"
          allowFullScreen="true"
        />
        <div className={styles.videoContent}>
          <div className={styles.videoMetaInfo}>
            <p className={"body-1-bold"}>{title}</p>
            <div className={styles.trademark}>
              <FaYoutube fill="red" />
              <p className={"body-2"}>YouTube</p>
            </div>
          </div>
          <div className={styles.infoIcon}>
            <AutoImage src="/page-icons/tooltip.svg" alt="tooltip icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
