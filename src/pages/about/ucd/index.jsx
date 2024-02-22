import styles from "@/styles/pages/about/about-ucd.module.scss";

export default function AboutUCD() {
  return (

  <div className={styles.body}>

  <div className={styles.heroBox}>
    <img className={styles.heroImg}
       src="/about-imgs/MatchParty2022.jpg"
      alt="All the Best Buddies members (about 50 people) are huddled in a group and looking at the camera. In the foreground, four lawn chairs and a table are visible."
    />
    
    <h1 className={styles.heroText}>Best Buddies UC Davis Chapter</h1>
  </div>

  <div className={styles.cards}>
    <div className={styles.cardsBox}>
      <img className={styles.imgs} 
      width={548}
      height={637}
      src="/about-imgs/Adairandkarissa.jpg" 
      alt="Two Best Buddies members, both girls, smile at the camera and pose together. In the background is a lush green lawn and trees." 
      />

      <div className={styles.buddies}>
        <h2>Buddies + Peer Buddies</h2>
        <p>
          At the beginning of each year, Best Buddies members are matched in one-to-one friendships called "buddy pairs." Each buddy pair is made up of one person with IDD (a Buddy) and one person without IDD (a Peer Buddy). Buddy pairs will stay matched for the entire academic year. By signing up to be a Buddy/Peer Buddy, you are committing to coming to chapter events, hanging out with your buddy, and keeping in contact throughout the school year. Members of buddy pairs are required to see their buddy at least once per month and contact them (by phone, text, email, etc.) at least four times per month.
        </p>
      </div>
    </div>

    <div className={styles.cardsBox}>
      <div className={styles.associateMembers}>
        <h2>Associate Members</h2>
        <p>
          Another way to get involved is to become an Associate Member. Associates are not matched in a one-to-one friendship. However, they can still attend chapter events and get to know other chapter members. Being an Associate Member is a great way to get involved, especially if you don't think you have enough time to commit to being matched.
        </p>
      </div>

        {/*this img needs to be fixed*/}
      <img
         width={548}
        height={637}
        src="/about-imgs/Caroline, Tyler, Matt, Sean.jpg"
        alt="Four Best Buddies members are huddled under an umbrella and smiling at the camera."
      />


    </div>

      <div className={styles.chapterEvents}>
      {/* img here */}
        <h2>Chapter Events</h2>
        <p>
        Each year, we host parties, fundraisers, game nights, and other fun events for our chapter members. Events can include arts and crafts, board games, bowling, lawn games, karaoke, and more. This year's activities will primarily be in person, but we will also hold a few virtual activities for participants who don't feel comfortable with in person events.
        </p>
      </div>

      <div className={styles.buddyPair}>
      {/* img here */}
        <h2>Buddy Pair Hangouts</h2>
        <p>
        Buddy pairs also hang out outside of our chapter events. What you do with your buddy will depend on what you both are interested in. Our monthly newsletter will include ideas for what buddy pairs can do together. For example, going to the movies, getting boba, and playing basketball together.
        </p>
      </div>
    </div>

  </div>
  );
}
