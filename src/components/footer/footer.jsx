import styles from "@/styles/components/footer/footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import AutoImage from "../AutoImage/AutoImage";

// modify icons to fit the footer structure
const socials = [
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

const contacts = [
  {
    name: "email",
    text: "ucdbestbuddies@gmail.com",
    icon: "/footer-icons/mail.svg",
    slug: "mailto:ucdbestbuddies@gmail.com",
  },
  {
    name: "phone",
    text: "916-538-3662",
    icon: "/footer-icons/phone.svg",
    slug: "tel:916-538-3662",
  },
];

const pages = [
  { name: "Homepage", links: [{ label: "Home", url: "/" }] },
  {
    name: "About Us",
    links: [
      { label: "UCD Chapter", url: "/about/ucd" },
      { label: "Best Buddies International", url: "/about/intl" },
    ],
  },
  {
    name: "Events",
    links: [
      { label: "Chapter Events", url: "/events/chapter" },
      { label: "Regional and State Events", url: "/events/regional-state" },
    ],
  },
  {
    name: "Members",
    links: [
      { label: "New Members", url: "/members/new" },
      { label: "Current Members", url: "/members/current" },
    ],
  },
  {
    name: "Contact Us",
    links: [{ label: "Contact Form", url: "/contact" }],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerSocials}>
            <div className={styles.footerLogo}>
              <AutoImage
                src="/best-buddies-logo.svg"
                alt="Best Buddies at UC Davis"
                style={{
                  width: "100%",
                  height: "100%",
                  aspectRatio: "1",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className={styles.footerSocialsIcons}>
              <p className={styles.iconHeader}>BEST BUDDIES AT UC DAVIS</p>
              <div className={styles.mediaIcons}>
                {socials.map((social, index) => (
                  <Link key={`icon ${index + 1}`} href={social.slug}>
                    <Image
                      src={social.path}
                      alt={social.name}
                      width={25}
                      height={25}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.footerContact}>
            {contacts.map((contact) => {
              return (
                <Link
                  href={contact.slug}
                  className={styles.footerContactIcon}
                  key={`${contact.name} icon`}
                >
                  <Image
                    width={25}
                    height={25}
                    src={contact.icon}
                    alt={contact.name}
                  />
                  <p>{contact.text}</p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.footerRedirects}>
          {pages.map((page) => {
            return (
              <div className={styles.pageRedirects} key={page.name}>
                <h3 className={styles.redirectTitle}>{page.name}</h3>
                <ul className={styles.redirects}>
                  {page.links?.map((link) => {
                    return (
                      <li key={link.label}>
                        <Link href={link.url}>{link.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={`${styles.mobileCopyright} body-1`}>
          Best Buddies at UC Davis
        </p>
        <p className={`body-1`}>Made with 🤍 by #include at Davis © 2024</p>
      </div>
    </footer>
  );
}
