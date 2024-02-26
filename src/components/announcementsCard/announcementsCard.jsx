import styles from "@/styles/components/announcementsCard/announcementsCard.module.scss";

export default function AnnouncementsCard({ title, date, description }){
    return (
        <div className={styles.announcementsCard}>
            <div className={styles.titleDateContainer}>
                <p className={`subheading`}>Announcement Title</p> 
                <p className={`body-2`}>Month Day, Year</p>
            </div>
            <p className={`body-1`}>Friendship forms due this Friday!</p>
        </div>
    )
}