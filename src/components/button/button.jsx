import styles from "@/styles/components/button/button.module.scss";
import Link from 'next/link'

// usage: <Button href={"<name_of_page>"} label={"<button text>"}/>
// <name_of_page> is name of the page, such as "member", "contact", etc
// unless you are linking the official best buddies website (special case because it's not a relative path): use "official"

export default function Button({label, href}){
    return (
        <Link href={(href=='official')? 'https://www.bestbuddies.org/' : `/${href}`} className={styles.buttonLink}>
            <button className={styles.button}>{label}</button> 
        </Link>
    );
}