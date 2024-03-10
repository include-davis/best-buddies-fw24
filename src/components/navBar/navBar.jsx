import styles from "@/styles/components/navbar/navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "@/components/navbar/dropdown/dropdown";
import Button from "@/components/button/button";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AutoImage from "../AutoImage/AutoImage";

const navLinks = [
  { name: "Home", href: "/home", menu: false },
  {
    name: "About Us",
    href: "/about",
    menu: true,
    links: [
      { label: "UCD Chapter", url: "/about/ucd" },
      { label: "Best Buddies International", url: "/about/intl" },
    ],
  },
  {
    name: "Events",
    href: "/event",
    menu: true,
    links: [
      { label: "Chapter Events", url: "/event/chapter" },
      { label: "Regional and State Events", url: "/event/regional-state" },
    ],
  },
  {
    name: "Members",
    href: "/member",
    menu: true,
    links: [
      { label: "New Members", url: "/member/new" },
      { label: "Current Members", url: "/member/current" },
    ],
  },
  { name: "Contact", href: "/contact", menu: false },
];

export default function Navbar() {
  //show or hide dropdown menu
  const [dropdownStates, setDropdownStates] = useState(
    navLinks.map(() => false)
  );
  //show or hide mobile navbar menu with the links
  const [mobileMenuState, setMobileMenuState] = useState(false);
  //bars icon to open mobile navbar menu or x icon to close mobile navbar menu
  const [mobileMenuIcon, setMobileMenuIcon] = useState("page-icons/bars.svg");
  const router = useRouter();

  //show or hide the dropdown menus
  const toggleMenu = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = prevStates.map((state, i) =>
        i == index ? !state : false
      );
      return newStates;
    });
  };

  //show or hide mobile navbar
  const toggleMobileMenu = () => {
    if (mobileMenuState) {
      setMobileMenuState(false);
      setMobileMenuIcon("page-icons/bars.svg");
    } else {
      setMobileMenuState(true);
      setMobileMenuIcon("page-icons/exit.svg");
    }
  };

  //NOT SURE IF THIS FEATURE IS NEEDED: close mobile navbar menu everytime user loads to a new page (couldn't use onClick for Button component)
  useEffect(() => {
    setMobileMenuState(false);
  }, [router.asPath]);

  //show dropdown menu under category
  const renderDropdownMenu = (links, isActive, index) => {
    return (
      <Dropdown
        state={isActive}
        setState={(state) =>
          setDropdownStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = state;
            return newStates;
          })
        }
      >
        {/* show links under the corresponding category */}
        {links.map((dropdownLink, linkIndex) => (
          <Link key={linkIndex} className={styles.link} href={dropdownLink.url}>
            {dropdownLink.label}
          </Link>
        ))}
      </Dropdown>
    );
  };

  return (
    <nav
      className={
        mobileMenuState
          ? `${styles.nav} ${styles.mobileNav} body-1`
          : `${styles.nav} body-1`
      }
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          padding: "16px",
        }}
      >
        <div className={styles.logo}>
          <AutoImage
            src={"/best-buddies-logo.svg"}
            alt={"best buddies logo"}
            style={{ width: "100%", height: "auto" }}
          />
          {/* <Image width={86} height={86} alt="logo" src="/best-buddies-logo.svg" /> */}
        </div>
        {/* categories, join button, bars/x icon on mobile */}
        <div className={styles.rightSide}>
          <ul className={styles.links}>
            {/* categories */}
            {navLinks.map((link, index) => (
              <li className={styles.pageLink} key={link.name}>
                {/* if the category has a dropdown menu, render it when the user's mouse enters the category*/}
                {link.menu ? (
                  <div
                    className={`${styles.header} body-1`}
                    onMouseEnter={() => toggleMenu(index)}
                  >
                    <div className={styles.headerContent}>
                      <p>{link.name}</p>
                      <Image
                        className={styles.dropdownIcon}
                        width={24}
                        height={27}
                        src="page-icons/dropdown.svg"
                        alt={"Dropdown Menu"}
                      />
                    </div>

                    {dropdownStates[index] &&
                      renderDropdownMenu(
                        link.links,
                        dropdownStates[index],
                        index
                      )}
                  </div>
                ) : (
                  <Link className={`body-1`} href={`${link.href}`}>
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <li style={{ padding: "0px" }}>
              <Button label={"Join Us"} href={"official"}></Button>
            </li>
            <li className={styles.mobileMenuIcon}>
              <Image
                width={35}
                height={22}
                src={mobileMenuIcon}
                onClick={toggleMobileMenu}
                alt={"Mobile Menu Icon"}
              />
            </li>
          </ul>
        </div>{" "}
        {/*right side */}
      </div>

      <div
        className={mobileMenuState ? `${styles.mobileMenu}` : `${styles.hide}`}
      >
        {navLinks.map((link, index) => (
          <div key={`Navlink ${index}`}>
            {link.menu ? (
              <div>
                <button
                  key={index}
                  className={`body-1-bold`}
                  onClick={() => toggleMenu(index)}
                >
                  <p key={index}>{link.name}</p>
                  <Image
                    key={index}
                    className={
                      dropdownStates[index]
                        ? `${styles.dropdownIcon} ${styles.active}`
                        : `${styles.dropdownIcon}`
                    }
                    width={24}
                    height={27}
                    src="page-icons/dropdown.svg"
                    alt={"Dropdown Menu"}
                  />
                </button>
                {dropdownStates[index] && (
                  <Dropdown
                    key={index}
                    state={dropdownStates[index]}
                    isMobile={true}
                  >
                    {navLinks[index].links.map((dropdownLink, index) => (
                      <Button
                        key={index}
                        className={styles.link}
                        href={dropdownLink.url}
                        label={dropdownLink.label}
                      />
                    ))}
                  </Dropdown>
                )}
              </div>
            ) : (
              <Button key={index} href={link.href} label={link.name}></Button>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
