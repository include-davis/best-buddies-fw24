import React from "react";
import styles from "@/styles/pages/contact/contact.module.scss";
export default function Contact() {

  /*const options = [
    { id: 'bestbuddiesinfo', label: 'What Best Buddies does and how it works at UC Davis' },
    { id: 'join', label: 'How to join Best Buddies' },
    { id: 'events', label: 'Best Buddies events' },
    { id: 'conflict', label: 'Buddy/peer buddy conflict' },
    { id: 'other', label: 'Other' }
  ];*/

  return <div className={styles.contact}>
    <div className={styles.title}>
      <h1>Contact Us</h1>
      <p>Have questions or comments for our officer team? Please fill out the form below and we will get back to you as soon as possible!</p>
      <p className={styles.warning}>* = required field</p>
    </div>
      <form>
        <div className={styles.nameAndEmail}>
          <div>
            <p className={styles.required}>Name</p>
            <input className={styles.answerContainer} type="text" id="name" placeholder="Full Name" required></input>
          </div>
          <div>
            <p className={styles.required}>Email Address</p>
            <input className={styles.answerContainer} type="text" id="userEmail" placeholder="Email"required></input>
          </div>
        </div>

        <div className={styles.dropdown}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={styles.required}>Describe your question or comment</p>
            
            <div className={styles.selectBox}>
          
          <div className={styles.optionsContainer}>
            {/* use content instead of label */}
            <div className={styles.option}>
              <input type="radio" className={styles.radio} id="bestbuddiesinfo" name="category"></input>
              <label for="bestbuddiesinfo">What Best Buddies does and how it works at UC Davis</label>
            </div>

            <div className={styles.option}>
              <input type="radio" className={styles.radio} id="join" name="category"></input>
              <label for="join">How to join Best Buddies</label>
            </div>

            <div className={styles.option}>
              <input type="radio" className={styles.radio} id="events" name="category"></input>
              <label for="events">Best Buddies events</label>
            </div>

            <div className={styles.option}>
              <input type="radio" className={styles.radio} id="conflict" name="category"></input>
              <label for="conflict">Buddy/peer buddy conflict</label>
            </div>

            <div className={styles.option}>
              <input type="radio" className={styles.radio} id="other" name="category"></input>
              <label for="other">Other</label>
            </div>

          </div>
          <div className={styles.selected}>
              Select
          </div>

          </div>
            
          </div>
        </div>
        <div className={styles.content}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p className={styles.required}>Describe your question or comment</p>
        <textarea className={styles.answerContainer} name="paragraph_text" cols="50" rows="10"></textarea>
        </div>
        </div>
        
      </form>

  </div>;
}
