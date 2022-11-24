import styles from "./SliceTag.module.css";

export default function SliceTag({ slice }) {
  return <div className={styles.tag}>CUARTO {slice}</div>;
}
