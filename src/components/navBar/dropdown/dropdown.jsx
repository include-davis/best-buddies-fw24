import styles from "@/styles/components/navbar/dropdown/dropdown.module.scss";
import React, { useState } from "react";

export default function Dropdown({ children, state, setState}) {
  
  return( <div className={styles.dropdown} onClick={() => setState(!state)}>
   {/* {state && children} */}
   {children}
  </div>);
  
  
}
