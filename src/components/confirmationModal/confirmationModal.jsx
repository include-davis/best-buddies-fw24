import Image from "../AutoImage/AutoImage";
import styles from "@/styles/components/confirmationModal/confirmationModal.module.scss";

export default function ConfirmationModal({
  pending,
  mailStatus,
  handleClose,
}) {
  return (
    <div className={styles.main_container}>
      {(pending || mailStatus) && (
        <div className={styles.confirmation_modal_backdrop}>
          <div className={styles.confirmation_modal_container}>
            {pending && (
              <div className={styles.loading_container}>
                <h3>Hold on while we receive your request.</h3>
                <div className={styles.loader}></div>
              </div>
            )}
            {mailStatus === "success" && (
              <div className={styles.ok_container}>
                <div className={styles.ok_circle}>
                  <Image src="/contact-icons/check-mark.svg" alt="checkmark" />
                </div>
                <h3 className={styles.ok_header}>Thank you!</h3>
                <p className={styles.ok_text}>
                  Your form has successfully been submitted.
                </p>
                <button className={styles.x_button} onClick={handleClose}>
                  <div>
                    <Image src="/contact-icons/x.svg" alt="x" />
                  </div>
                </button>
              </div>
            )}
            {mailStatus === "failed" && (
              <div className={styles.ok_container}>
                <h3 className={styles.ok_header}>Whoops!</h3>
                <p className={styles.ok_text}>Something went wrong.</p>
                <button
                  className={styles.x_button}
                  onClick={() => window.location.reload()}
                >
                  <div>
                    <Image src="/contact-icons/x.svg" alt="x" />
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
