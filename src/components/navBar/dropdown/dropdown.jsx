import styles from "@/styles/components/navbar/dropdown/dropdown.module.scss";
import React, { useState } from "react";

export default function Dropdown({ children, state, setState, isMobile}) {
  
  return( <div className={isMobile ? `${styles.dropdownMobile}` : `${styles.dropdown}`}>
   {children}
  </div>);
  
  
}
