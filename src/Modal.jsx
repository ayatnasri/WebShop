import styles from "./styles/modal.module.css";

function Modal({children, toggle, onClose}) {

  return (
    toggle && (
      <div className={styles.popUpContainer}>
        <div className={styles.childrenContainer}>
          {children}
          <button className={styles.backBtn} onClick={onClose}> X </button>
        </div>
      </div>
    )
  );
}
export default Modal;
