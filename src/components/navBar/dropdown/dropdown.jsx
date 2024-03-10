import styles from "@/styles/components/navbar/dropdown/dropdown.module.scss";

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
