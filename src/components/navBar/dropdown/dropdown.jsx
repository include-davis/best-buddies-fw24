import styles from "@/styles/components/navBar/dropdown/dropdown.module.scss";
// import React, { useState } from "react";

export default function Dropdown({
  children,
  state: _,
  setState: __,
  isMobile,
}) {
  return (
    <div
      className={isMobile ? `${styles.dropdownMobile}` : `${styles.dropdown}`}
    >
      {children}
    </div>
  );
}
