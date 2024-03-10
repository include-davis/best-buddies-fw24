import React, { useState, useRef } from "react";
import styles from "@/styles/pages/contact/contact.module.scss";
// import Button from "@/components/button/button";
import Image from "next/image";

/* things to change later:
1. replace p element at the end of the form with confirmation modal
2. mailOptions html if you want it to be prettier.
3. email configurations in .env.
*/

export default function Contact() {
  const options = [
    {
      id: "bestbuddiesinfo",
      content: "What Best Buddies does and how it works at UC Davis",
    },
    { id: "joining", content: "How to join Best Buddies" },
    { id: "events", content: "Best Buddies events" },
    { id: "conflict", content: "Buddy/peer buddy conflict" },
    { id: "other", content: "Other" },
  ];

  const [selected, setSelected] = useState("");
  const [optionsActive, setOptionsActive] = useState(false);
  const [mailStatus, setMailStatus] = useState("");
  const [formPending, setFormPending] = useState(false);
  const formRef = useRef(null);

  const toggleOptionsMenu = () => {
    setOptionsActive(!optionsActive);
  };

  const selectOption = (e) => {
    const labelText = e.currentTarget.querySelector("label").textContent;
    setSelected(labelText);
    setOptionsActive(false);
  };

  const formHandler = async (e) => {
    setFormPending(true);
    e.preventDefault();

    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());
    if (!values.type) {
      values["type"] = selected;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "applications/json",
        },
        body: JSON.stringify(values),
      });
      const resData = await res.json();
      console.log(resData);
      if (resData.status === 200) {
        setMailStatus("sent!");
      } else {
        setMailStatus("There was an error. Try again later.");
      }
    } catch (e) {
      console.log(e);
    }

    setFormPending(false);
    formRef.current.reset();
    setSelected("");
  };

  return (
    <div className={styles.contact}>
      <div className={styles.title}>
        <h1>Contact Us</h1>
        <div>
          <p className={`${styles.description} body-1`}>
            Have questions or comments for our officer team?{" "}
          </p>
          <p className={`${styles.description} body-1`}>
            Please fill out the form below and we will get back to you as soon
            as possible!
          </p>
        </div>
        <p className={`${styles.warning} body-1-bold`}>* = required field</p>
      </div>

      <form ref={formRef} onSubmit={formHandler}>
        <div className={styles.infoSection}>
          <div className={styles.infoContainer}>
            <p className={`${styles.required} body-1-bold`}>Name</p>
            <input
              className={`${styles.answerContainer} body-1`}
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
            ></input>
          </div>
          <div className={styles.infoContainer}>
            <p className={`${styles.required} body-1-bold`}>Email Address</p>
            <input
              className={`${styles.answerContainer} body-1`}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            ></input>
          </div>
        </div>

        <div className={styles.dropdown}>
          <div className={styles.dropdownContent}>
            <p className={`${styles.required} body-1-bold`}>
              I have a question/comment about ...
            </p>
            <div className={styles.selectBox}>
              <div
                className={
                  optionsActive
                    ? `${styles.optionsContainer} ${styles.active}`
                    : `${styles.optionsContainer}`
                }
              >
                {options.map((option, index) => (
                  <div
                    key={index}
                    className={styles.option}
                    onClick={selectOption}
                  >
                    <input
                      type="radio"
                      className={styles.radio}
                      id={option.id}
                      name="type"
                      value={option.content}
                    ></input>
                    <label htmlFor={option.id}>{option.content}</label>
                  </div>
                ))}
              </div>
              <div onClick={toggleOptionsMenu} className={styles.selected}>
                <div className={`${styles.selectedChoice}`}>
                  {selected || <p className={styles.hide}>Select an option</p>}
                </div>
              </div>
              <Image
                className={
                  optionsActive
                    ? `${styles.dropdownIcon} ${styles.openMenuIcon}`
                    : `${styles.dropdownIcon}`
                }
                onClick={toggleOptionsMenu}
                width={24}
                height={27}
                src="page-icons/dropdown.svg"
                alt="Dropdown Menu"
              />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "50px",
              }}
            >
              <p className={`${styles.required} body-1-bold`}>
                Describe your question or comment
              </p>
              <textarea
                className={`${styles.answerContainer} ${styles.paragraphContainer} body-1`}
                name="question"
                cols="50"
                rows="10"
              />
            </div>
            {/* <Button type="submit" label={"Submit"} href='/contact'/> */}
            <button type="submit" href="/contact" className={styles.button}>
              Submit
            </button>
            <p>{formPending ? "Sending your question!" : `${mailStatus}`}</p>
          </div>
        </div>
      </form>
    </div>
  );
}
