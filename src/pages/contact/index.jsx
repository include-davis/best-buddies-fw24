import React from "react";
import styles from "@/styles/pages/contact/contact.module.scss";
import Button from "@/components/button/button";
export default function Contact() {
  return (
    <div className={styles.contact}>
      <Button label={"Submit"} href={"official"} />
    </div>
  );
}
