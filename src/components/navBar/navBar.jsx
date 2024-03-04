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
  
  const [dropdownStates, setDropdownStates] = useState(navLinks.map(() => false));

  const toggleMenu = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !(newStates[index]);
      return newStates;
    });
  };

  const renderDropdownMenu = (links, isActive, index) => {
    return(
      <Dropdown state={isActive} setState={(state) => setDropdownStates((prevStates) =>
        {const newStates = [...prevStates];
        newStates[index] = state;
        return newStates;
        })}>
        {links.map((dropdownLink, linkIndex) => (
          <Link key={linkIndex} className={styles.link} href={dropdownLink.url}>{dropdownLink.label}</Link>
        )
        )}
      </Dropdown>
    );
  };

  return (
    <nav className={`${styles.nav} body-1`}>
      <div style={{display: 'flex', width: '100%', justifyContent:'space-between', padding: '16px'}}>
        <div className={styles.logo}>
          <Image width={86} height={86} alt="logo" src="/best-buddies-logo.svg" />
        </div>
        <div className={styles.rightSide}>
          <ul className={styles.links}>
            {navLinks.map((link, index) => (
              <li className={styles.pageLink} key={link.name}>
                {link.menu ? (
                  <div className={`${styles.header} body-1`} onMouseEnter={() => toggleMenu(index)}>
                    <div className={styles.headerContent}>
                      <p>{link.name}</p>
                      <Image className={styles.dropdownIcon} width={24} height={27} src="page-icons/dropdown.svg"/>
                    </div>
                    {dropdownStates[index] && renderDropdownMenu(link.links, dropdownStates[index], index)}
                  </div>) : (
                    <Link className={`body-1`} href={`${link.href}`}>
                      {link.name}
                    </Link>
                  )}
              </li>
            ))}
            <li style={{padding: '0px'}}>
              <Button label={"Join Us"} href={"official"}></Button>
            </li>
            <li className={styles.mobileMenuIcon}>
              <Image width={35} height={22} src="page-icons/bars.svg"></Image>
            </li> 
          </ul>
        </div> {/*right side */}
      </div>
        
      <div className={styles.mobileMenu} >
          {navLinks.map((link, index) => (
            <div>
              {link.menu ? (
                <div>
                <button key={index} className={`body-1-bold`} onClick={()=>toggleMenu(index)}>
                  <p key={index} >{link.name}</p>
                  <Image key={index} className={dropdownStates[index] ? `${styles.dropdownIcon} ${styles.active}` : `${styles.dropdownIcon}`} width={24} height={27} src="page-icons/dropdown.svg"></Image>
                </button>
                {dropdownStates[index] && (
                  <Dropdown key={index} state={dropdownStates[index]} isMobile={true}>
                    {navLinks[index].links.map((dropdownLink, index) => (
                      <Button key={index} className={styles.link} href={dropdownLink.url} label={dropdownLink.label}/>
                    ))}
                  </Dropdown>
                )}
                </div>
              ) : (
                <Button key={index} href="" label={link.name}></Button>
              )}
            </div>
            ))}
      </div>
    </nav>
  );  
}

