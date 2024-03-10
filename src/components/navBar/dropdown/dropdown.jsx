import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/navbar/dropdown/dropdown.module.scss";

export default function DropDownMenu({ state, title, sublinks }) {
  const [dropdown, setDropdown] = useState(false);
  const closeMenu = () => {
    setDropdown(false);
    state(false);
  };

  const ref = useRef(0);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className={styles.ddmenucontainer}
      style={{ width: "100%", position: "relative" }}
    >
      <button
        className={styles.pages}
        type="button"
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown(!dropdown)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "var(--color-white)",
          }}
          className={`body-1-bold`}
        >
          {title}
          <Image
            src={
              dropdown ? "page-icons/up-arrow.svg" : "page-icons/down-arrow.svg"
            }
            height={9}
            width={12}
            alt={"dropdown arrow"}
          />
        </div>
      </button>
      <ul className={`${styles.dropdown_menu} ${dropdown ? styles.show : ""}`}>
        {sublinks.map((sublink, index) => (
          <li key={index} className={styles.menu_items}>
            <Link
              onClick={closeMenu}
              href={sublink.url}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                textDecoration: "none",
                color: "var(--color-purple)",
              }}
            >
              {sublink.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
