import styles from "@/styles/components/navbar/navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "@/components/navBar/dropdown/dropdown";
import Button from "@/components/button/button";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AutoImage from "@/components/AutoImage/AutoImage";
import navLinks from "@/data/navbar/navlinks";

export default function Navbar() {
  //show or hide dropdown menu
  const [dropdownStates, setDropdownStates] = useState(
    navLinks.map(() => false)
  );
  //show or hide mobile navbar menu with the links
  const [mobileMenuState, setMobileMenuState] = useState(false);
  //bars icon to open mobile navbar menu or x icon to close mobile navbar menu
  // const [mobileMenuIcon, setMobileMenuIcon] = useState("page-icons/menu.svg");
  const router = useRouter();

  //show or hide the dropdown menus
  const toggleMenu = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = prevStates.map((state, i) =>
        i === index ? !state : false
      );
      return newStates;
    });
  };

  //show or hide mobile navbar
  const toggleMobileMenu = () => {
    if (mobileMenuState) {
      setMobileMenuState(false);
      // setMobileMenuIcon("page-icons/menu.svg");
    } else {
      setMobileMenuState(true);
      // setMobileMenuIcon("page-icons/exit.svg");
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
          <Link href={"/"}>
            <AutoImage
              src={"/best-buddies-logo.svg"}
              alt={"best buddies logo"}
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
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
                    onMouseLeave={() => toggleMenu(index)}
                  >
                    <div className={styles.headerContent}>
                      <p>{link.name}</p>
                      <Image
                        className={styles.dropdownIcon}
                        width={9}
                        height={12}
                        src="/page-icons/down-arrow.svg"
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
              <Button label={"Join Us"} href={"/members/new"} />
            </li>
            <li className={styles.mobileMenuIcon}>
              <Image
                width={35}
                height={22}
                src={
                  mobileMenuState
                    ? "/page-icons/exit.svg"
                    : "/page-icons/menu.svg"
                }
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
                    width={9}
                    height={12}
                    src={"/page-icons/down-arrow.svg"}
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
