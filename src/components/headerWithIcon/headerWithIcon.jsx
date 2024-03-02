import styles from "@/styles/components/headerwithicon/headerwithicon.module.scss"
import Image from "next/image";

export default function HeaderWithIcon({ label, src }){
    return <div className={styles.headerIconContainer}>
        <h2>{label}</h2>
        <div className={styles.imageContainer}>
            <Image src={src} fill={true}/> {/* 43x43 on figma */}
        </div>
    </div>
}