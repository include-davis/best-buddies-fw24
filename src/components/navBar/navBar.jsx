import styles from "@/styles/components/navbar/navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {name: "Home", href: "https://www.google.com"},
  {name: "About Us", href: "https://www.google.com"},
  {name: "Events", href: "https://www.google.com"},
  {name: "Members", href: "https://www.google.com"},
  {name: "Contact", href: "https://www.google.com"}
]
export default function Navbar() {
  return (
    <nav className={`${styles.nav} body-1`}>
      <Image width={86} height={86} src="/best-buddies-logo.svg" />
      <div className={styles.rightSide}>
        <ul className={styles.links}>
          {navLinks.map((link, index) => {
            return (
              <li className={styles.navLink} key={`Link ${index+1}`}>
                <Link className={`body-1`} href={`${link.href}`}>
                  {link.name}
                </Link>
              </li>
            )
          }
          )}
        </ul>
      </div>
    </nav>
  );
}
