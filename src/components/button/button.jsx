import styles from "@/styles/components/button/button.module.scss";
import Link from 'next/link'

export default function Button(props){
    return (
        <Link href={`/${props.pageName}`} className={styles.buttonLink}>
            <button className={styles.button}>{props.children}</button> 
        </Link>
    );
}