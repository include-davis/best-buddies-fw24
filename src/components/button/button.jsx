import styles from "@/styles/components/button/button.module.scss";

export default function Button(props){
    return (
        <a href={`/${props.pageName}`} className={styles.buttonLink}>
            <button className={styles.button}>{props.children}</button>
        </a>
    );
}