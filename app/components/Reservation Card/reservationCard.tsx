import styles from "./reservationCard.module.css"

const ReservationCard = ({ name, contact, product }: { name: string, contact: string, product: string}) => {

    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <p>{name}</p>
                <p>{contact}</p>
                <p>{product}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.complete}>
                    complete
                </button>
                <button className={styles.cancel}>
                    cancel
                </button>
            </div>
        </div>
    )
}

export default ReservationCard