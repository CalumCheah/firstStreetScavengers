import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <p className={styles.title}>
                <Link href="/">First Street Scavengers</Link>
            </p>
        </div>
    )
}

export default Navbar