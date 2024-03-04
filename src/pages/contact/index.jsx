import React, { useState } from "react";
import styles from "@/styles/pages/contact/contact.module.scss";
import Button from "@/components/button/button";
import Image from "next/image";



export default function Contact() {

  const options = [
    { id: 'bestbuddiesinfo', content: 'What Best Buddies does and how it works at UC Davis' },
    { id: 'join', content: 'How to join Best Buddies' },
    { id: 'events', content: 'Best Buddies events' },
    { id: 'conflict', content: 'Buddy/peer buddy conflict' },
    { id: 'other', content: 'Other' }
  ];
  const [selected, setSelected] = useState('');
  const [optionsActive, setOptionsActive] = useState(false);
  const [showSelectedText, setShowSelectedText] = useState(false);

  const toggleOptionsMenu = () => {
    setShowSelectedText(true);
    setOptionsActive(!optionsActive);
  };

  const selectOption = (e) => {
    const labelText = e.currentTarget.querySelector('label').textContent;
    setSelected(labelText);
    setOptionsActive(false);
  };
 
  return <div className={styles.contact}>
    <div className={styles.title}>
      <h1>Contact Us</h1>
      <div>
        <p className={`${styles.description} body-1`}>Have questions or comments for our officer team? </p>
        <p className={`${styles.description} body-1`}>Please fill out the form below and we will get back to you as soon as possible!</p>
      </div>
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
          <div className={styles.dropdownContent}>
            <p className={`${styles.required} body-1-bold`}>I have a question/comment about ...</p>
            <div className={styles.selectBox}>
              <div className={optionsActive ? `${styles.optionsContainer} ${styles.active}` : `${styles.optionsContainer}`}>
                  {options.map((option, index) => (
                    <div key={index} className={styles.option} onClick={selectOption}>
                      <input type="radio" className={styles.radio} id={option.id} name="category"></input>
                      <label htmlFor={option.id}>{option.content}</label>
                    </div>
                  ))}
              </div>
              <div onClick={toggleOptionsMenu} className={styles.selected}>
                <div className={optionsActive ? `${styles.selectedChoice}` : `${styles.hide}`}>
                  {selected || <p className={showSelectedText ? `${styles.appear}` : `${styles.hide}`}>Selected</p>}
                </div> 
              </div>
              <Image className={optionsActive ? `${styles.dropdownIcon} ${styles.openMenuIcon}` : `${styles.dropdownIcon}`} onClick={toggleOptionsMenu} width={24} height={27} src="page-icons/dropdown.svg"></Image>
          </div>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px' }}>
              <p className={`${styles.required} body-1-bold`}>Describe your question or comment</p>
              <textarea className={`${styles.answerContainer} ${styles.paragraphContainer} body-1`} name="paragraph_text" cols="50" rows="10"></textarea>
            </div>
            <Button label={"Submit"} href={"official"} />
          </div>
        </div>
      
      </form>

  </div>;
}

//non-mapping code in case i need it
/* <div className={styles.option} onClick={selectOption}>
                  <input type="radio" className={styles.radio} id="bestbuddiesinfo" name="category"></input>
                  <label for="bestbuddiesinfo">What Best Buddies does and how it works at UC Davis</label>
                </div>

                <div className={styles.option} onClick={selectOption}>
                  <input type="radio" className={styles.radio} id="join" name="category"></input>
                  <label for="join">How to join Best Buddies</label>
                </div>

                <div className={styles.option} onClick={selectOption}>
                  <input type="radio" className={styles.radio} id="events" name="category"></input>
                  <label for="events">Best Buddies events</label>
                </div>

                <div className={styles.option} onClick={selectOption}>
                  <input type="radio" className={styles.radio} id="conflict" name="category"></input>
                  <label for="conflict">Buddy/peer buddy conflict</label>
                </div>

                <div className={styles.option} onClick={selectOption}>
                  <input type="radio" className={styles.radio} id="other" name="category"></input>
                  <label for="other">Other</label>
                </div> */
