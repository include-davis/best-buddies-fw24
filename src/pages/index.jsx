import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/home/home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.imgContainer}>
        <Image
          src="/about-imgs/ucd/about-ucd-banner.jpg"
          alt="member-hero"
          objectFit="cover"
          objectPosition="center"
          fill
        />
        <div className={styles.imgText}>
          <h1>Best Buddies</h1>
          <h1>UC Davis Chapter</h1>
        </div>
      </div>
    </div>
  );
}
