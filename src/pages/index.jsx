import styles from "@/styles/pages/home/home.module.scss";
import YouTubePlayer from "@/components/YouTubePlayer/YouTubePlayer";

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/events`);
  const data = await res.json();

  return {
    props: {
      data: data.data,
    },
  };
}

export default function Home({ data }) {
  console.log(data);
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <YouTubePlayer
        src={
          "https://www.youtube-nocookie.com/embed/jpDCf0O0rsc?si=qUAJXnxWaqNqUjpF&amp;controls=1"
        }
        title={"THIS IS A JOKE THAT IS VERY LONG AND IS SUPPOSE TO OVERFLOW!"}
      />
    </div>
  );
}
