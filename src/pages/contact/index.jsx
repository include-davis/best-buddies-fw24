import React, { useState } from "react";
import styles from "@/styles/pages/contact/contact.module.scss";



export default function Contact() {

  /*const options = [
    { id: 'bestbuddiesinfo', label: 'What Best Buddies does and how it works at UC Davis' },
    { id: 'join', label: 'How to join Best Buddies' },
    { id: 'events', label: 'Best Buddies events' },
    { id: 'conflict', label: 'Buddy/peer buddy conflict' },
    { id: 'other', label: 'Other' }
  ];*/
  // const [selected, setSelected] = useState('');
  // const [optionsActive, setOptionsActive] = useState(false);

  // const handleSelectedClick = () => {
  //   setOptionsActive(!optionsActive);
  // };

  // const handleOptionClick = (e) => {
  //   setSelected(e.target.querySelector('label').innerHTML);
  //   setOptionsActive(false);
  // };
 
  return <div className={styles.contact}>
    <div className={styles.title}>
      <h1>Contact Us</h1>
      <p className={`body-1`}>Have questions or comments for our officer team? Please fill out the form below and we will get back to you as soon as possible!</p>
      <p className={`${styles.warning} body-1-bold`}>* = required field</p>
    </div>

      <form>
        <div className={styles.infoSection}>
          <div className={styles.infoContainer}>
            <p className={`${styles.required} body-1-bold`}>Name</p>
            <input className={`${styles.answerContainer} body-1`} type="text" id="name" placeholder="Full Name" required></input>
          </div>
          <div className={styles.infoContainer}>
            <p className={`${styles.required} body-1-bold`}>Email Address</p>
            <input className={`${styles.answerContainer} body-1`} type="text" id="userEmail" placeholder="Email" required></input>
          </div>
        </div>

        <div className={styles.dropdown}>
          <div className={styles.test} style={{ display: 'flex', flexDirection: 'column' }}>
            <p className={`${styles.required} body-1-bold`}>I have a question/comment about ...</p>
            <div className={styles.selectBox}>
              {/* <div className={optionsActive ? `${styles.optionsContainer} ${styles.active}` : `${styles.optionsContainer}`}> */}
              <div className={`${styles.optionsContainer}`}>
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
            <p className={`${styles.required} body-1-bold`}>Describe your question or comment</p>
            <textarea className={`${styles.answerContainer} body-1`} style={{marginTop: '8px'}} name="paragraph_text" cols="50" rows="10"></textarea>
          </div>
        </div>
        
      </form>

  </div>;
}

