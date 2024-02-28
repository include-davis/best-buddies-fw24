import styles from "@/styles/components/navbar/navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "@/components/navbar/dropdown/dropdown";
import Button from "@/components/button/button";
import React, { useState } from "react";

const navLinks = [
  {name: "Home", href: "/home", menu: false},
  {name: "About Us", href: "/about", menu: true, links: [
    { label: 'UCD Chapter', url: '/about/ucd' },
    { label: 'Best Buddies International', url: '/about/intl' }
  ]},
  {name: "Events", href: "/event", menu: true, links: [
    { label: 'Chapter Events', url: '/event/chapter' },
    { label: 'Regional and State Events', url: '/event/regional-state' }
  ]},
  {name: "Members", href: "/member", menu: true, links: [
    { label: 'New Members', url: '/member/new' },
    { label: 'Current Members', url: '/member/current' }
  ]},
  {name: "Contact", href: "/contact", menu: false}
]

export default function Navbar() {
  const [isAboutUsActive, setIsAboutUsActive] = useState(false);
  const [isEventsActive, setIsEventsActive] = useState(false);
  const [isMembersActive, setIsMembersActive] = useState(false);
  
  const toggleAboutUsMenu = () => {
    setIsAboutUsActive(!isAboutUsActive);
    setIsEventsActive(false);
    setIsMembersActive(false);
  } 
  const toggleEventsMenu = () => {
    setIsEventsActive(!isEventsActive);
    setIsAboutUsActive(false);
    setIsMembersActive(false);

  } 
  const toggleMembersMenu = () => {
    setIsMembersActive(!isMembersActive);
    setIsAboutUsActive(false);
    setIsEventsActive(false);
  } 

  return (
    <nav className={`${styles.nav} body-1`}>
      <Image width={86} height={86} src="/best-buddies-logo.svg" />
      <div className={styles.rightSide}>
      <ul className={styles.links}>
        <li>
          <Link className={`body-1`} href="/home">
            Home
          </Link>
        </li>
        <li onClick={toggleAboutUsMenu}>
          <div className={`${styles.header} body-1`} href="/about">
            <div className={styles.headerContent}>
              <p>About Us</p>
              <Image className={`${styles.dropdownIcon} ${isAboutUsActive ? styles.openIcon : ""}`} width={24} height={27} src="page-icons/dropdown.svg"></Image>
            </div>
          </div>
          {isAboutUsActive && (
            <Dropdown state={isAboutUsActive} setState={setIsAboutUsActive}>
                {navLinks[1].links.map((dropdownLink, index) => (
                    <Link className={styles.link} href={dropdownLink.url}>{dropdownLink.label}</Link>
                ))}
            </Dropdown>
          )}
        </li>
        <li onClick={toggleEventsMenu}>
          <div className={`${styles.header} body-1`} href="/event">
            <div className={styles.headerContent}>
              <p>Events</p>
              <Image className={`${styles.dropdownIcon} ${isEventsActive ? styles.openIcon : ""}`} width={24} height={27} src="page-icons/dropdown.svg"></Image>
            </div>
          </div>

          {isEventsActive && (
            <Dropdown state={isEventsActive} setState={setIsEventsActive}>
              {navLinks[2].links.map((dropdownLink, index) => (
                    <Link className={styles.link} href={dropdownLink.url}>{dropdownLink.label}</Link>
              ))}
            </Dropdown>
          )}
        </li>
        <li onClick={toggleMembersMenu}>
          <div className={`${styles.header} body-1`} href="/member">
            <div className={styles.headerContent}>
              <p>Members</p>
              <Image className={`${styles.dropdownIcon} ${isMembersActive ? styles.openIcon : ""}`} width={24} height={27} src="page-icons/dropdown.svg"></Image>
            </div>
          </div>
          {isMembersActive && (
            <Dropdown state={isMembersActive} setState={setIsMembersActive}>
              {navLinks[3].links.map((dropdownLink, index) => (
                    <Link className={styles.link} href={dropdownLink.url}>{dropdownLink.label}</Link>
              ))}
            </Dropdown>
          )}
        </li>
        <li>
          <Link className={`body-1`} href="/contact">
            Contact
          </Link>
        </li>
          <Button label={"Join Us"} href={"official"}></Button>
        </ul>
      </div>
    </nav>
  );  
}


//MAPPING ATTEMPT
/*const [dropdownStates, setDropdownStates] = useState(
    navLinks.map(() => false)
  );

  const toggleMenu = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };*/

{/* {navLinks.map((link, index) => {
            return (
              <li className={styles.navLink} key={`Link ${index + 1}`}>
                {link.menu ? (
                  <div>
                    <div className={styles.name} onClick={toggleMenu(index)}>{link.name}</div>
                    {dropdownStates[index] && (
                      <Dropdown state={dropdownStates[index]} setState={(state) =>
                        setDropdownStates((prevStates) => {
                          const newStates = [...prevStates];
                          newStates[index] = state;
                          return newStates;
                        })
                      }>
                        <ul>
                          {link.links.map((dropdownLink, index) => (
                            <li key={`dropdownLink${index}`}>
                              <Link href={dropdownLink.url}>{dropdownLink.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </Dropdown>
                    )}
                  </div>
                ) : (
                  <Link className={`body-1`} href={`${link.href}`}>
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })} */}