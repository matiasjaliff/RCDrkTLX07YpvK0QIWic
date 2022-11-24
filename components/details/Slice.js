import styles from "./Slice.module.css";

export default function Slice({ number, selectedSlice, setSelectedSlice }) {
  function handleSelectSlice() {
    setSelectedSlice(number);
  }

  return (
    <div
      className={number === selectedSlice ? styles.active : styles.inactive}
      onClick={handleSelectSlice}
    >
      {number}
    </div>
  );
}
