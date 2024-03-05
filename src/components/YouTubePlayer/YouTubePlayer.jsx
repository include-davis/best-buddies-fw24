import styles from "@/styles/components/YouTubePlayer/YouTubePlayer.module.scss";

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
          allowFullScreen={true}
        />
      </div>
    </div>
  );
}
