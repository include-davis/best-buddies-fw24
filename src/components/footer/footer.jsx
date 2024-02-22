import styles from "@/styles/components/footer/footer.module.scss";
import Image from "next/image";
import Link from 'next/link';

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

/*const  phoneAndEmailIcons = [
  {
    name: "phone",
    path: "/footer-icons/phone.svg",
  },
  {
    name: "email",
    path: "/footer-icons/mail.svg",
    slug: "mailto:",
  },
];*/

const sections = [
  {
    title: 'About Us',
    links: [
      { label: 'UCD Chapter', url: '' },
      { label: 'Best Buddies International', url: '' }
    ]
  },
  {
    title: 'Events',
    links: [
      { label: 'Chapter Events', url: '' },
      { label: 'Regional and State Events', url: '' }
    ]
  },
  {
    title: 'Members',
    links: [
      { label: 'New Members', url: '' },
      { label: 'Current Members', url: '' }
    ]
  },
  {
    title: 'Contact Us',
    links: [
      { label: 'Contact Form', url: '' }
    ]
  }
];

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.logoAndSocials}>
        <div className={styles.socials}>
          <Image width={124} height={124} src="/best-buddies-logo.svg" alt="best-buddies-logo"/>
          <div className={styles.socials_right}>
            
              <p>BEST BUDDIES</p>
              <p>AT UC DAVIS</p>
            
            <div className={styles.smicons}>
              {smicons.map((icon) => {
                return <Link href={icon.slug} key={icon.name} target="_blank">
                  <Image width={25} height={25} src={icon.path} alt={icon.name} />
                </Link>
              })}
            </div>

          </div>
        </div>
        <div className={styles.phoneAndEmail}>
            <div className={styles.email}>
              <Image width={25} height={25} src={"/footer-icons/mail.svg"} alt={"email"}/>
              <p>ucdbestbuddies@gmail.com</p>
            </div>
            <div className={styles.phone}>
              <Image width={25} height={25} src={"/footer-icons/phone.svg"} alt={"phone"}/>
              <p>916 - 538 - 3662</p>
            </div>
          </div>
        </div>
        <div className={styles.sections}>
        {sections.map((section, index) => (
          <div key={index} className={styles.section}>
          <p>{section.title}</p>
          {section.links.map((link, linkIndex) => (
            <Link key={linkIndex} href={link.url} target="_blank">{link.label}</Link>
          ))}
          </div>
        ))}
        </div>
      </div>
      <div className={styles.copyright}>
        Made with 🤍 by #include at Davis © 2024
      </div>
      
    </footer>
  );
}
