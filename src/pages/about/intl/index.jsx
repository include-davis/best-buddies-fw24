import styles from "@/styles/pages/about/about-intl.module.scss";
import Image from "next/image";

const intlImgs = [
  /*{
    title: "hero",
    description: "",
    path: "/about-imgs/intl/about-intl-banner.jpg",
    altText: "Large group of members posing together in front of a banner and a purple and white ballon arch.",
  },*/

  {
    title: "One-to-One Friendships",
    description: "These programs build one-to-one friendships between people with and without intellectual and developmental disabilities (IDD), offering social interactions while improving the quality of life and level of inclusion for a population that is often isolated and excluded.",
    path: "/about-imgs/intl/about-intl-friendship.jpg",
    altText: "A buddy pair, both girls, stand in front of a purple wall. They are smiling and posing together.",
  },

  {
    title: "Integrated Employment",
    description: "This program secures jobs for people with intellectual and developmental disabilities (IDD), allowing them to earn an income, pay taxes, and continuously and independently support themselves.",
    path: "/about-imgs/intl/about-intl-jobs.jpg",
    altText: "A Best Buddies participant stands in front of a sign that reads 'John Hancock'. He is wearing a black suit, light blue shirt, and tan tie.",
  },

  {
    title: "Leadership Development",
    description: "These programs educate and empower people with and without IDD to become leaders, public speakers, and advocates. Best Buddies passionately believes that its program participants can lead the effort within their community and beyond to build a more inclusive world for people with IDD.",
    path: "/about-imgs/intl/about-intl-leadership.jpg",
    altText: "A Best Buddies Ambassador stands at a podium and speaks into a microphone. He is wearing a blue button-down shirt and tan slacks.",
  }, 
  
  {
    title: "Inclusive Living",
    description: "This program fosters an integrated experience for people with and without IDD to become active, contributing citizens who live independently in a dynamic environment where they can learn, grow, and thrive locations in Washington, D.C, Miami, FL, and Los Angeles, CA.",
    path: "/about-imgs/intl/about-intl-living.jpg",
    altText: "Four Best Buddies participants are gathered around a kitchen island. One of them is slicing a tomato.",
  },
]

const icons = [
  {
    title:"heart",
    path: "/page-icons/heart.svg"
  },

  {
    title: "briefcase",
    path: "/page-icons/briefcase.svg"
  },

  {
    title: "user",
    path: "/page-icons/users.svg",
  },

  {
    title: "smile",
    path: "/page-icons/smile.svg",
  }
]



export default function AboutIntl() {
  return (
    <div className={styles.body}>

      <div className={styles.heroContainer}>
        <Image className={styles.heroImg}
        src="/about-imgs/intl/about-intl-banner.jpg"
        alt="Large group of members posing together in front of a banner and a purple and white ballon arch."
        objectFit="cover" 
        objectPosition="center"
        fill
        />
        <div className={styles.heroText}>
          <h1>Best Buddies</h1>
          <h1>International</h1>
        </div>
      </div>

      <h2>Our Four Pillars</h2>
        <div className={styles.pillars}>
          <div className={styles.YellowCircle}>
            <h3>One-to-One Friendships</h3>
          </div>

          <div className={styles.GreenCircle}>
            <h3>Intergrated Employment</h3>
          </div>

          <div className={styles.RedCircle}>
            <h3>Leadership Development</h3>
          </div>

          <div className={styles.PurpleCircle}>
            <h3>Inclusive Living</h3>
          </div>
      </div>

        {intlImgs.map((pillars, index) => {
            return(
                <div key={index} className={styles.pillarsContainer}>
                  <div className={styles.card}>
                    <div className={styles.imgContainer}>
                      <Image className={styles.cardImgs}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      src={pillars.path} 
                      alt={pillars.altText}
                     />
                     </div>




                     <div className={styles.cardText}>
                      <div className={styles.headerContainer}>
                           <h2>{pillars.title}</h2>

                            {icons.map((emoji) => (
                              <Image className={styles.icons}
                              width={25}
                              height={25}
                              src={emoji.path}
                              />
                              ))}
                              </div>
                             <p className={`body-1`}>{pillars.description}</p>



                        
                         
                        
        

                  
                     </div>

                    </div>


                </div>
              

              );
              
            })}
        <div className={styles.learnMore}>
          <h2 className={styles.learnMoreText}>Want to learn more?</h2>
          <p className={styles.learnMoreText}>Visit the Best Buddies International Official website.</p>
        {/*button goes here*/}
      </div>

    </div>

  );
}



{/*<div>
      <div className={styles.heroBox}>
        <img className={styles.heroImg}
        src="/about-imgs/BBI.jpeg"
        alt="Large group of members posing together in front of a banner and a purple and white ballon arch."
        />

        <h1 className={styles.heroText}>Best Buddies International</h1>
      </div>

     
        <h2 className={styles.margin}>Our Four Pillars</h2>
        
   
        <div className={styles.pillars}>
          <div className={styles.YellowCircle}>
            <h3>One-to-One Friendships</h3>
          </div>

          <div className={styles.GreenCircle}>
            <h3>Intergrated Employment</h3>
          </div>

          <div className={styles.RedCircle}>
            <h3>Leadership Development</h3>
          </div>

          <div className={styles.PurpleCircle}>
            <h3>Inclusive Living</h3>
          </div>
      </div>

      <div className={styles.cards}>


        <div className={styles.friendships}>
          <img className={styles.pillarImg}
          src="/about-imgs/Friendship.jpg"
          alt="A buddy pair, both girls, stand in front of a purple wall. They are smiling and posing together."
          />

          <div className={styles.textFrame}>
            <div className={styles.headers}>
              <h2>One-To-One Friendships</h2>

              <img
              src="/page-icons/heart.svg"
              alt="Yellow heart." 
              />
            </div>

            <p>These programs build one-to-one friendships between people with and without intellectual and development disabilities (IDD), offering social interactions while improving the quality of life and level of inclusion for a population that is often isolated and excluded.
            </p>

          </div>
        </div>

        <div className={styles.intergratedEmployment}>
        img goes here
          <div className={styles.frame}>
            <h2 className={styles.h2text}>Intergrated Employment</h2> 
        
            needs emoji
              <p>This program secures jobs for people with intellectual and developmental disabilities (IDD), allowing them to earn an income, pay taxes, and continuously and independently support themselves.
              </p>
          </div>
        </div>

        <div className={styles.leadershipDevelopment}>
        img goes here
          <div className={styles.frame}>
            <h2 className={styles.h2text}>Leadership Development</h2> {/*needs emoji*
              <p>
              These programs educate and empower people with and without IDD to become leaders, public speakers, and advocates. Best Buddies passionately believes that its program participants can lead the effort within their community and beyond to build a more inclusive world for people with IDD.
              </p>
          </div>
        </div>

        <div className={styles.inclusiveLiving}>
        img goes here
          <div className={styles.frame}>
            <h2>Inclusive Living</h2> needs emoji
              <p>
              This program fosters an integrated experience for people with and without IDD to become active, contributing citizens who live independently in a dynamic environment where they can learn, grow, and thrive locations in Washington, D.C, Miami, FL, and Los Angeles, CA.            </p>
          </div>
        </div>
      </div>

      <div className={styles.learnMore}>
        <h2 className={styles.learnMoreText}>Want to learn more?</h2>
        <p className={styles.learnMoreText}>Visit the Best Buddies International Official website.</p>
        {/*button goes here
      </div>
</div>*/}
