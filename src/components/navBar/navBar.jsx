import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "@/components/navbar/dropdown/dropdown";
import AutoImage from "@/components/AutoImage/AutoImage";
import navlinks from "@/data/navbar/navlinks";
import styles from "@/styles/components/navbar/navbar.module.scss";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive((prev) => !prev);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <AutoImage src="/best-buddies-logo.svg" alt="Best Buddies Logo" />
      </div>
      <div className={styles.rightside}>
        <ul className={styles.navlinks}>
          {navlinks.map((link) => {
            if (link.sublinks) {
              return (
                <Dropdown
                  state={setActive}
                  title={link.title}
                  sublinks={link.sublinks}
                  key={link.id}
                  // styles={{ zindex: 100 }}
                />
              );
            }

            return (
              <li className={styles.link} key={link.id} onClick={closeMenu}>
                <Link className={`body-1-bold`} href={link.url}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.joinUs}>
          <a href="">
            <button className={styles.joinButton}>Join Us</button>
          </a>
        </div>
        <div className={styles.mobileMenu} onClick={toggleMenu}>
          <Image
            src={active ? "page-icons/exit.svg" : "page-icons/menu.svg"}
            width={active ? 20 : 24}
            height={active ? 20 : 24}
            alt={"mobile menu"}
          />
        </div>
      </div>
    </nav>
  );
}
