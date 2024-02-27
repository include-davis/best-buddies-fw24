import styles from "@/styles/components/footer/footer.module.scss";
import Image from "next/image";

// modify icons to fit the footer structure
const icons = [
  {
    name: "facebook",
    path: "/footer-icons/facebook.svg",
    slug: "https://www.facebook.com/bestbuddiesatucdavis",
  },
  {
    name: "instagram",
    path: "/footer-icons/instagram.svg",
    slug: "https://www.instagram.com/bestbuddiesatucd/",
  },
  {
    name: "youtube",
    path: "/footer-icons/youtube.svg",
    slug: "https://twitter.com/bestbuddiesatucd",
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
      <h3>Footer yay</h3>
      {icons.map((icon) => {
        return (
          <Image
            width={25}
            height={25}
            src={icon.path}
            alt={icon.name}
            key={icon.name}
          />
        );
      })}
    </footer>
  );
}
