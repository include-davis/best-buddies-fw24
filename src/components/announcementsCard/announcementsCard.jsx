import styles from "@/styles/components/announcementsCard/announcementsCard.module.scss";

export default function AnnouncementsCard({ title, date, description }){
    return (
        <div className={styles.announcementsCard}>
            <div className={styles.titleDateContainer}>
                <p className={`subheading`}>{title}</p> 
                <p className={`body-2`}>{date}</p>
            </div>
            <p className={`body-1`}>{description}</p>
        </div>
    )
}