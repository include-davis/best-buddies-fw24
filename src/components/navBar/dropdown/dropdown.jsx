import styles from "@/styles/components/navbar/dropdown/dropdown.module.scss";

export default function Dropdown({ children, state, setState }) {
  return (
    <div
      className={`${styles.dropdown} ${state ? styles.active : ""}`}
      onClick={setState((prevState) => !prevState)}
    >
      {children}
    </div>
  );
}
