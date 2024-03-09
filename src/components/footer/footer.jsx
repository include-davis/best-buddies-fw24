import styles from "@/styles/components/footer/footer.module.scss";
import Image from "next/image";
import Link from 'next/link';
import AutoImage from "../AutoImage/AutoImage";

// modify icons to fit the footer structure
const  smicons = [
  {
    name: "instagram",
    path: "/footer-icons/instagram.svg",
    slug: "https://www.instagram.com/ucdbestbuddies/",
  },
  {
    name: "facebook",
    path: "/footer-icons/facebook.svg",
    slug: "https://www.facebook.com/bestbuddiesatucdavis",
  },
  {
    name: "youtube",
    path: "/footer-icons/youtube.svg",
    slug: "https://twitter.com/bestbuddiesatucd",
  },

];

const sections = [
  {
    title: 'About Us',
    links: [
      { label: 'UCD Chapter', url: '/about/ucd' },
      { label: 'Best Buddies International', url: '/about/intl' }
    ]
  },
  {
    title: 'Events',
    links: [
      { label: 'Chapter Events', url: '/event/chapter' },
      { label: 'Regional and State Events', url: '/event/regional-state' }
    ]
  },
  {
    title: 'Members',
    links: [
      { label: 'New Members', url: '/member/new' },
      { label: 'Current Members', url: '/member/current' }
    ]
  }
  // },
  // {
  //   title: 'Contact Us',
  //   links: [
  //     { label: 'Contact Form', url: '/contact' }
  //   ]
  // }
];

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.logoAndSocials}>
          <div className={styles.socials}>
            <Image width={124} height={124} src="/best-buddies-logo.svg" alt="best-buddies-logo"/>
            <div className={styles.socialsRight}>
                <p className={`body-1-bold`}>BEST BUDDIES</p>
                <p className={`body-1-bold`}>AT UC DAVIS</p> 
              <div className={styles.smicons}>
                {smicons.map((icon) => {
                  return <Link href={icon.slug} key={icon.name} target="_blank">
                    <Image width={25} height={25} src={icon.path} alt={icon.name} />
                  </Link>
                })}
              </div>
            </div>
          </div>
          {/* .infoSection: div holding the email and phone icons and text*/}
          <div className={styles.infoSection}>
              <div className={styles.email}>
                <Image width={25} height={25} className={styles.logo} src={"/footer-icons/mail.svg"} alt={"email"}/>
                <p className={`body-1`}>ucdbestbuddies@gmail.com</p>
              </div>
              <div className={styles.phone}>
                <Image width={25} height={25} src={"/footer-icons/phone.svg"} alt={"phone"}/>
                <p className={`body-1`}>916 - 538 - 3662</p>
              </div>
          </div>
        </div>
        {/* .sections: div holding all the sections/columns */}
        <div className={`${styles.sections} body-1`}>
          <Link href="www.google.com" className={`${styles.home} body-1-bold`}>Home</Link>
          {sections.map((section, index) => (
            // .section: div holding the individual columns
            <div key={index} className={styles.section}>
              <p className={`body-1-bold`}>{section.title}</p>
              {section.links.map((link, linkIndex) => (
                <Link key={linkIndex} href={link.url} target="_blank" className={link.label === 'Contact Form' ? `${styles.contactFormLink}` : ''}>{link.label}</Link>
              ))}
            </div>
          ))}

          {/* .desktopContact: div with Contact Us column to be displayed only on desktop */}
          <div className={styles.desktopContact}>
            <p className={`body-1-bold`}>Contact Us</p>
            <Link href="/contact">Contact Form</Link>
          </div>

          <Link href="/contact" className={`${styles.mobileContact} body-1-bold`}>Contact</Link>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.bestBuddies}>Best Buddies at UC Davis</p>
        <p>Made with 🤍 by #include at Davis © 2024</p>
      </div>
    </footer>
  );
}
