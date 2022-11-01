import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {

  const handleOkay = () => {
    props.onErrorDisplayClear();
  }

  return (
    <div className={styles.backdrop}>
      <section className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          {props.message}
        </div>
        <div className={styles.actions}>
          <button onClick={handleOkay}>Okay</button>
        </div>
      </section>
    </div>
  );
}

export default ErrorModal;