import styles from "@/styles/components/announcementsCard/announcementsCard.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function AnnouncementsCard({ title, date, description, href=null }){
    return (
        <div className={styles.announcementsCard}>
            <div className={styles.titleDateContainer}>
                <h4 className={`subheading`}>{title}</h4> 
                <p className={`body-2`}>{date}</p>
            </div>
            <p className={`body-1`}>{description}</p>
            {(href!=null) && 
                <div className={styles.hyperlink}>
                    <Link href={href} className={styles.hyperlinkLink}>
                        <p>Learn More</p>
                    </Link>
                    <Image src="/page-icons/hyperlink.svg" width={15} height={24}/>
                </div> 
            }
        </div>
    )
}