import styles from "./reservationCard.module.css"

const ReservationCard = ({ name, contact, product }: { name: string, contact: string, product: string}) => {

    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <p className={styles.label}>Name</p>
                <p className={styles.infoText}>{name}</p>
                <p className={styles.label}>Contact Info</p>
                <p className={styles.infoText}>{contact}</p>
                <p className={styles.label}>Item</p>
                <p className={styles.infoText}>{product}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>
                    <p className={styles.buttonText}>
                        Complete
                    </p>
                </button>
                <button className={styles.button}>
                    <p className={styles.buttonText}>
                        Cancel
                    </p>
                </button>
            </div>
        </div>
    )
}

export default ReservationCard