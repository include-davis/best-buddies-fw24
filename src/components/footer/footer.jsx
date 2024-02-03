import styles from "@/styles/components/footer/footer.module.scss";
import Image from "next/image";

// modify icons to fit the footer structure
const  smicons = [
  {
    name: "facebook",
    path: "/footer-icons/facebook.svg",
    slug: "https://www.facebook.com/bestbuddiesatucdavis",
  },
  {
    name: "instagram",
    path: "/footer-icons/instagram.svg",
    slug: "https://www.instagram.com/ucdbestbuddies/",
  },
  {
    name: "youtube",
    path: "/footer-icons/youtube.svg",
    slug: "https://twitter.com/bestbuddiesatucd",
  },

];

const  phoneAndEmailIcons = [
  {
    name: "phone",
    path: "/footer-icons/phone.svg",
  },
  {
    name: "email",
    path: "/footer-icons/mail.svg",
    slug: "mailto:",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
      <div className={styles.logoAndSocials}>
      <div className={styles.socials}>
        <Image width={124} height={124} src="/best-buddies-logo.svg" />
        <div className={styles.socials_right}>
            <p>BEST BUDDIES</p>
            <p>AT UC DAVIS</p>
          
          <div className={styles.smicons}>
            {smicons.map((icon) => {
              return <a key={icon.name} href={icon.slug} target="_blank"><Image width={25} height={25} src={icon.path} alt={icon.name} /></a>;

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
      <div className={styles.section}>
        <p>About Us</p>
        <a href="">UCD Chapter</a>
        <a href="">Best Buddies International</a>
      </div>
      <div className={styles.section}>
        <p>Events</p>
        <a href="">Chapter Events</a>
        <a href="">Regional and State Events</a>
      </div>
      <div className={styles.section}>
        <p>Members</p>
        <a href="">New Members</a>
        <a href="">Current Members</a>
      </div>
      <div className={styles.section}>
        <p>Contact Us</p>
        <a href="">Contact Form</a>
      </div>
      </div>
      </div>
      <div className={styles.copyright}>
        Made with 🤍 by #include at Davis © 2024
      </div>
      
    </footer>
  );
}
