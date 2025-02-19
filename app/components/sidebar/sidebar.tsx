import styles from "./sidebar.module.css";

const Sidebar = () => {    

    return (
        <div className={styles.sidebar}>
            <button className={styles.create}>
                <p className={styles.buttonText}>Create</p>
            </button>
            <button className={styles.delete}>
                <p className={styles.buttonText}>Delete</p>
            </button>
        </div>
    )
}

export default Sidebar