import Image from "next/image";
import Link from "next/link";
import AutoImage from "@/components/AutoImage/AutoImage";
import pages from "@/data/footer/redirects";
import socials from "@/data/footer/socials";
import contacts from "@/data/footer/contacts";
import styles from "@/styles/components/footer/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerSocials}>
            <div className={styles.footerLogo}>
              <Link href={"/"}>
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
              </Link>
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
