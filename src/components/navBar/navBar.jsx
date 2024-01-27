import styles from "@/styles/components/navbar/navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image width={86} height={86} src="/best-buddies-logo.svg" />
      <h2>Navbar yay</h2>
    </nav>
  );
}
