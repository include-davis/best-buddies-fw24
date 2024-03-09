import styles from "@/styles/components/navbar/navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image width={86} height={86} src="/best-buddies-logo.svg" alt={"logo"} />
      <h2>Navbar yay</h2>
    </nav>
  );
}
